function IconQuotes({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-quotes"
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
      <path d="M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
      <path d="M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
      <path d="M16 18c1.333 -1.854 1.333 -4.146 0 -6" />
      <path d="M20 18c1.333 -1.854 1.333 -4.146 0 -6" />
    </svg>
  );
}
export default IconQuotes;
