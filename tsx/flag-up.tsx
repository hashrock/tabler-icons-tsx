function IconFlagUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-flag-up"
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
      <path d="M14.138 15.241a4.979 4.979 0 0 1 -2.138 -1.241a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
      <path d="M5 21v-7" />
      <path d="M19 22v-6" />
      <path d="M22 19l-3 -3l-3 3" />
    </svg>
  );
}
export default IconFlagUp;
