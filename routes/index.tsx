import { Head } from "$fresh/runtime.ts";
import IconList from "../islands/IconList.tsx";
import BrandTabler from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-tabler.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import icons from "../data/icons.json" assert { type: "json" };

interface Icons {
  icons: string[];
}

export const handler: Handlers<Icons> = {
  GET(_, ctx) {
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
          href="https://cdn.jsdelivr.net/npm/@tabler/icons@1.106.0/iconfont/tabler-icons.css"
        >
        </link>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-4xl flex items-center font-bold">
          <BrandTabler class="inline-block w-10 h-10" />
          <div>
            TSX Tabler Icons
          </div>
        </h1>

        <p class="mt-2">
          Easy to use{" "}
          <a
            class="text-blue-500 hover:underline"
            href="https://tabler-icons.io/"
          >
            Tabler Icons
          </a>{" "}
          in your Fresh app. Just import the icons.
        </p>
        <p class="mt-2">
          <a href="https://fresh.deno.dev">
            <img
              width="160"
              height="32"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </p>

        <p class="mt-2">
          <h2 class="text-sm font-bold uppercase text-gray-500">Usage</h2>
          <code class="border rounded border-gray-300 block text-sm p-2 bg-gray-50">
            import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx"
            <br />
            <br />
            &lt;IconBrandGithub class="w-6 h-6" /&gt;
          </code>
        </p>

        <IconList icons={data.icons} />
      </div>
    </>
  );
}
