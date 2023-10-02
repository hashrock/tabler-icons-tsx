function IconNumber14Small({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-number-14-small"
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
      <path d="M7 10l2 -2v8" />
      <path d="M13 8v3a1 1 0 0 0 1 1h3" />
      <path d="M17 8v8" />
    </svg>
  );
}
export default IconNumber14Small;
