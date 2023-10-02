function IconArcheryArrow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-archery-arrow"
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
      <path d="M14 7v3h3l3 -3h-3v-3z" />
      <path d="M14 10l-9 9" />
      <path d="M5 15v4h4" />
    </svg>
  );
}
export default IconArcheryArrow;
