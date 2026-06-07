import { generatePlaceholderSVG } from "@/lib/placeholder";

interface ImagePlaceholderProps {
  aspect?: "4/3" | "3/4" | "16/9" | "1/1";
  label?: string;
  className?: string;
}

const aspectClasses = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export function ImagePlaceholder({
  aspect = "4/3",
  label = "Fotografija",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClasses[aspect]} ${className}`}
    >
      <img
        src={generatePlaceholderSVG(label)}
        alt={label}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
