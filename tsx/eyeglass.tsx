function IconEyeglass({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-eyeglass"
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
      <path d="M8 4h-2l-3 10" />
      <path d="M16 4h2l3 10" />
      <path d="M10 16l4 0" />
      <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
      <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    </svg>
  );
}
export default IconEyeglass;
