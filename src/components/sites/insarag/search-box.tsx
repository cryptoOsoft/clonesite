"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { sourcePath } from "@/components/sites/insarag/content";
import { fill, type Locale, type Messages } from "@/components/sites/insarag/messages";

type SearchDoc = {
  t: string;
  u: string;
  text: string;
};

type Hit = {
  id: string;
  kind: "title" | "snippet";
  title: string;
  url: string;
  snippet: string;
};

const SEARCH_INDEX: Record<Locale, string> = {
  en: "/sites/insarag/search-pages.json",
  ro: "/sites/insarag/search-pages.ro.json",
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return text;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "ig");
  const parts = text.split(pattern);
  return parts.map((part, index) =>
    terms.some((term) => part.toLowerCase() === term.toLowerCase()) ? (
      <mark key={`${part}-${index}`}>{part}</mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

function snippetAround(text: string, terms: string[]) {
  const lower = text.toLowerCase();
  let index = -1;
  for (const term of terms) {
    const found = lower.indexOf(term);
    if (found >= 0 && (index === -1 || found < index)) index = found;
  }
  if (index < 0) return text.slice(0, 140);
  const start = Math.max(0, index - 42);
  const end = Math.min(text.length, index + 110);
  const prefix = start > 0 ? "… " : "";
  const suffix = end < text.length ? " …" : "";
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
}

function buildHits(docs: SearchDoc[], query: string): Hit[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  const scored = docs
    .map((doc) => {
      const title = doc.t.toLowerCase();
      const text = doc.text.toLowerCase();
      const titleHit = terms.every((term) => title.includes(term));
      const textHit = terms.every((term) => text.includes(term));
      if (!titleHit && !textHit) return null;
      let score = 0;
      if (title.startsWith(terms[0] ?? "")) score += 30;
      if (titleHit) score += 80;
      if (title.includes(query.trim().toLowerCase())) score += 40;
      if (textHit) score += 20;
      return { doc, score, titleHit, textHit };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => b.score - a.score || a.doc.t.localeCompare(b.doc.t));

  const hits: Hit[] = [];
  for (const item of scored) {
    if (hits.length >= 7) break;
    if (item.titleHit) {
      hits.push({
        id: `title-${item.doc.u}`,
        kind: "title",
        title: item.doc.t,
        url: item.doc.u,
        snippet: "",
      });
    }
    if (item.textHit && hits.length < 7) {
      hits.push({
        id: `text-${item.doc.u}`,
        kind: "snippet",
        title: item.doc.t,
        url: item.doc.u,
        snippet: snippetAround(item.doc.text, terms),
      });
    }
  }
  return hits;
}

export function SearchBox({ locale, copy }: { locale: Locale; copy: Messages["chrome"] }) {
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  useEffect(() => {
    if (!open || docs) return;
    let cancelled = false;
    fetch(SEARCH_INDEX[locale])
      .then((response) => response.json())
      .then((data: SearchDoc[]) => {
        if (!cancelled) setDocs(data);
      })
      .catch(() => {
        if (!cancelled) setDocs([]);
      });
    return () => {
      cancelled = true;
    };
  }, [open, docs, locale]);

  const hits = useMemo(() => buildHits(docs ?? [], query), [docs, query]);

  function onKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
      return;
    }
    if (!open) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((current) => Math.min(current + 1, Math.max(hits.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((current) => Math.max(current - 1, 0));
    } else if (event.key === "Enter" && hits[active]) {
      event.preventDefault();
      window.location.assign(sourcePath(hits[active].url));
    }
  }

  const showPanel = open && query.trim().length > 0;

  return (
    <div className="search-slot">
    <div className={`search${query ? " has-value" : ""}`} ref={rootRef}>
      <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
        />
      </svg>
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        placeholder={copy.searchPlaceholder}
        aria-label={copy.searchLabel}
        role="combobox"
        aria-expanded={showPanel}
        aria-controls={listId}
        aria-autocomplete="list"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />
      {query ? (
        <button
          className="search-clear"
          type="button"
          aria-label={copy.clearSearch}
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
        >
          ×
        </button>
      ) : null}
      <span className="search-hint" aria-hidden="true">
        <kbd className="mod-ctrl">Ctrl</kbd>
        <kbd className="mod-cmd">⌘</kbd>
        <kbd>K</kbd>
      </span>
      {showPanel ? (
        <div className="search-panel" id={listId} role="listbox">
          {docs === null ? <p className="search-empty">{copy.loadingResults}</p> : null}
          {docs !== null && hits.length === 0 ? (
            <p className="search-empty">{fill(copy.noResults, { query: query.trim() })}</p>
          ) : null}
          {hits.map((hit, index) => (
            <a
              key={hit.id}
              className={`search-hit${index === active ? " active" : ""}`}
              role="option"
              aria-selected={index === active}
              href={sourcePath(hit.url)}
              onMouseEnter={() => setActive(index)}
            >
              {hit.kind === "snippet" ? <span className="search-tree" aria-hidden="true" /> : null}
              {hit.kind === "title" ? (
                <svg className="search-hit-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15zm0-6h4v1.5H8V9z"
                  />
                </svg>
              ) : null}
              <span className="search-hit-copy">
                {hit.kind === "title" ? (
                  <span className="search-hit-title">
                    <Highlight text={hit.title} query={query} />
                  </span>
                ) : (
                  <>
                    <span className="search-hit-snippet">
                      <Highlight text={hit.snippet} query={query} />
                    </span>
                    <span className="search-hit-path">{hit.title}</span>
                  </>
                )}
              </span>
              <svg className="search-hit-go" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                />
              </svg>
            </a>
          ))}
          <a className="search-all" href={sourcePath(`/search?q=${encodeURIComponent(query.trim())}`)}>
            {copy.seeAllResults}
          </a>
        </div>
      ) : null}
    </div>
    </div>
  );
}
