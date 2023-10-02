function IconNavigationWest({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-navigation-west"
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
      <path d="M9 3l1 6l2 -3.75l2 3.75l1 -6" />
      <path d="M16 21l-4 -8l-4 8l4 -2z" />
    </svg>
  );
}
export default IconNavigationWest;
