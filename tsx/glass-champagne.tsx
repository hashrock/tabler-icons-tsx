function IconGlassChampagne({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-glass-champagne"
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
      <path d="M9 21h6" />
      <path d="M12 16v5" />
      <path d="M12 5m-4 0a4 2 0 1 0 8 0a4 2 0 1 0 -8 0" />
      <path d="M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11" />
    </svg>
  );
}
export default IconGlassChampagne;
