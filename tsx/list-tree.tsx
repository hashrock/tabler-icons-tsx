function IconListTree({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-list-tree"
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
      <path d="M9 6h11" />
      <path d="M12 12h8" />
      <path d="M15 18h5" />
      <path d="M5 6v.01" />
      <path d="M8 12v.01" />
      <path d="M11 18v.01" />
    </svg>
  );
}
export default IconListTree;
