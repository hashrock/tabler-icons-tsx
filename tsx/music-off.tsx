function IconMusicOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-music-off"
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
      <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
      <path d="M9 17v-8m0 -4v-1h10v11" />
      <path d="M12 8h7" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconMusicOff;
