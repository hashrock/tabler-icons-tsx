function IconFlask2Filled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-flask-2-filled"
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
        d="M15 2a1 1 0 0 1 0 2v5.674l.062 .03a7 7 0 0 1 3.85 5.174l.037 .262a7 7 0 0 1 -3.078 6.693a1 1 0 0 1 -.553 .167h-6.635a1 1 0 0 1 -.552 -.166a7 7 0 0 1 .807 -12.134l.062 -.028v-5.672a1 1 0 1 1 0 -2h6zm-2 2h-2v6.34a1 1 0 0 1 -.551 .894l-.116 .049a5 5 0 0 0 -2.92 2.717h9.172a5 5 0 0 0 -2.918 -2.715a1 1 0 0 1 -.667 -.943v-6.342z"
        stroke-width={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconFlask2Filled;
