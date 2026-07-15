/* The typographic ATLASIRIS lockup — live text per Fonts/atlas-iris-fonts.md:
   ATLAS 500 tracked .30em, IRIS 300 italic tracked .20em. Since 2026-07-13
   the logo proper is the A·I monogram (design-reference/logo/); this lockup
   accompanies it. Size via className on the parent. */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={`font-display font-medium uppercase leading-none tracking-[0.3em] ${
        onDark ? "text-white" : "text-navy"
      }`}
      style={{ fontOpticalSizing: "auto" }}
    >
      ATLAS
      <span
        className={`font-light italic tracking-[0.2em] ${
          onDark ? "text-blue-soft" : "text-blue"
        }`}
      >
        IRIS
      </span>
    </span>
  );
}
