function IconBrandYahoo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-yahoo"
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
      <path d="M3 6l5 0" />
      <path d="M7 18l7 0" />
      <path d="M4.5 6l5.5 7v5" />
      <path d="M10 13l6 -5" />
      <path d="M12.5 8l5 0" />
      <path d="M20 11l0 4" />
      <path d="M20 18l0 .01" />
    </svg>
  );
}
export default IconBrandYahoo;
