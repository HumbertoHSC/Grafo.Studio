import type { CASES } from "@/lib/constants";

interface Props {
  caso: (typeof CASES)[number];
  fallbackTextSize?: string;
}

export default function ProjectCard({ caso, fallbackTextSize = "text-[7rem]" }: Props) {
  return (
    <a
      href={caso.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group project-card block"
    >
      <div
        className="relative overflow-hidden mb-6 h-[500px]"
        style={{ backgroundColor: caso.cor }}
      >
        {caso.thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={caso.thumb}
            alt={`Print do site ${caso.titulo}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className={`font-institutional ${fallbackTextSize} font-black leading-none tracking-tight select-none transition-transform duration-700 group-hover:scale-110`}
              style={{ color: caso.corAcento, opacity: 0.9 }}
            >
              {caso.titulo}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff4e00] group-hover:h-1 transition-all duration-300" />
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-institutional text-2xl font-bold mb-2 text-[#e2e2e2]">
            {caso.titulo}
          </h3>
          <p className="font-body text-xs text-[#ff4e00] uppercase tracking-widest">
            {caso.categoria}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-4xl text-[#e2e2e2] group-hover:translate-x-2 transition-transform"
        >
          arrow_right_alt
        </span>
      </div>
    </a>
  );
}
