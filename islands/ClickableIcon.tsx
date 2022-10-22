import { useState } from "preact/hooks";

interface ClickableIconProps {
  name: string;
}

export default function ClickableIcon(props: ClickableIconProps) {
  const icon = props.name;
  const [copied, setCopied] = useState(false);

  const copy = (icon: string) => {
    return () => {
      const copyText =
        `import Icon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/${icon}.tsx"`;

      navigator.clipboard.writeText(copyText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
  };

  return (
    <li
      class="flex items-center p-2 hover:bg-gray-50 cursor-pointer flex group active:bg-green-100 active:text-black gap-2"
      onClick={copy(icon)}
    >
      <i class={`ti ti-${icon} text-2xl`}></i>
      <div class="text-gray-500 flex-1">{icon}</div>
      <button
        class={"px-2 py-1 opacity-0 group-hover:opacity-100 focus:opacity-100 " +
          (copied ? "text-green-500" : "text-gray-500")}
        onClick={() => {
          copy;
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </li>
  );
}
