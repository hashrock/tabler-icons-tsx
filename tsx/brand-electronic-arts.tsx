function IconBrandElectronicArts({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-electronic-arts"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
      <path d="M17 14h-2" />
      <path d="M6.5 12h3.5" />
      <path d="M8 9h3" />
    </svg>
  );
}
export default IconBrandElectronicArts;
