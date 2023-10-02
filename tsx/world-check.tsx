function IconWorldCheck({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-world-check"
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
      <path d="M20.946 12.99a9 9 0 1 0 -9.46 7.995" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h13.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a16.997 16.997 0 0 1 2.311 12.001" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}
export default IconWorldCheck;
