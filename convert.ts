import { download } from "https://deno.land/x/download@v1.0.1/mod.ts";
import { decompress } from "https://deno.land/x/zip@v1.2.3/mod.ts";
import svgr from "npm:@svgr/core";
import type { Template } from "npm:@svgr/babel-plugin-transform-svg-component";

try {
  await Deno.remove("./tsx", { recursive: true });
} catch (_) {
  // ignore
}

const url =
  "https://github.com/tabler/tabler-icons/releases/download/v1.106.0/tabler-icons-1.106.0.zip";

await download(url, { file: "tabler-icons.zip", dir: "./" });
await decompress("tabler-icons.zip", "tabler-icons");

await Deno.rename("./tabler-icons/icons", "./icons");
await Deno.remove("./tabler-icons", { recursive: true });
await Deno.remove("./tabler-icons.zip");

const files = Deno.readDirSync("icons");

// write files to icons.json
const icons = [];

export const template: Template = (variables, { tpl }) => {
  return tpl`
function ${variables.componentName}({ size = 24, color = "currentColor", stroke = 2, ...props }) { return (${variables.jsx}); }

${variables.exports}
`;
};

const camelize = function (str: string) {
  str = str.replace(/-/g, " ");

  return str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    function (word: string, _) {
      return word.toUpperCase();
    },
  ).replace(/\s+/g, "");
};

for (const file of files) {
  const name = file.name;
  const basename = name.replace(/\.svg$/, "");

  const content = await svgr.transform(
    await Deno.readTextFile(`icons/${name}`),
    {
      icon: false,
      svgProps: {
        width: "{size}",
        height: "{size}",
        strokeWidth: "{stroke}",
        stroke: "{color}",
      },
      template,
    },
    {
      componentName: camelize("Icon-" + basename),
    },
  );

  const result = replace(content);
  Deno.mkdirSync("tsx", { recursive: true });
  Deno.writeTextFileSync(`tsx/${name.replace(/\.svg$/, ".tsx")}`, result);
  icons.push(name.replace(/\.svg$/, ""));
}

Deno.writeTextFileSync("data/icons.json", JSON.stringify(icons, null, 2));

function replace(content: string) {
  const patterns = [
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

await Deno.remove("./icons", { recursive: true });
