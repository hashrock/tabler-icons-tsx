function IconGenderIntergender({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gender-intergender"
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
      <path d="M13.5 11.5l6.5 6.5v-4" />
      <path d="M11.5 13.5l6.5 6.5" />
      <circle transform="matrix(1 0 0 -1 0 18)" cx={9} cy={9} r={5} />
      <path d="M14 20l2 -2" />
    </svg>
  );
}

export default IconGenderIntergender;
