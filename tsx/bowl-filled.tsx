function IconBowlFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bowl-filled"
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
        d="M20 7h-16a2 2 0 0 0 -2 2v.5l.007 .18c.134 1.806 2.169 5.275 3.928 6.771l.065 .053v.496a2 2 0 0 0 2 2h8l.15 -.005a2 2 0 0 0 1.85 -1.995v-.504l.017 -.013c1.736 -1.494 3.983 -5.289 3.983 -6.983v-.5a2 2 0 0 0 -2 -2z"
        stroke-width={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconBowlFilled;
