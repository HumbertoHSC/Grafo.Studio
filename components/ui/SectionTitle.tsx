import { clsx } from "clsx";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionTitle({ children, className, light = false }: SectionTitleProps) {
  return (
    <div className={clsx("flex items-center gap-3 mb-10", className)}>
      <span className="block w-1 h-8 bg-[#ff4e00] rounded-full flex-shrink-0" />
      <h2
        className={clsx(
          "text-2xl md:text-3xl font-bold tracking-tight",
          light ? "text-white" : "text-white"
        )}
      >
        {children}
      </h2>
    </div>
  );
}
