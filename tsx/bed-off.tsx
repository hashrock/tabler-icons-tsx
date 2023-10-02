function IconBedOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bed-off"
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
      <path d="M7 7a2 2 0 1 0 2 2" />
      <path d="M22 17v-3h-4m-4 0h-12" />
      <path d="M2 8v9" />
      <path d="M12 12v2h2m4 0h4v-2a3 3 0 0 0 -3 -3h-6" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconBedOff;
