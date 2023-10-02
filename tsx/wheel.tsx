function IconWheel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wheel"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M3 12h6" />
      <path d="M15 12h6" />
      <path d="M13.6 9.4l3.4 -4.8" />
      <path d="M10.4 14.6l-3.4 4.8" />
      <path d="M7 4.6l3.4 4.8" />
      <path d="M13.6 14.6l3.4 4.8" />
    </svg>
  );
}
export default IconWheel;
