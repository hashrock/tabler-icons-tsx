function IconShoppingCartCopy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-shopping-cart-copy"
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
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M11.5 17h-5.5v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}
export default IconShoppingCartCopy;
