function IconStackBackward({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stack-backward"
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
      <path d="M14 12l6 -3l-8 -4l-8 4l6 3" />
      <path d="M10 12l-6 3l8 4l8 -4l-6 -3l-2 1z" fill="currentColor" />
    </svg>
  );
}
export default IconStackBackward;
