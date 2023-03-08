function IconChargingPile({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-charging-pile"
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
      <path d="M18 7l-1 1" />
      <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
      <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
      <path d="M9 11.5l-1.5 2.5h3l-1.5 2.5" />
      <path d="M3 20l12 0" />
      <path d="M4 8l10 0" />
    </svg>
  );
}
export default IconChargingPile;
