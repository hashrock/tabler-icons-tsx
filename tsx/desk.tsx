function IconDesk({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-desk"
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
      <path d="M3 6h18" />
      <path d="M4 6v13" />
      <path d="M20 19v-13" />
      <path d="M4 10h16" />
      <path d="M15 6v8a2 2 0 0 0 2 2h3" />
    </svg>
  );
}
export default IconDesk;
