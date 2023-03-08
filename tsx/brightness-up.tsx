function IconBrightnessUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brightness-up"
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
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 5l0 -2" />
      <path d="M17 7l1.4 -1.4" />
      <path d="M19 12l2 0" />
      <path d="M17 17l1.4 1.4" />
      <path d="M12 19l0 2" />
      <path d="M7 17l-1.4 1.4" />
      <path d="M6 12l-2 0" />
      <path d="M7 7l-1.4 -1.4" />
    </svg>
  );
}
export default IconBrightnessUp;
