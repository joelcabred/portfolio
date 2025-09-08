import Image from "next/image";
import type { Project } from "@/data/projects";
import { Github, FileText, PlayCircle, Globe } from "lucide-react";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition hover:shadow dark:border-neutral-800">
      {/* Cover */}
      <div className="relative h-40 w-full">
        {p.cover ? (
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-emerald-300 to-lime-300 dark:from-emerald-600 dark:to-lime-600" />
        )}
        {/* overlay para legibilidad del título sobre imágenes oscuras */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
          <h3 className="text-lg font-semibold text-white drop-shadow">{p.title}</h3>
          <span className="text-sm text-white/90 drop-shadow">{p.year}</span>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-3 bg-white p-5 dark:bg-neutral-950">
        <p className="text-neutral-700 dark:text-neutral-300">{p.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {p.tags.map(t => (
            <span
              key={t}
              className="rounded-full border px-2 py-0.5 text-xs
                         border-neutral-300 text-neutral-700
                         dark:border-neutral-600 dark:text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions: repo + report si existen */}
        <div className="flex flex-wrap gap-2 pt-1">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         border-neutral-300 dark:border-neutral-700"
              aria-label={`Open repository for ${p.title}`}
            >
              <Github className="h-4 w-4" />
              Repository
            </a>
          )}
          {p.report && (
            <a
              href={p.report}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         border-neutral-300 dark:border-neutral-700"
              aria-label={`Open report PDF for ${p.title}`}
            >
              <FileText className="h-4 w-4" />
              Report (PDF)
            </a>
          )}
          {p.video && (
            <a
              href={p.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         border-neutral-300 dark:border-neutral-700"
              aria-label={`Open video for ${p.title}`}
            >
              <PlayCircle className="h-4 w-4" />
              Video 
            </a>
          )}
          {p.webpage &&(
            <a
              href={p.webpage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         border-neutral-300 dark:border-neutral-700"
              aria-label={`Open webpage for ${p.title}`}
            >
              <Globe className="h-4 w-4" />
              Webpage 
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
