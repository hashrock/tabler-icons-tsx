function IconShieldOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-shield-off"
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
      <path d="M3 3l18 18" />
      <path d="M17.669 17.669a12 12 0 0 1 -5.669 3.331a12 12 0 0 1 -8.5 -15c.797 .036 1.589 0 2.366 -.126m3.092 -.912a12 12 0 0 0 3.042 -1.962a12 12 0 0 0 8.5 3a12 12 0 0 1 -1.117 9.379" />
    </svg>
  );
}
export default IconShieldOff;
