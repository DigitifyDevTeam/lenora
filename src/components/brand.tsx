import Image from "next/image";

export function BrandLogo({
  className = "size-14",
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Lenora Conciergerie"
      width={160}
      height={160}
      preload={preload}
      loading={preload ? "eager" : "lazy"}
      className={`rounded-2xl bg-paper object-contain ${className}`}
    />
  );
}
