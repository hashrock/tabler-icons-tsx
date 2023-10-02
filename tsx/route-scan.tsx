function IconRouteScan({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-route-scan"
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M7 12v-3h3" />
      <path d="M14 9h3v3" />
      <path d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" />
      <path d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" />
    </svg>
  );
}
export default IconRouteScan;
