function IconBuildingLighthouse({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-building-lighthouse"
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
      <path d="M12 3l2 3l2 15h-8l2 -15z" />
      <path d="M8 9l8 0" />
      <path d="M3 11l2 -2l-2 -2" />
      <path d="M21 11l-2 -2l2 -2" />
    </svg>
  );
}
export default IconBuildingLighthouse;
