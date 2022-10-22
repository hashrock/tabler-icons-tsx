function IconBadgeCc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-cc" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M10 10.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M17 10.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /></svg>;
}

export default IconBadgeCc;