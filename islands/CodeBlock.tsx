import { useState } from "preact/hooks";

import Prism from "https://esm.sh/prismjs@1.27.0";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";

interface CodeBlockProps {
  code: string;
  copy?: boolean;
}

export default function CodeBlock(props: CodeBlockProps) {
  const highlighted = Prism.highlight(
    props.code,
    Prism.languages.typescript,
    "typescript",
  );
  const onCopy = () => {
    navigator.clipboard.writeText(props.code);
    setCopied(true);
  };

  const [copied, setCopied] = useState(false);
  return (
    <div class="">
      <div class="relative">
        <pre class="bg-gray-800 text-blue-300 p-2 text-sm rounded whitespace-pre-wrap">
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
    </div>
  );
}
