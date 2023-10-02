function IconMobiledata({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mobiledata"
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
      <path d="M16 12v-8" />
      <path d="M8 20v-8" />
      <path d="M13 7l3 -3l3 3" />
      <path d="M5 17l3 3l3 -3" />
    </svg>
  );
}
export default IconMobiledata;
