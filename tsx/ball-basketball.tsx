function IconBallBasketball({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-ball-basketball"
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
      <path d="M5.65 5.65l12.7 12.7" />
      <path d="M5.65 18.35l12.7 -12.7" />
      <path d="M12 3a9 9 0 0 0 9 9" />
      <path d="M3 12a9 9 0 0 1 9 9" />
    </svg>
  );
}
export default IconBallBasketball;
