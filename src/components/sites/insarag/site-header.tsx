"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, sourcePath, type NavItem } from "@/components/sites/insarag/content";
import { SearchBox } from "@/components/sites/insarag/search-box";

type ThemeChoice = "light" | "dark" | "system";

function applyTheme(choice: ThemeChoice) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = choice === "system" ? (systemDark ? "dark" : "light") : choice;
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-theme-choice", choice);
  if (choice === "system") localStorage.removeItem("theme");
  else localStorage.setItem("theme", choice);
  const title = `${choice} mode`;
  const aria = `Switch between dark and light mode (currently ${choice} mode)`;
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
    button.title = title;
    button.setAttribute("aria-label", aria);
  });
}

function ThemeToggle({ className }: { className?: string }) {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const choice: ThemeChoice = stored === "light" || stored === "dark" ? stored : "system";
    applyTheme(choice);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = document.documentElement.getAttribute("data-theme-choice");
      if (current === "system" || !current) applyTheme("system");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      className={`theme-toggle${className ? ` ${className}` : ""}`}
      type="button"
      data-theme-toggle
      title="system mode"
      aria-label="Switch between dark and light mode (currently system mode)"
      onClick={() => {
        const current = document.documentElement.getAttribute("data-theme-choice");
        const next: ThemeChoice =
          current === "system" || !current ? "light" : current === "light" ? "dark" : "system";
        applyTheme(next);
      }}
    >
      <svg className="theme-icon theme-icon-light" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-10 6h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zM18.36 16.95a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zM19.42 5.99c.39-.39.39-1.03 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
        />
      </svg>
      <svg className="theme-icon theme-icon-dark" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.015 7.015 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.403 5.403 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4-.64-.04-1.1-.1-1.36-.1"
        />
      </svg>
      <svg className="theme-icon theme-icon-system" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9-9 4.029-9 9 4.029 9 9 9zm4.95-13.95A6.97 6.97 0 0 1 19 12a6.97 6.97 0 0 1-2.05 4.95A6.97 6.97 0 0 1 12 19V5c1.857 0 3.637.737 4.95 2.05z"
        />
      </svg>
    </button>
  );
}

function MenuLinks({ item }: { item: NavItem }) {
  if (item.links) {
    return (
      <div className="menu-panel">
        <div className="menu-heading">{item.label}</div>
        {item.links.map((link) => (
          <a key={link.href + link.label} className="menu-link" href={sourcePath(link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="menu-panel mega">
      {item.overview ? (
        <div className="mega-top">
          <div className="menu-heading">{item.label}</div>
          <a className="menu-link" href={sourcePath(item.overview.href)}>
            {item.overview.label}
          </a>
        </div>
      ) : null}
      <div className="mega-columns">
        {item.columns?.map((column) => (
          <div className="mega-column" key={column.heading}>
            <div className="menu-heading">{column.heading}</div>
            {column.links.map((link) => (
              <a key={column.heading + link.label} className="menu-link" href={sourcePath(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 996) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`navbar${open ? " nav-open" : ""}`}>
      <a className="skip-link" href="#content">
        Skip to main content
      </a>
      <div className="navbar-inner">
        <div className="navbar-left">
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation bar"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>
          <Link className="brand" href="/">
            <img src="/sites/insarag/insarag-logo.svg" alt="INSARAG Preparedness Response logo" />
          </Link>
          <nav className="desktop-nav" aria-label="Main">
            {navigation.map((item) => (
              <div className="nav-item" key={item.label}>
                <button className="nav-trigger" type="button" aria-haspopup="true">
                  {item.label}
                </button>
                <div className="nav-menu">
                  <MenuLinks item={item} />
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="navbar-right">
          <ThemeToggle className="navbar-theme" />
          <SearchBox />
        </div>
      </div>
      <div className="backdrop" onClick={() => setOpen(false)} />
      <div className="drawer" role="dialog" aria-label="Navigation" aria-modal={open} inert={!open}>
        <div className="drawer-brand">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <img src="/sites/insarag/insarag-logo.svg" alt="INSARAG Preparedness Response logo" />
          </Link>
          <ThemeToggle />
          <button className="drawer-close" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
              />
            </svg>
          </button>
        </div>
        <ul className="drawer-list">
          {navigation.map((item) => {
            const isOpen = expanded === item.label;
            return (
              <li className={`drawer-section${isOpen ? " open" : ""}`} key={item.label}>
                <button
                  className="drawer-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                >
                  {item.label}
                  <svg className="chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
                {isOpen ? (
                  <div className="drawer-panel">
                    <MenuLinks item={item} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
