function IconGenderThird({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gender-third"
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
      <circle transform="rotate(90 16 12)" cx={16} cy={12} r={5} />
      <path d="M11 12h-3" />
      <path d="M8 12l-5 -4v8z" />
    </svg>
  );
}

export default IconGenderThird;
