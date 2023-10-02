function IconArrowCapsule({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-capsule"
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
      <path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
      <path d="M15 8l3 3l3 -3" />
    </svg>
  );
}
export default IconArrowCapsule;
