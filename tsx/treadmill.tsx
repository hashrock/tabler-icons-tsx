function IconTreadmill({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-treadmill"
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
      <path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M3 14l4 1l.5 -.5" />
      <path d="M12 18v-3l-3 -2.923l.75 -5.077" />
      <path d="M6 10v-2l4 -1l2.5 2.5l2.5 .5" />
      <path d="M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1" />
      <path d="M18 21l1 -11l2 -1" />
    </svg>
  );
}
export default IconTreadmill;
