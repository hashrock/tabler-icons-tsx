function IconRobotFace({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-robot-face"
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
      <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
      <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
      <path d="M9 7l-1 -4" />
      <path d="M15 7l1 -4" />
      <path d="M9 12v-1" />
      <path d="M15 12v-1" />
    </svg>
  );
}
export default IconRobotFace;
