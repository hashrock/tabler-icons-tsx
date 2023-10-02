function IconBoxAlignTop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-box-align-top"
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
      <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
      <path d="M4 15.005v-.01" />
      <path d="M4 20.005v-.01" />
      <path d="M9 20.005v-.01" />
      <path d="M15 20.005v-.01" />
      <path d="M20 20.005v-.01" />
      <path d="M20 15.005v-.01" />
    </svg>
  );
}
export default IconBoxAlignTop;
