import { download } from "https://deno.land/x/download@v1.0.1/mod.ts";
import { decompress } from "https://deno.land/x/zip@v1.2.3/mod.ts";
import { svgToTsx } from "./convert.ts";
import $ from "https://deno.land/x/dax@0.17.0/mod.ts";

try {
  await $`rm -r ./tsx`;
} catch (_) {
  // ignore
}

const url =
  "https://github.com/tabler/tabler-icons/releases/download/v2.47.0/tabler-icons-2.47.0.zip";

await download(url, { file: "tabler-icons.zip", dir: "./" });
await decompress("tabler-icons.zip", "tabler-icons");

await $`mv ./tabler-icons/svg ./icons`;
await $`rm -r ./tabler-icons`;
await $`rm ./tabler-icons.zip`;

const files = Deno.readDirSync("icons");

// write files to icons.json
const icons = [];

for (const file of files) {
  const name = file.name;
  const source = await Deno.readTextFile(`icons/${name}`);
  const result = await svgToTsx(name, source);
  Deno.mkdirSync("tsx", { recursive: true });
  Deno.writeTextFileSync(`tsx/${name.replace(/\.svg$/, ".tsx")}`, result);
  icons.push(name.replace(/\.svg$/, ""));
}

Deno.writeTextFileSync("data/icons.json", JSON.stringify(icons, null, 2));

await $`rm -r ./icons`;
await $`deno fmt`;
