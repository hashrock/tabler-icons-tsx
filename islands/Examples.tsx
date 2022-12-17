import { selection } from "../util/selection.ts";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/external-link.tsx";

function DashToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
function uppercaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Examples() {
  const copy = (icon: string) => {
    return () => {
      navigator.clipboard.writeText(icon);
    };
  };

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
              {/* w-5 = 1.25rem */}
              <button
                type="button"
                onClick={copy(`<${className} class="w-5 h-5" />`)}
              >
                <i class={`ti ti-${iconName} text-[1.25rem]`}></i>
              </button>
              {/* w-6 = 1.5rem */}
              <button
                type="button"
                onClick={copy(`<${className} class="w-6 h-6" />`)}
              >
                <i class={`ti ti-${iconName} text-[1.5rem]`}></i>
              </button>
              <button
                type="button"
                onClick={copy(`<${className} class="w-7 h-7" />`)}
              >
                <i class={`ti ti-${iconName} text-[1.75rem]`}></i>
              </button>
              <button
                type="button"
                onClick={copy(`<${className} class="w-8 h-8" />`)}
              >
                <i class={`ti ti-${iconName} text-[2rem]`}></i>
              </button>
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
