// src/data/publications.ts

export type Publication = {
  title: string;
  authors: string;
  venue?: string;
  year: number;
  image: string;
  description?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Grandes Modelos Multimodales para percepción y predicción de metas en robótica",
    authors: "Joel Cabrera Dechia, Guillermo Trinidad Barnech",
    venue: "Universidad de la República, Montevideo",
    year: 2025,
    image: "/papers/JUCC2025_cover.png",
    description:
      "Explores the use of large language models (LLMs) in robotic perception and planning, evaluating Gemini, GPT-4 and Claude.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DrKDTnEAAAAJ&citation_for_view=DrKDTnEAAAAJ:u5HHmVD_uO8C"
    },
];