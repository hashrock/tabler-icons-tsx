function IconBrandXdeep({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-xdeep"
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
      <path d="M14.401 8.398l1.599 -2.398h5l-4 6l4 6h-5l-8 -12h-5l4 6l-4 6h5l1.596 -2.393" />
    </svg>
  );
}
export default IconBrandXdeep;
