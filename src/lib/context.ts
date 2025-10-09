import type { Project } from '@/data/projects';

export function short(s : string, n: number){
    if(!s)
        return ''
    return s.replace(/\s+/g,' ').slice(0,n);
}

export function formatOne(p: Project){
      return `[${p.slug}]
                Title: ${p.title}
                Year: ${p.year}
                Tags: ${p.tags.join(', ')}
                Summary: ${short(p.summary, 500)}
                Details: ${short(p.details, 800)}`;
}

export function formatProjects(projects : Project[], maxChars = 6000){
  const blocks = projects.map(formatOne);
  const joined = blocks.join('\n---\n');
  return joined.length > maxChars ? joined.slice(0, maxChars) : joined;
}
