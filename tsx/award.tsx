function IconAward({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-award"
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
      <circle cx={12} cy={9} r={6} />
      <polyline
        points="9 14.2 9 21 12 19 15 21 15 14.2"
        transform="rotate(-30 12 9)"
      />
      <polyline
        points="9 14.2 9 21 12 19 15 21 15 14.2"
        transform="rotate(30 12 9)"
      />
    </svg>
  );
}

export default IconAward;
