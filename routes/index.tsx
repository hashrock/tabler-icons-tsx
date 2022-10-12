import { Head } from "$fresh/runtime.ts";

const icons: string[] = [];
const dir = Deno.readDirSync("./tsx");
for (const file of dir) {
  icons.push(file.name);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>TSX Tabler Icons</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/1.35.0/iconfont/tabler-icons.min.css"
        >
        </link>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <ul>
          {icons.map((icon) => (
            <li class="flex items-center p-2">
              <i class={`ti ti-${icon.replace(".tsx", "")}`}></i>
              <span>{icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
