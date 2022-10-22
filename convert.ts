import { download } from "https://deno.land/x/download/mod.ts";
import { decompress } from "https://deno.land/x/zip@v1.2.3/mod.ts";

try {
  await Deno.remove("./tsx", { recursive: true });
} catch (e) {
  // ignore
}
try {
  await Deno.remove("./react", { recursive: true });
} catch (e) {
  // ignore
}

const url =
  "https://github.com/tabler/tabler-icons/releases/download/v1.106.0/tabler-icons-1.106.0.zip";

await download(url, { file: "tabler-icons.zip", dir: "./" });
await decompress("tabler-icons.zip", "tabler-icons");

await Deno.rename("./tabler-icons/icons-react/icons-js", "./react");

for (const file of Deno.readDirSync("./react")) {
  if (file.isFile) {
    if (file.name.match(/^circle-[0-9a-z]\.js$/)) {
      await Deno.remove(`./react/${file.name}`);
    }
    if (file.name.match(/^arrow-bottom-.*\.js$/)) {
      await Deno.remove(`./react/${file.name}`);
    }
  }
}

await Deno.remove("./tabler-icons", { recursive: true });
await Deno.remove("./tabler-icons.zip");

const files = Deno.readDirSync("react");

// write files to icons.json
const icons = [];

for (const file of files) {
  const name = file.name;
  const content = Deno.readTextFileSync(`react/${name}`);
  const result = replace(content);
  Deno.mkdirSync("tsx", { recursive: true });
  Deno.writeTextFileSync(`tsx/${name.replace(/\.js$/, ".tsx")}`, result);
  icons.push(name.replace(/\.js$/, ""));
}

Deno.writeTextFileSync("data/icons.json", JSON.stringify(icons, null, 2));

function replace(content: string) {
  const patterns = [
    {
      match: /import \* as React from "react";\n\n/mg,
      replace: "",
    },
    {
      match: "className",
      replace: "class",
    },
    {
      match: "strokeWidth",
      replace: "stroke-width",
    },
    {
      match: "strokeLinecap",
      replace: "stroke-linecap",
    },
    {
      match: "strokeLinejoin",
      replace: "stroke-linejoin",
    },
    {
      match: "strokeMiterlimit",
      replace: "stroke-miterlimit",
    },
    {
      match: "strokeDasharray",
      replace: "stroke-dasharray",
    },
    {
      match: "strokeDashoffset",
      replace: "stroke-dashoffset",
    },
    {
      match: "strokeOpacity",
      replace: "stroke-opacity",
    },
    {
      match: "fillOpacity",
      replace: "fill-opacity",
    },
    {
      match: "fillRule",
      replace: "fill-rule",
    },
    {
      match: "clipRule",
      replace: "clip-rule",
    },
    {
      match: "clipPath",
      replace: "clip-path",
    },
  ];
  for (const pattern of patterns) {
    content = content.replace(pattern.match, pattern.replace);
  }
  return content;
}

await Deno.remove("./react", { recursive: true });
