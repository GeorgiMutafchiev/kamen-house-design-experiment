import Image from "next/image";
import { conceptNotice } from "@/lib/content";

type Props = { src: string; alt: string; caption?: string; className?: string; priority?: boolean; sizes?: string };

export function ConceptImage({ src, alt, caption = conceptNotice, className = "", priority = false, sizes = "100vw" }: Props) {
  const basePath = process.env.NEXT_PUBLIC_KAMEN_BASE_PATH ?? "";
  return (
    <figure className={`concept-image ${className}`}>
      <div className="image-frame"><Image src={`${basePath}${src}`} alt={alt} fill priority={priority} sizes={sizes} /></div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
