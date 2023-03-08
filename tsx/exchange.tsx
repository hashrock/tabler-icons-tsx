function IconExchange({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-exchange"
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
      <path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />
      <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
    </svg>
  );
}
export default IconExchange;
