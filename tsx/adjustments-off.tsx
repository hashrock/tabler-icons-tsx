function IconAdjustmentsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-adjustments-off"
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
      <path d="M6 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M6 6v2" />
      <path d="M6 12v8" />
      <path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 4v4" />
      <path d="M12 12v2" />
      <path d="M12 18v2" />
      <path d="M18 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 4v1" />
      <path d="M18 9v5" />
      <path d="M18 18v2" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconAdjustmentsOff;
