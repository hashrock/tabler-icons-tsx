import ClickableIcon from "./ClickableIcon.tsx";

interface IconListProps {
  icons: string[];
}

export default function IconList(props: IconListProps) {
  const iconNames = props.icons.sort().map((i) => i.replace(".tsx", ""));
  return (
    <ul>
      {iconNames.map((icon) => <ClickableIcon name={icon} />)}
    </ul>
  );
}
