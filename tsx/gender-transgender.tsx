function IconGenderTransgender({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gender-transgender"
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
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M15 9l6 -6" />
      <path d="M21 7v-4h-4" />
      <path d="M9 9l-6 -6" />
      <path d="M3 7v-4h4" />
      <path d="M5.5 8.5l3 -3" />
      <path d="M12 16v5" />
      <path d="M9.5 19h5" />
    </svg>
  );
}
export default IconGenderTransgender;
