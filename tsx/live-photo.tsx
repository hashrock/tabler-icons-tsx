function IconLivePhoto({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-live-photo"
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
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M15.9 20.11l0 .01" />
      <path d="M19.04 17.61l0 .01" />
      <path d="M20.77 14l0 .01" />
      <path d="M20.77 10l0 .01" />
      <path d="M19.04 6.39l0 .01" />
      <path d="M15.9 3.89l0 .01" />
      <path d="M12 3l0 .01" />
      <path d="M8.1 3.89l0 .01" />
      <path d="M4.96 6.39l0 .01" />
      <path d="M3.23 10l0 .01" />
      <path d="M3.23 14l0 .01" />
      <path d="M4.96 17.61l0 .01" />
      <path d="M8.1 20.11l0 .01" />
      <path d="M12 21l0 .01" />
    </svg>
  );
}
export default IconLivePhoto;
