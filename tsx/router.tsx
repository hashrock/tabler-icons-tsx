function IconRouter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-router"
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
      <path d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M17 17l0 .01" />
      <path d="M13 17l0 .01" />
      <path d="M15 13l0 -2" />
      <path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
      <path d="M8.5 6.5a8 8 0 0 1 13 0" />
    </svg>
  );
}
export default IconRouter;
