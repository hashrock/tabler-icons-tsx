function IconWheelchairOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wheelchair-off"
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
      <path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M17.582 17.59a2 2 0 0 0 2.833 2.824" />
      <path d="M14 14h-1.4" />
      <path d="M6 6v5" />
      <path d="M6 8h2m4 0h5" />
      <path d="M15 8v3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconWheelchairOff;
