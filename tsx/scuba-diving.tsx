function IconScubaDiving({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-scuba-diving"
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
      <path d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" />
      <path d="M11 8l4.5 1.5" />
    </svg>
  );
}
export default IconScubaDiving;
