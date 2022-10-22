import { download } from "https://deno.land/x/download/mod.ts";
import { decompress } from "https://deno.land/x/zip@v1.2.3/mod.ts";

const url =
  "https://github.com/tabler/tabler-icons/releases/download/v1.106.0/tabler-icons-1.106.0.zip";

await download(url, { file: "tabler-icons.zip", dir: "./" });
await decompress("tabler-icons.zip", "tabler-icons");

await Deno.remove("./react", { recursive: true });
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
