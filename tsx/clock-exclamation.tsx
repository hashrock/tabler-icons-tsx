function IconClockExclamation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-exclamation"
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
      <path d="M20.986 12.502a9 9 0 1 0 -5.973 7.98" />
      <path d="M12 7v5l3 3" />
      <path d="M19 16v3" />
      <path d="M19 22v.01" />
    </svg>
  );
}
export default IconClockExclamation;
