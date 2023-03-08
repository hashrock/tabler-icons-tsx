function IconBraille({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-braille"
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
      <path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
      <path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
      <path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
      <path d="M16 12h.01" />
      <path d="M8 12h.01" />
      <path d="M16 19h.01" />
    </svg>
  );
}
export default IconBraille;
