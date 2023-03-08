function IconArrowLeftRhombus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-left-rhombus"
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
      <path d="M16 12h-13" />
      <path d="M6 9l-3 3l3 3" />
      <path d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z" />
    </svg>
  );
}
export default IconArrowLeftRhombus;
