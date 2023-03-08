function IconBrandBinance({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-binance"
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
      <path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
      <path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
      <path d="M20 10l2 2l-2 2l-2 -2z" />
      <path d="M4 10l2 2l-2 2l-2 -2z" />
      <path d="M12 10l2 2l-2 2l-2 -2z" />
    </svg>
  );
}
export default IconBrandBinance;
