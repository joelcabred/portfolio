"use client";

import React, { useState, useEffect } from "react";
import { projects, type Project } from "@/data/projects"; // ajustá la ruta
import { useRef } from "react";

import Image from 'next/image';

const GREETINGS = ['Hola', 'Bonjour', 'Hello'];

export default function HeroSection() {
  const greetings = [
    { text: "Hola, soy", flag: "🇺🇾" },
    { text: "Hi, I am", flag: "🇬🇧" },
    { text: "Salut, c’est", flag: "🇫🇷" },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 70;      // ms por letra
  const pauseTime = 900;       // pausa al final/inicio

const scrollerRef = useRef<HTMLDivElement>(null);

const scrollByCards = (dir: "left" | "right") => {
  const node = scrollerRef.current;
  if (!node) return;
  const delta = dir === "left" ? -400 : 400;
  node.scrollBy({ left: delta, behavior: "smooth" });
};

const featured = React.useMemo<Project[]>(
  () =>
    [...projects]
      .sort((a, b) => b.year - a.year) // más recientes primero
      .slice(0, 3),                    // tomá 3
  []
);



  useEffect(() => {
    const current = greetings[index].text;
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timer = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, typingSpeed / 1.8);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % greetings.length);
      }, pauseTime / 1.2);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, greetings]);


  return (
    <div className="flex flex-col min-h-screen px-8 space-y-8">
      {/* Saludo rotativo */}
      <h1 className="text-[clamp(24px,7vw,40px)] leading-tight tracking-tight flex flex-wrap items-center gap-2">
        <span className="whitespace-pre">{displayText}</span>{" "}
        <span className="text-blue-600 whitespace-nowrap">Joel Cabrera</span>
        <span className="hidden sm:inline">{greetings[index].flag}</span>
        {/* cursor */}
        <span className="inline-block w-[2px] h-[1.2em] bg-current animate-pulse ml-1 align-middle" />
      </h1>


      {/* Layout con 2 columnas */}
      <div className="py-10 px-5 rounded-xl bg-blue-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-5xl">
        {/* Foto */}
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Joel Cabrera"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>

        {/* Descripción */}
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            Master’s student in <strong>Robotics (M2)</strong> at Sorbonne Université.
            Interests: AI, computer vision, and intelligent systems.
          </p>
          <div className="hidden md:flex justify-center mt-4">
            <a
              href="/about"
              className="px-4 py-2 rounded-xl border shadow font-medium 
                        bg-blue-500 text-white hover:bg-blue-600 
                        hover:shadow-md transition"
            >
              About me
            </a>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className=" w-full max-w-6xl">
        <div className="mt-24 flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <a href="/projects" className="md:hidden text-sm underline">
            See all projects →
          </a>
        </div>

        <div className="relative">
          {/* Botones prev/next (solo desktop) */}
          <button
            onClick={() => scrollByCards("left")}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border px-3 py-2 shadow bg-white/70 backdrop-blur hover:bg-white"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByCards("right")}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border px-3 py-2 shadow bg-white/70 backdrop-blur hover:bg-white"
            aria-label="Next"
          >
            ›
          </button>

          {/* Carrusel por scroll horizontal con snap */}
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pr-2 scroll-smooth
                      [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featured.map((p) => (
              <div
                key={p.slug}
                className="min-w-[280px] md:min-w-[360px] snap-start rounded-2xl border 
                          border-gray-200 dark:border-gray-700 
                          shadow hover:shadow-md transition
                          bg-white dark:bg-gray-900 
                          text-gray-700 dark:text-gray-200
                          overflow-hidden"
              >
                <Image
                  src={p.cover ?? "/covers/placeholder.jpg"}
                  alt={p.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {p.year} · {p.tags.slice(0, 3).join(" · ")}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">{p.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-full border 
                                  border-gray-300 dark:border-gray-600 
                                  text-gray-700 dark:text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Botón principal */}
        <div className="hidden md:flex justify-center mt-4">
          <a
            href="/projects"
            className="px-4 py-2 rounded-xl border shadow font-medium hover:shadow-md transition"
          >
            See all projects
          </a>
        </div>
        
      </section>
      <br></br>
      {/* Contact Me */}
      <section className="mb-24 w-full border-t-2 border-gray-200 pt-10 mt-4 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-6xl font-semibold">Get in touch</h2>
        <p className="dark:text-gray-300 text-gray-600">
          Interested in collaborating or just want to say hi? Feel free to reach out, I’ll be happy to connect.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:joel.cabred@gmail.com" className="px-5 py-2 rounded-xl border shadow font-medium hover:shadow-md transition">
            Contact me
          </a>
          <a href="https://www.linkedin.com/in/ajoelc/?locale=en_US" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl border shadow font-medium hover:shadow-md transition">
            LinkedIn
          </a>
          <a href="https://github.com/joelcabred" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl border shadow font-medium hover:shadow-md transition">
            GitHub
          </a>
        </div>
      </section>


      

    </div>
  );
}
