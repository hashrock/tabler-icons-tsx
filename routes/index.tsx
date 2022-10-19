import { Head } from "$fresh/runtime.ts";
import IconList from "../islands/IconList.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";

interface Icons {
  icons: string[];
}

export const handler: Handlers<Icons> = {
  async GET(_, ctx) {
    const icons: string[] = [];
    const dir = await Deno.readDir("./tsx");
    for await (const file of dir) {
      icons.push(file.name);
    }
    return ctx.render({ icons });
  },
};

export default function Home({ data }: PageProps<Icons>) {
  return (
    <>
      <Head>
        <title>TSX Tabler Icons</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons@1.103.0/iconfont/tabler-icons.css"
        >
        </link>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <IconList icons={data.icons} />
      </div>
    </>
  );
}
