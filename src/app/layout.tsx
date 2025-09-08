import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Joel Cabrera · Portfolio",
  description: "AI and image processing projects, notes, and contact info.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const initTheme = `
    try {
      const ls = localStorage.getItem("theme");
      const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = ls ?? (preferDark ? "dark" : "light");
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch {}
  `;
  return (
    <html lang="en" className="h-full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider>
          <Nav />
          <div className="container-page py-8">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
