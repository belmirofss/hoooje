import { OG_SIZE, ogImage } from "./shared/components/OgCard";

export const alt = "Hoooje: cotação do dólar, euro e bitcoin hoje";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Cotações atualizadas a cada minuto",
    title: "Quanto vale o seu dinheiro hoje?",
  });
}
