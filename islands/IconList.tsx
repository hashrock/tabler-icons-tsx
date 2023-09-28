import { IS_BROWSER } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
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
      <div class="mt-8 flex">
        <input
          disabled={!IS_BROWSER}
          class="border border-gray-300 rounded p-2 w-full"
          type="text"
          placeholder="Search"
          autofocus
          value={search}
          onInput={(e) => {
            setSearch((e.target as HTMLInputElement).value);
          }}
        />
        <Button
          onClick={() => {
            setSearch("");
          }}
        >
          Clear
        </Button>
      </div>
      <ul class="mt-8 grid grid-cols-4">
        {filteredIcons.map((icon) => <ClickableIcon name={icon} />)}
      </ul>
    </>
  );
}
