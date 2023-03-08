import { useState } from "preact/hooks";
import { selection } from "../util/selection.ts";
import Prism from "https://esm.sh/prismjs@1.27.0";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";
import { copy as copySignal } from "../util/copy.ts";
import getIconComponentName from "../util/getIconComponentName.ts";
interface CodeBlockProps {
  copy?: boolean;
}

export default function CodeBlock(props: CodeBlockProps) {
  const icon = selection.value === "" ? "brand-github" : selection.value;
  const className = getIconComponentName(icon);
  const example =
    `import ${className} from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/${icon}.tsx"

<${className} class="w-6 h-6" />`;
  const highlighted = Prism.highlight(
    example,
    Prism.languages.typescript,
    "typescript",
  );
  const onCopy = () => {
    navigator.clipboard.writeText(example);
    setCopied(true);
    copySignal.value = true;
  };

  const [copied, setCopied] = useState(false);
  return (
    <div class="relative">
      <pre class="bg-gray-800 text-blue-300 p-2 text-sm rounded whitespace-pre-wrap min-h-[7em]">
        <code
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
      {props.copy && (
        <button
          onClick={onCopy}
          class="absolute top-2 right-2 px-3 py-2 border border-gray-400 rounded text-white bg-gray-800"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      )}
    </div>
  );
}
