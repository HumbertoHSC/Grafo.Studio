/**
 * Pictograma oficial da Grafo Studio.
 *
 * Usa os PNGs reais do brand guideline (em /public/brand/).
 * O prop `color` seleciona a variante de cor correspondente.
 */

const ICON_SRC: Record<string, string> = {
  "#ff4e00": "/brand/icone-laranja.png",
  "#ffffff": "/brand/icone-branca.png",
  "#000000": "/brand/icone-preto.png",
  "#191919": "/brand/icone-preto.png",
};

export function GrafoPictogram({
  color = "#ff4e00",
  className = "",
  size,
}: {
  color?: string;
  className?: string;
  size?: number;
}) {
  const src = ICON_SRC[color.toLowerCase()] ?? ICON_SRC["#ff4e00"];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", height: "auto" }}
    />
  );
}
