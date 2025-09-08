"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const ls = localStorage.getItem("theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = ls ? ls === "dark" : preferDark;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="container-page py-6">
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="font-semibold tracking-tight">
            joelcabrera.dev
          </Link>

          {/* Links */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/projects"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400
                         underline-offset-4 hover:underline focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400
                         underline-offset-4 hover:underline focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              About
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              aria-pressed={dark}
              className="ml-2 h-8 w-8 flex items-center justify-center
                         rounded-lg border border-gray-300 dark:border-gray-700
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu*/}
          <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="sm:hidden h-9 w-9 rounded-md border border-gray-300 dark:border-gray-700
                    flex items-center justify-center"
        >
          ≡
        </button>

        </div>

         {/* Mobile panel */}
        {menuOpen && (
          <div className="sm:hidden absolute top-full inset-x-0 z-50
                          bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800
                          shadow-lg">
            <a
              href="/projects"
              className="block px-4 py-3 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <button
              onClick={() => { toggle(); setMenuOpen(false); }}
              className="w-full text-left px-4 py-3 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
