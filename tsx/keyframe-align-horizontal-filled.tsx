function IconKeyframeAlignHorizontalFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-keyframe-align-horizontal-filled"
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
        d="M12 6c-.629 0 -1.214 .301 -1.606 .807l-2.908 3.748a2.395 2.395 0 0 0 -.011 2.876l2.919 3.762c.39 .505 .977 .807 1.606 .807c.629 0 1.214 -.301 1.606 -.807l2.908 -3.748a2.395 2.395 0 0 0 .011 -2.876l-2.919 -3.762a2.032 2.032 0 0 0 -1.606 -.807z"
        stroke-width={0}
        fill="currentColor"
      />
      <path
        d="M5 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z"
        stroke-width={0}
        fill="currentColor"
      />
      <path
        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z"
        stroke-width={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconKeyframeAlignHorizontalFilled;
