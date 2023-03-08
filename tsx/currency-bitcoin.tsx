function IconCurrencyBitcoin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-bitcoin"
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
      <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
      <path d="M8 6l0 12" />
      <path d="M8 12l6 0" />
      <path d="M9 3l0 3" />
      <path d="M13 3l0 3" />
      <path d="M9 18l0 3" />
      <path d="M13 18l0 3" />
    </svg>
  );
}
export default IconCurrencyBitcoin;
