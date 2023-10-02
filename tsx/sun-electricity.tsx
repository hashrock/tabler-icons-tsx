function IconSunElectricity({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sun-electricity"
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
      <path d="M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4" />
      <path d="M3 12h1" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M5.6 5.6l.7 .7" />
      <path d="M6.3 17.7l-.7 .7" />
      <path d="M20 7l-3 5h4l-3 5" />
    </svg>
  );
}
export default IconSunElectricity;
