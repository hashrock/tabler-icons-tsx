function IconAperture({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-aperture"
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
      <path d="M3.6 15h10.55" />
      <path d="M6.551 4.938l3.26 10.034" />
      <path d="M17.032 4.636l-8.535 6.201" />
      <path d="M20.559 14.51l-8.535 -6.201" />
      <path d="M12.257 20.916l3.261 -10.034" />
    </svg>
  );
}
export default IconAperture;
