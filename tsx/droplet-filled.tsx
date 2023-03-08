function IconDropletFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-droplet-filled"
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
      <path
        d="M6.801 11.003a6 6 0 1 0 10.396 -.003l-5.197 -8l-5.199 8.003z"
        stroke="#010202"
        strokeWidth={0}
        fill="currentColor"
      />
      <path d="M12 3v17" strokeWidth={0} fill="currentColor" />
      <path d="M12 12l3.544 -3.544" strokeWidth={0} fill="currentColor" />
      <path d="M12 17.3l5.558 -5.558" strokeWidth={0} fill="currentColor" />
    </svg>
  );
}
export default IconDropletFilled;
