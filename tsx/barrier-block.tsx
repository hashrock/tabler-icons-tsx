function IconBarrierBlock({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-barrier-block"
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
      <path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
      <path d="M7 16v4" />
      <path d="M7.5 16l9 -9" />
      <path d="M13.5 16l6.5 -6.5" />
      <path d="M4 13.5l6.5 -6.5" />
      <path d="M17 16v4" />
      <path d="M5 20h4" />
      <path d="M15 20h4" />
      <path d="M17 7v-2" />
      <path d="M7 7v-2" />
    </svg>
  );
}
export default IconBarrierBlock;
