function IconEmphasis({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-emphasis"
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
      <path d="M16 5h-8v10h8m-1 -5h-7" />
      <path d="M6 20l0 .01" />
      <path d="M10 20l0 .01" />
      <path d="M14 20l0 .01" />
      <path d="M18 20l0 .01" />
    </svg>
  );
}
export default IconEmphasis;
