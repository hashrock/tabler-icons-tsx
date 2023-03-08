function IconMoodSmileDizzy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mood-smile-dizzy"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
      <path d="M8 9l2 2" />
      <path d="M10 9l-2 2" />
      <path d="M14 9l2 2" />
      <path d="M16 9l-2 2" />
    </svg>
  );
}
export default IconMoodSmileDizzy;
