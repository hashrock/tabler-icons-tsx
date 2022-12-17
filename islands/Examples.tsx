import { selection } from "../util/selection.ts";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/external-link.tsx";
import { JSX } from "preact";
function DashToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
function uppercaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Examples() {
  const iconName = selection.value;
  const className = "Icon" + uppercaseFirst(DashToCamelCase(iconName));

  return (
    <div class="space-y-16 text-center">
      {iconName !== "" && (
        <>
          <div class="text-center">
            <i class={`ti ti-${iconName} text-gray-500 text-[10em]`}></i>
            <p class="text-xl">
              {iconName}
            </p>

            <p class="mt-2">
              <a
                class="inline-block text-sm px-2 py-1 border border-gray-300 rounded"
                href={`https://tabler-icons.io/i/${iconName}`}
              >
                tabler-icons.io
                <IconExternalLink class="inline-block w-4 h-4 ml-2" />
              </a>
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-bold text-xl">Click-to-Copy Examples</h2>

            <div>
              <CopyButton fontSize={5} elName={className} iconName={iconName} />
              <CopyButton fontSize={6} elName={className} iconName={iconName} />
              <CopyButton fontSize={7} elName={className} iconName={iconName} />
              <CopyButton fontSize={8} elName={className} iconName={iconName} />
              <CopyButton fontSize={9} elName={className} iconName={iconName} />
            </div>

            <div class="flex gap-2 justify-center">
              <button
                type="button"
                class={`px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex gap-2`}
                onClick={copy(
                  `<button type="button" class="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex gap-2"><${className} class="w-6 h-6" />Button</button>`,
                )}
              >
                <i class={`ti ti-${iconName} text-[1.5rem]`}></i>
                Button
              </button>
              <button
                type="button"
                class={`px-3 py-2 bg-white rounded border(gray-400 1) hover:bg-gray-200 flex gap-2`}
                onClick={copy(
                  `<button type="button" class="px-3 py-2 bg-white rounded border(gray-400 1) hover:bg-gray-200 flex gap-2"><${className} class="w-6 h-6" />Button</button>`,
                )}
              >
                <i class={`ti ti-${iconName} text-[1.5rem]`}></i>
                Button
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
const copy = (icon: string) => {
  return () => {
    navigator.clipboard.writeText(icon);
  };
};

interface CopyButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  fontSize: number;
  elName: string;
  iconName: string;
}
function CopyButton(props: CopyButtonProps) {
  const { fontSize, elName, iconName } = props;

  return (
    <button
      type="button"
      onClick={copy(`<${elName} class="w-${fontSize} h-${fontSize}" />`)}
    >
      <i class={`ti ti-${iconName} text-[${0.25 * fontSize}rem]`}></i>
    </button>
  );
}
