function IconMickeyFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mickey-filled"
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
      <path
        d="M18.501 2a4.5 4.5 0 0 1 .878 8.913a8 8 0 1 1 -15.374 3.372l-.005 -.285l.005 -.285a7.991 7.991 0 0 1 .615 -2.803a4.5 4.5 0 0 1 -3.187 -6.348a4.505 4.505 0 0 1 3.596 -2.539l.225 -.018l.281 -.007l.244 .009a4.5 4.5 0 0 1 4.215 4.247a8.001 8.001 0 0 1 4.013 0a4.5 4.5 0 0 1 4.493 -4.256z"
        strokeWidth={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconMickeyFilled;
