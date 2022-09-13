function IconBrandChrome({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-chrome"
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
      <circle cx={12} cy={12} r={3} />
      <line x1={12} y1={9} x2={20.4} y2={9} />
      <line x1={12} y1={9} x2={20.4} y2={9} transform="rotate(120 12 12)" />
      <line x1={12} y1={9} x2={20.4} y2={9} transform="rotate(240 12 12)" />
    </svg>
  );
}

export default IconBrandChrome;
