function IconImageInPicture({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-image-in-picture"
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
      <path d="M13 15c-2 0 -5 1 -5 5" />
      <path d="M4 11m0 2a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2z" />
      <path d="M4 7v-2a1 1 0 0 1 1 -1h2" />
      <path d="M11 4h2" />
      <path d="M17 4h2a1 1 0 0 1 1 1v2" />
      <path d="M20 11v2" />
      <path d="M20 17v2a1 1 0 0 1 -1 1h-2" />
    </svg>
  );
}
export default IconImageInPicture;
