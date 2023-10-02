function IconSignalLte({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-signal-lte"
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
      <path d="M21 8h-4v8h4" />
      <path d="M17 12h2.5" />
      <path d="M4 8v8h4" />
      <path d="M10 8h4" />
      <path d="M12 8v8" />
    </svg>
  );
}
export default IconSignalLte;
