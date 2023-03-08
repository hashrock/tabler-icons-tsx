function IconArrowsDoubleSeNw({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-double-se-nw"
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
      <path d="M3 10l11 11" />
      <path d="M14 17v4h-4" />
      <path d="M14 3h-4v4" />
      <path d="M21 14l-11 -11" />
    </svg>
  );
}
export default IconArrowsDoubleSeNw;
