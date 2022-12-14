function IconTriangleSquareCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-triangle-square-circle"
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
      <path d="M12 3l-4 7h8z" />
      <circle cx={17} cy={17} r={3} />
      <rect x={4} y={14} width={6} height={6} rx={1} />
    </svg>
  );
}
export default IconTriangleSquareCircle;
