interface ImagePlaceholderProps {
  aspect?: "4/3" | "3/4" | "16/9" | "1/1";
  label?: string;
  className?: string;
  src?: string;
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
  src,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClasses[aspect]} ${className}`}
    >
      <img
        src={src || `https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80&fit=crop`}
        alt={label}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
