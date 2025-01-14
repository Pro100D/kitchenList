export const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill={color}
    aria-hidden="true"
  >
    <use xlinkHref={`symbol-defs.svg#icon-${name}`} />
  </svg>
);
