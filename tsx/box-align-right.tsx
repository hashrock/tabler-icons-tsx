function IconBoxAlignRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-box-align-right"
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
      <path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" />
      <path d="M8.998 20.003h.01" />
      <path d="M3.997 20.003h.011" />
      <path d="M3.997 15.002h.011" />
      <path d="M3.997 9.002h.011" />
      <path d="M3.997 4.002h.011" />
      <path d="M8.998 4.002h.01" />
    </svg>
  );
}
export default IconBoxAlignRight;
