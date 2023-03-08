function IconColumns({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-columns"
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
      <path d="M4 6l5.5 0" />
      <path d="M4 10l5.5 0" />
      <path d="M4 14l5.5 0" />
      <path d="M4 18l5.5 0" />
      <path d="M14.5 6l5.5 0" />
      <path d="M14.5 10l5.5 0" />
      <path d="M14.5 14l5.5 0" />
      <path d="M14.5 18l5.5 0" />
    </svg>
  );
}
export default IconColumns;
