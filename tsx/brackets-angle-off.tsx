function IconBracketsAngleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brackets-angle-off"
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
      <path d="M8 4h.01" />
      <path d="M6.453 6.474l-3.453 5.526l5 8" />
      <path d="M16 4l5 8l-1.917 3.067" />
      <path d="M17.535 17.544l-1.535 2.456" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconBracketsAngleOff;
