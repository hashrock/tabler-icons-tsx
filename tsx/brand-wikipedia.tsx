function IconBrandWikipedia({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-wikipedia"
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
      <path d="M3 4.984h2" />
      <path d="M8 4.984h2.5" />
      <path d="M14.5 4.984h2.5" />
      <path d="M22 4.984h-2" />
      <path d="M4 4.984l5.455 14.516l6.545 -14.516" />
      <path d="M9 4.984l6 14.516l6 -14.516" />
    </svg>
  );
}
export default IconBrandWikipedia;
