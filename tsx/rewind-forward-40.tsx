function IconRewindForward40({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-rewind-forward-40"
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
      <path d="M5.007 16.478a6 6 0 0 1 3.993 -10.478h11" />
      <path d="M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
      <path d="M17 9l3 -3l-3 -3" />
      <path d="M9 14v2a1 1 0 0 0 1 1h1" />
      <path d="M12 14v6" />
    </svg>
  );
}
export default IconRewindForward40;
