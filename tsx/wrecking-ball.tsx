function IconWreckingBall({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wrecking-ball"
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
      <path d="M19 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M13 19l-9 0" />
      <path d="M4 15l9 0" />
      <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
      <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
      <path d="M19 11v-7l-6 7" />
    </svg>
  );
}
export default IconWreckingBall;
