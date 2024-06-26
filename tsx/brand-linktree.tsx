function IconBrandLinktree({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-linktree"
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
      <path d="M4 10h16" />
      <path d="M6.5 4.5l11 11" />
      <path d="M6.5 15.5l11 -11" />
      <path d="M12 10v-8" />
      <path d="M12 15v7" />
    </svg>
  );
}
export default IconBrandLinktree;
