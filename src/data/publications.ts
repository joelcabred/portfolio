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
    url: "https://www.researchgate.net/profile/Pedro-Moreno-47/publication/400216560_Actas_de_las_II_Jornadas_Uruguayas_de_Ciencias_de_la_Computacion_2025_Ida_Holz/links/697b987dca66ef6ab98e5c0f/Actas-de-las-II-Jornadas-Uruguayas-de-Ciencias-de-la-Computacion-2025-Ida-Holz.pdf#page=47"
    },
];