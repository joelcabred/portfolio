// src/app/about/page.tsx
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const cvs = [
    { lang: "English", code: "en", href: "/cv/joel-cabrera-cv-en.pdf" },
    { lang: "Français", code: "fr", href: "/cv/joel-cabrera-cv-fr.pdf" },
    //{ lang: "Español", code: "es", href: "/cv/joel-cabrera-cv-es.pdf" },
  ];
  return (
    <main className="space-y-6">
        <h1 className="text-2xl font-semibold">About me</h1>
      <div className="not-prose flex flex-col md:flex-row md:items-start gap-6 mb-8">
        {/* Foto */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <Image
            src="/profile.png" // poné tu foto en /public/profile.jpg
            alt="Joel Cabrera"
            width={180}
            height={180}
            className="rounded-full border shadow-sm"
          />
        </div>

        <div className="flex-1 space-y-4">
        <p>
        I started my studies in 2021 at the{" "}
        <a
            href="https://www.fing.edu.uy/"
            target="_blank"
            rel="noreferrer"
        >
            Faculty of Engineering, Universidad de la República
        </a>{" "}
        (Uruguay), where I enrolled in the Computer Engineering program.
        During this period, I took the core engineering courses such as
        mathematical analysis and programming.
        </p>
        <p>
        Later, I continued my career at <strong>Télécom Paris</strong>, France,
        after being accepted into the double degree program between my home
        university in Uruguay and Télécom. This exchange was possible thanks to
        a national scholarship from the{" "}
        <a
            href="https://www.anii.org.uy/"
            target="_blank"
            rel="noreferrer"
        >
            National Agency for Research and Innovation
        </a>
        .
        </p>
        <p>
        At Télécom Paris I deepened my knowledge in two areas of strong interest
        to me: <strong>Data Science</strong> and <strong>Image Processing</strong>.
        You can explore my student projects in the{" "}
        <a href="/projects">Projects</a> section.
        </p>
        <p>
        Currently (2025-2026) I am completing an{" "}
        <strong>M2 in Automation and Robotics</strong> at Sorbonne University,
        focusing on applying what I have learned throughout my studies while
        exploring robotics more in depth. I am also seeking a{" "}
        <em>final-year internship</em> opportunity.
        </p>
        </div>
        </div>

        {/*Links */}
        <section className="not-prose mt-8">
        <h2 className="text-xl font-semibold mb-4">Find me online</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ajoelc/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>

        <h3 className="mt-6 mb-3 text-lg font-medium">Download CV</h3>
        <div className="flex flex-wrap gap-2">
          {cvs.map(({ lang, code, href }) => (
            <a
              key={code}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label={`Download CV in ${lang}`}
            >
              <FileText className="h-4 w-4" />
              <span>{lang}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
