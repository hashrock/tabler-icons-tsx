function IconMeteorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-meteor-off"
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
      <path d="M9.75 5.761l3.25 -2.761l-1 5l9 -5l-5 9h5l-2.467 2.536m-1.983 2.04l-2.441 2.51a6.5 6.5 0 1 1 -8.855 -9.506l2.322 -1.972" />
      <path d="M9.5 14.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconMeteorOff;
