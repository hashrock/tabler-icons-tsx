function IconSpider({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-spider"
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
      <path d="M5 4v2l5 5" />
      <path d="M2.5 9.5l1.5 1.5h6" />
      <path d="M4 19v-2l6 -6" />
      <path d="M19 4v2l-5 5" />
      <path d="M21.5 9.5l-1.5 1.5h-6" />
      <path d="M20 19v-2l-6 -6" />
      <path d="M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );
}
export default IconSpider;
