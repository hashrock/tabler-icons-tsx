function IconHelicopter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-helicopter"
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
      <path d="M3 10l1 2h6" />
      <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
      <path d="M13 9l0 -3" />
      <path d="M5 6l15 0" />
      <path d="M15 9.1v3.9h5.5" />
      <path d="M15 19l0 -3" />
      <path d="M19 19l-8 0" />
    </svg>
  );
}
export default IconHelicopter;
