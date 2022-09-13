function IconAperture({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-aperture"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx={12} cy={12} r={9} />
      <line x1={3.6} y1={15} x2={14.15} y2={15} />
      <line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(72 12 12)" />
      <line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(144 12 12)" />
      <line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(216 12 12)" />
      <line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(288 12 12)" />
    </svg>
  );
}

export default IconAperture;
