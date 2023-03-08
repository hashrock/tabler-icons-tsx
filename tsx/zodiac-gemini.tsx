function IconZodiacGemini({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zodiac-gemini"
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
      <path d="M3 3a21 21 0 0 0 18 0" />
      <path d="M3 21a21 21 0 0 1 18 0" />
      <path d="M7 4.5l0 15" />
      <path d="M17 4.5l0 15" />
    </svg>
  );
}
export default IconZodiacGemini;
