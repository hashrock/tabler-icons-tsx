const IconPlay = (size = 24, color = "currentColor", stroke = 2, ...props) => (
  <svg
    class="icon icon-tabler icon-tabler-play"
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
    <path d="M5 5v14a2 2 0 0 0 2.75 1.84l12.25 -7.1a2 2 0 0 0 0 -3.5l-12.25 -7.1a2 2 0 0 0 -2.75 1.75" />
  </svg>
);

export default IconPlay;
