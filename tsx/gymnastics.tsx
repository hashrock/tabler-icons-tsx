function IconGymnastics({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gymnastics"
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
      <path d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M13 21l1 -9l7 -6" />
      <path d="M3 11h6l5 1" />
      <path d="M11.5 8.5l4.5 -3.5" />
    </svg>
  );
}
export default IconGymnastics;
