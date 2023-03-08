function IconFold({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-fold"
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
      <path d="M12 3v6l3 -3m-6 0l3 3" />
      <path d="M12 21v-6l3 3m-6 0l3 -3" />
      <path d="M4 12l1 0" />
      <path d="M9 12l1 0" />
      <path d="M14 12l1 0" />
      <path d="M19 12l1 0" />
    </svg>
  );
}
export default IconFold;
