function IconSignalHPlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-signal-h-plus"
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
      <path d="M7 16v-8" />
      <path d="M11 8v8" />
      <path d="M7 12h4" />
      <path d="M14 12h4" />
      <path d="M16 10v4" />
    </svg>
  );
}
export default IconSignalHPlus;
