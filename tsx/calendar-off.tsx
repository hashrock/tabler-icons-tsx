function IconCalendarOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-calendar-off"
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
      <path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9" />
      <path d="M16 3l0 4" />
      <path d="M8 3l0 1" />
      <path d="M4 11h7m4 0h5" />
      <path d="M11 15l1 0" />
      <path d="M12 15l0 3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconCalendarOff;
