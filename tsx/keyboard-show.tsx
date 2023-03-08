function IconKeyboardShow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-keyboard-show"
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
      <path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
      <path d="M6 7l0 .01" />
      <path d="M10 7l0 .01" />
      <path d="M14 7l0 .01" />
      <path d="M18 7l0 .01" />
      <path d="M6 11l0 .01" />
      <path d="M18 11l0 .01" />
      <path d="M10 11l4 0" />
      <path d="M10 19l2 2l2 -2" />
    </svg>
  );
}
export default IconKeyboardShow;
