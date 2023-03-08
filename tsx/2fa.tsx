function Icon2fa({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-2fa"
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
      <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
      <path d="M10 16v-8h4" />
      <path d="M10 12l3 0" />
      <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
      <path d="M17 13l4 0" />
    </svg>
  );
}
export default Icon2fa;
