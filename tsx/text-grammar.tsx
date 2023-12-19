function IconTextGrammar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-text-grammar"
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
      <path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M4 12v-5a3 3 0 1 1 6 0v5" />
      <path d="M4 9h6" />
      <path d="M20 6v6" />
      <path d="M4 16h12" />
      <path d="M4 20h6" />
      <path d="M14 20l2 2l5 -5" />
    </svg>
  );
}
export default IconTextGrammar;
