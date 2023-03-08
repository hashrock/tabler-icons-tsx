function IconArrowRampLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-ramp-left"
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
      <path d="M17 3l0 8.707" />
      <path d="M13 7l4 -4l4 4" />
      <path d="M7 14l-4 -4l4 -4" />
      <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
    </svg>
  );
}
export default IconArrowRampLeft;
