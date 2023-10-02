function IconTimeDuration0({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-time-duration-0"
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
      <path d="M3 12v.01" />
      <path d="M21 12v.01" />
      <path d="M12 21v.01" />
      <path d="M12 3v.01" />
      <path d="M7.5 4.2v.01" />
      <path d="M16.5 4.2v.01" />
      <path d="M16.5 19.8v.01" />
      <path d="M7.5 19.8v.01" />
      <path d="M4.2 16.5v.01" />
      <path d="M19.8 16.5v.01" />
      <path d="M19.8 7.5v.01" />
      <path d="M4.2 7.5v.01" />
      <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
    </svg>
  );
}
export default IconTimeDuration0;
