interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 font-medium text-emerald-500">{eyebrow}</p>
      )}
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>
      )}
    </div>
  );
}
