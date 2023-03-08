function IconBrandDribbble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-dribbble"
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
      <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
      <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
      <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
    </svg>
  );
}
export default IconBrandDribbble;
