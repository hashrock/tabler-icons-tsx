function IconPhotoCirclePlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-photo-circle-plus"
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
      <path d="M15 8h.01" />
      <path d="M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991" />
      <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
      <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
      <path d="M16 19.33h6" />
      <path d="M19 16.33v6" />
    </svg>
  );
}
export default IconPhotoCirclePlus;
