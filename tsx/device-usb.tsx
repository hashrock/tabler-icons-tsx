function IconDeviceUsb({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-usb"
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
      <path d="M8 8h8v9a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-9z" />
      <path d="M10 8v-4h4v4" />
    </svg>
  );
}
export default IconDeviceUsb;
