function IconCurrencyYen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-yen"
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
      <path d="M12 19v-7l-5 -7m10 0l-5 7" />
      <path d="M8 17l8 0" />
      <path d="M8 13l8 0" />
    </svg>
  );
}
export default IconCurrencyYen;
