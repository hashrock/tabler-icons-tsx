function IconMathSymbols({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-math-symbols"
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
      <path d="M12 3l0 18" />
      <path d="M16.5 4.5l3 3" />
      <path d="M19.5 4.5l-3 3" />
      <path d="M6 4l0 4" />
      <path d="M4 6l4 0" />
      <path d="M18 16l.01 0" />
      <path d="M18 20l.01 0" />
      <path d="M4 18l4 0" />
    </svg>
  );
}
export default IconMathSymbols;
