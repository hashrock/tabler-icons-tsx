function IconHexagonalPyramid({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-hexagonal-pyramid"
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
      <path d="M11.162 2.457l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l2.527 -2.523a1.988 1.988 0 0 0 .267 -2.483l-7.846 -12.954a.996 .996 0 0 0 -1.676 0z" />
      <path d="M12 2l-5 18.9" />
      <path d="M12 2l5 18.9" />
    </svg>
  );
}
export default IconHexagonalPyramid;
