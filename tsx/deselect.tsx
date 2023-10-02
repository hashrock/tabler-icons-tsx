function IconDeselect({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-deselect"
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
      <path d="M12 8h3a1 1 0 0 1 1 1v3" />
      <path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
      <path d="M12 20v.01" />
      <path d="M16 20v.01" />
      <path d="M8 20v.01" />
      <path d="M4 20v.01" />
      <path d="M4 16v.01" />
      <path d="M4 12v.01" />
      <path d="M4 8v.01" />
      <path d="M8 4v.01" />
      <path d="M12 4v.01" />
      <path d="M16 4v.01" />
      <path d="M20 4v.01" />
      <path d="M20 8v.01" />
      <path d="M20 12v.01" />
      <path d="M20 16v.01" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconDeselect;
