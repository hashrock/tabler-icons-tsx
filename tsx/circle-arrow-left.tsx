function IconCircleArrowLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-arrow-left"
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
      <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
      <path d="M8 12l4 4" />
      <path d="M8 12h8" />
      <path d="M12 8l-4 4" />
    </svg>
  );
}
export default IconCircleArrowLeft;
