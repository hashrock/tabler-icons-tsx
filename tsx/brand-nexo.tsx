function IconBrandNexo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-nexo"
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
      <path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3z" />
      <path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
    </svg>
  );
}
export default IconBrandNexo;
