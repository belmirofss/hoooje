import { OG_SIZE, ogImage } from "../shared/components/OgCard";
import { getPair, pairTitle, pairs } from "../shared/data/pairs";

export const alt = "Cotação atualizada a cada minuto no Hoooje";
export const size = OG_SIZE;
export const contentType = "image/png";

export const generateStaticParams = () =>
  pairs.map((pair) => ({ slug: pair.slug }));

export default function Image({ params }: { params: { slug: string } }) {
  return ogImage({
    eyebrow: "Atualizada a cada minuto",
    title: pairTitle(getPair(params.slug)!),
  });
}
