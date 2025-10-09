export function short(s,n){
    if(!s)
        return ''
    return s.replace(/\s+/g,' ').slice(0,n);
}

export function formatOne(p){
      return `[${p.slug}]
                Title: ${p.title}
                Year: ${p.year}
                Tags: ${p.tags.join(', ')}
                Summary: ${short(p.summary, 500)}
                Details: ${short(p.details, 800)}`;
}

export function formatProjects(projects, maxChars = 6000) {
  const blocks = projects.map(formatOne);
  const joined = blocks.join('\n---\n');
  return joined.length > maxChars ? joined.slice(0, maxChars) : joined;
}
