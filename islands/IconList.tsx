import { IS_BROWSER } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import ClickableIcon from "./ClickableIcon.tsx";
import { useRef, useState } from "preact/hooks";
import { useDebounce } from "../util/useDebounce.ts";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/search.tsx";
interface IconListProps {
  icons: string[];
  popularIcons: string[];
}

export default function IconList(props: IconListProps) {
  const iconNames = props.icons.sort();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 200);
  const filteredIcons = iconNames.filter((i) =>
    i.toLowerCase().includes(debouncedSearch.toLowerCase())
  ).map((i) => i.replace(".tsx", ""));

  const ref = useRef<HTMLInputElement>(null);
  if (IS_BROWSER) {
    ref.current?.focus();
  }

  return (
    <>
      <div class="mt-8 flex">
        <div class="border border-gray-300 rounded-lg flex items-center px-3 w-full focus-within:border-gray-800">
          <IconSearch class="w-6 h-6" />

          <input
            ref={ref}
            disabled={!IS_BROWSER}
            class="flex-1 px-3 py-3 focus:outline-none"
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
            class={search.length > 0 ? "" : "hidden"}
          >
            Clear
          </Button>
        </div>
      </div>

      <div>
        {filteredIcons.length === 0
          ? (
            <div class="text-gray-500 text-center flex-1 py-6 flex flex-col gap-2">
              <div>No results</div>

              <button
                onClick={() => {
                  setSearch("");
                }}
                class="text-sm text-gray-500 underline hover:text-gray-700 active:text-gray-900"
              >
                Clear the query
              </button>
            </div>
          )
          : ""}
      </div>

      <ul class="mt-8 grid grid-cols-2 md:grid-cols-5">
        {debouncedSearch.length === 0 &&
          props.popularIcons.map((icon) => (
            <ClickableIcon
              name={icon}
              popular
            />
          ))}
        {filteredIcons.map((icon) => <ClickableIcon name={icon} recordClick />)}
      </ul>
    </>
  );
}
