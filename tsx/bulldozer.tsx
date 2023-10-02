function IconBulldozer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bulldozer"
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
      <path d="M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M19 13v4a2 2 0 0 0 2 2h1" />
      <path d="M14 19h-10" />
      <path d="M4 15h10" />
      <path d="M9 11v-5h2a3 3 0 0 1 3 3v6" />
      <path d="M5 15v-3a1 1 0 0 1 1 -1h8" />
      <path d="M19 17h-3" />
    </svg>
  );
}
export default IconBulldozer;
