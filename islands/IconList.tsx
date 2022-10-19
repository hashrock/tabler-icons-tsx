import ClickableIcon from "./ClickableIcon.tsx";
import { useState } from "preact/hooks";
interface IconListProps {
  icons: string[];
}

export default function IconList(props: IconListProps) {
  const iconNames = props.icons.sort().map((i) => i.replace(".tsx", ""));
  const [search, setSearch] = useState("");
  const filteredIcons = iconNames.filter((i) =>
    i.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div class="mt-8">
        <input
          class="border border-gray-300 rounded p-2 w-full"
          type="text"
          placeholder="Search"
          onInput={(e) => {
            setSearch((e.target as HTMLInputElement).value);
          }}
        />
      </div>
      <ul>
        {filteredIcons.map((icon) => <ClickableIcon name={icon} />)}
      </ul>
    </>
  );
}
