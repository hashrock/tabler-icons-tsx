function IconDiaboloOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-diabolo-off"
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
      <path d="M4.727 4.749c-.467 .38 -.727 .804 -.727 1.251c0 1.217 1.933 2.265 4.71 2.735m4.257 .243c3.962 -.178 7.033 -1.444 7.033 -2.978c0 -1.657 -3.582 -3 -8 -3c-1.66 0 -3.202 .19 -4.48 .514" />
      <path d="M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3c3.218 0 5.992 -.712 7.262 -1.74m-.211 -4.227l-1.051 -3.033l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143" />
      <path d="M6 12c0 1.105 2.686 2 6 2c.656 0 1.288 -.035 1.879 -.1m3.198 -.834c.585 -.308 .923 -.674 .923 -1.066" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconDiaboloOff;
