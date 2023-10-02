function IconPlayVolleyball({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-play-volleyball"
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
      <path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path
        d="M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
        fill="currentColor"
      />
      <path d="M2 16l5 1l.5 -2.5" />
      <path d="M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" />
    </svg>
  );
}
export default IconPlayVolleyball;
