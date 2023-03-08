function IconMoodPin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mood-pin"
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
      <path d="M19 18v.01m2 -6.01a9 9 0 1 0 -8.34 8.976" />
      <path d="M9.5 15a3.59 3.59 0 0 0 2.796 .988" />
      <path d="M21.121 20.121a3 3 0 1 0 -4.242 0l2.121 2.122l2.121 -2.122z" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
    </svg>
  );
}
export default IconMoodPin;
