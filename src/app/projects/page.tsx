"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

function uniqueTags(list: string[]) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b));
}

export default function ProjectsPage() {
  const allTags = useMemo(
    () => uniqueTags(projects.flatMap(p => p.tags)),
    []
  );

  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter(p => {
        const matchQuery =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q));
        const matchTags =
          activeTags.length === 0 ||
          activeTags.every(t => p.tags.includes(t));
        return matchQuery && matchTags;
      })
      .sort((a, b) => b.year - a.year);
  }, [query, activeTags]);

  function toggleTag(tag: string) {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }

  function clearAll() {
    setQuery("");
    setActiveTags([]);
  }

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>

      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by title, summary, or tag..."
          className="w-full md:w-80 rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400"
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => {
            const on = activeTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`dark:text-gray-300 rounded-full border px-3 py-1 text-sm transition ${
                  on
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
                }`}
              >
                {tag}
              </button>
            );
          })}
          {(query || activeTags.length > 0) && (
            <button
              onClick={clearAll}
              className="dark:text-gray-50 rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700 hover:border-neutral-500"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <ProjectCard key={p.slug} p={p} />
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500">No projects match the filters.</p>
        )}
      </section>
    </main>
  );
}
