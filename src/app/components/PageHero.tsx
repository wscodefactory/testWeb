import { SectionHeader } from "./SectionHeader";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  variant?: "dark" | "green" | "light";
}

const heroVariants = {
  dark: "bg-slate-900 text-white [&_p]:text-slate-300",
  green: "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white [&_p]:text-emerald-50",
  light: "bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-slate-50",
};

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "light",
}: PageHeroProps) {
  return (
    <section className={heroVariants[variant]}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
