interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "alabaster" | "white" | "midnight" | "grid";
  padding?: "default" | "compact" | "wide";
}

const backgrounds = {
  alabaster: "bg-alabaster",
  white: "bg-white",
  midnight: "bg-midnight text-alabaster",
  grid: "bg-alabaster bg-grid",
};

const paddings = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  wide: "py-24 md:py-32",
};

export function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
