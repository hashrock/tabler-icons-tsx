function IconMoodShare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mood-share"
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
      <path d="M20.942 13.018a9 9 0 1 0 -8.942 7.982" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15c.658 .672 1.56 1 2.5 1c.213 0 .424 -.017 .63 -.05" />
      <path d="M16 22l5 -5" />
      <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  );
}
export default IconMoodShare;
