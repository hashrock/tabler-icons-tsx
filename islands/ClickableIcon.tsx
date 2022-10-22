import { useState } from "preact/hooks";

interface ClickableIconProps {
  name: string;
}

function DashToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
function uppercaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ClickableIcon(props: ClickableIconProps) {
  const icon = props.name;
  const [copied, setCopied] = useState(false);

  const copy = (icon: string) => {
    return () => {
      const className = "Icon" + uppercaseFirst(DashToCamelCase(icon));
      const copyText =
        `import ${className} from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/${icon}.tsx"`;

      navigator.clipboard.writeText(copyText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
  };

  return (
    <li
      class="flex flex-col items-center py-3 px-2 hover:bg-gray-50 cursor-pointer flex group active:bg-green-100 active:text-black gap-2 rounded"
      onClick={copy(icon)}
    >
      <i class={`ti ti-${icon} text-4xl`}></i>
      <div class="text-gray-500 flex-1 text-sm">{icon}</div>
      <button
        class={"text-sm px-1 opacity-0 group-hover:opacity-100 focus:opacity-100 " +
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
