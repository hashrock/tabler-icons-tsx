function IconFlipHorizontal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-flip-horizontal"
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
      <path d="M3 12l18 0" />
      <path d="M7 16l10 0l-10 5l0 -5" />
      <path d="M7 8l10 0l-10 -5l0 5" />
    </svg>
  );
}
export default IconFlipHorizontal;
