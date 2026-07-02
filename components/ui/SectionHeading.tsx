import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl uppercase tracking-wide text-text-primary sm:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
          {subheading}
        </p>
      )}
    </div>
  );
}
