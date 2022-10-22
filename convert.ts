await Deno.remove("./tsx", { recursive: true });

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
