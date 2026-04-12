import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-12">Publications</h1>

      <div className="space-y-16">
        {publications.map((pub, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              {/* TEXT */}
              <div
                className={`md:w-1/2 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-xl font-semibold leading-snug">
                  {pub.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  {pub.authors}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {pub.venue ? `${pub.venue} · ` : ""}
                  {pub.year}
                </p>

                {pub.description && (
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                    {pub.description}
                  </p>
                )}

                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    className="inline-block mt-5 text-blue-600 hover:underline text-sm"
                  >
                    Read paper
                  </a>
                )}
              </div>

              {/* IMAGE (A4 STYLE CARD) */}
              <div
                className={`md:w-1/2 flex justify-center ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="w-[180px] h-[255px] md:w-[220px] md:h-[310px] border bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}