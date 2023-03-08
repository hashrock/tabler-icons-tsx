function IconSolarPanel2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-solar-panel-2"
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
      <path d="M8 2a4 4 0 1 0 8 0" />
      <path d="M4 3h1" />
      <path d="M19 3h1" />
      <path d="M12 9v1" />
      <path d="M17.2 7.2l.707 .707" />
      <path d="M6.8 7.2l-.7 .7" />
      <path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" />
      <path d="M4 17h16" />
      <path d="M10 13l-1 8" />
      <path d="M14 13l1 8" />
    </svg>
  );
}
export default IconSolarPanel2;
