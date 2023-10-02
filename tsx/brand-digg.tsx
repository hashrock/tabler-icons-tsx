function IconBrandDigg({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-digg"
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
      <path d="M6 15h-3v-4h3" />
      <path d="M15 15h-3v-4h3" />
      <path d="M9 15v-4" />
      <path d="M15 11v7h-3" />
      <path d="M6 7v8" />
      <path d="M21 15h-3v-4h3" />
      <path d="M21 11v7h-3" />
    </svg>
  );
}
export default IconBrandDigg;
