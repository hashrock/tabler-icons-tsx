function IconCarGarage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-car-garage"
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
      <path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
      <path d="M3 6l9 -4l9 4" />
    </svg>
  );
}
export default IconCarGarage;
