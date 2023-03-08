function IconDragDrop2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-drag-drop-2"
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
      <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
      <path d="M4 4l0 .01" />
      <path d="M8 4l0 .01" />
      <path d="M12 4l0 .01" />
      <path d="M16 4l0 .01" />
      <path d="M4 8l0 .01" />
      <path d="M4 12l0 .01" />
      <path d="M4 16l0 .01" />
    </svg>
  );
}
export default IconDragDrop2;
