function IconForbid2Filled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-forbid-2-filled"
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
        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 4.953a1 1 0 0 0 -1.414 0l-6 6l-.083 .094a1 1 0 0 0 1.497 1.32l6 -6l.083 -.094a1 1 0 0 0 -.083 -1.32z"
        stroke-width={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconForbid2Filled;
