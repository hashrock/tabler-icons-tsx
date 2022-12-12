import { download } from "https://deno.land/x/download@v1.0.1/mod.ts";
import { decompress } from "https://deno.land/x/zip@v1.2.3/mod.ts";
import { svgToTsx } from "./convert.ts";
import $ from "https://deno.land/x/dax/mod.ts";

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

for (const file of files) {
  const name = file.name;
  const source = await Deno.readTextFile(`icons/${name}`);
  const result = await svgToTsx(name, source);
  Deno.mkdirSync("tsx", { recursive: true });
  Deno.writeTextFileSync(`tsx/${name.replace(/\.svg$/, ".tsx")}`, result);
  icons.push(name.replace(/\.svg$/, ""));
}

Deno.writeTextFileSync("data/icons.json", JSON.stringify(icons, null, 2));

await Deno.remove("./icons", { recursive: true });

await $`deno fmt`;
