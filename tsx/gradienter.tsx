function IconGradienter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gradienter"
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
      <path d="M3.227 14c.917 4 4.497 7 8.773 7c4.277 0 7.858 -3 8.773 -7" />
      <path d="M20.78 10a9 9 0 0 0 -8.78 -7a8.985 8.985 0 0 0 -8.782 7" />
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );
}
export default IconGradienter;
