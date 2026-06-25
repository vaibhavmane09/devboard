// 2x2 grid of rounded squares at varying opacities, with the "DevBoard" wordmark.
// Sized per brand kit: 36px icon + 20px wordmark default, 26px + 15px compact.

export function Logo({ compact = false, iconOnly = false }) {
  const iconSize = compact ? 26 : 36;
  const wordmarkSize = compact ? 15 : 20;
  const tile = iconSize / 2 - 2;   // 11 (compact) or 16 (default)
  const gap = (iconSize - tile * 2) / 3; // spacing between tiles

  const inner = (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} aria-hidden="true">
      <rect width={iconSize} height={iconSize} rx={iconSize * 0.25} fill="#7F77DD" />
      <g fill="#ffffff">
        <rect x={gap}          y={gap}          width={tile} height={tile} rx="2" fillOpacity="0.95" />
        <rect x={gap*2+tile}   y={gap}          width={tile} height={tile} rx="2" fillOpacity="0.6"  />
        <rect x={gap}          y={gap*2+tile}   width={tile} height={tile} rx="2" fillOpacity="0.6"  />
        <rect x={gap*2+tile}   y={gap*2+tile}   width={tile} height={tile} rx="2" fillOpacity="0.35" />
      </g>
    </svg>
  );
  if (iconOnly) return inner;
  return (
    <div className="inline-flex items-center gap-2">
      {inner}
      <span
        style={{ fontSize: wordmarkSize, letterSpacing: '-0.4px' }}
        className="font-semibold leading-none"
      >
        <span className="text-ink-950 dark:text-white">Dev</span>
        <span style={{ color: '#7F77DD' }}>Board</span>
      </span>
    </div>
  );
}
