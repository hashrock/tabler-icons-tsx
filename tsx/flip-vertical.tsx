function IconFlipVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-flip-vertical"
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
      <path d="M12 3l0 18" />
      <path d="M16 7l0 10l5 0l-5 -10" />
      <path d="M8 7l0 10l-5 0l5 -10" />
    </svg>
  );
}
export default IconFlipVertical;
