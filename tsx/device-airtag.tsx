function IconDeviceAirtag({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-airtag"
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
      <path d="M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" />
      <path d="M9 15v.01" />
      <path d="M15 15a6 6 0 0 0 -6 -6" />
      <path d="M12 15a3 3 0 0 0 -3 -3" />
    </svg>
  );
}
export default IconDeviceAirtag;
