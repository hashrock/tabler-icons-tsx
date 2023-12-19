function IconShovelPitchforks({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-shovel-pitchforks"
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
      <path d="M5 3h4" />
      <path d="M7 3v12" />
      <path d="M4 15h6v3a3 3 0 0 1 -6 0v-3z" />
      <path d="M14 21v-3a3 3 0 0 1 6 0v3" />
      <path d="M17 21v-18" />
    </svg>
  );
}
export default IconShovelPitchforks;
