import { Head } from "$fresh/runtime.ts";
import IconList from "../islands/IconList.tsx";
import BrandTabler from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-tabler.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import icons from "../data/icons.json" assert { type: "json" };
import CodeBlock from "../islands/CodeBlock.tsx";
import Examples from "../islands/Examples.tsx";
import Toast from "../islands/Toast.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

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
          href="/tabler-icons.css"
        >
        </link>
        <link
          rel="stylesheet"
          href="https://esm.sh/prismjs@1.27.0/themes/prism-dark.min.css"
        />
        <style>
          {`
        body{
          overflow-y: scroll;
        }
        `}
        </style>
      </Head>
      <Toast />

      <div class="bg-gray-100">
        <div class="max-w-screen-lg mx-auto flex flex-col py-16 ">
          <h1 class="text-2xl flex items-center font-semibold">
            <BrandTabler class="inline-block w-8 h-8" />
            <div>
              TSX Tabler Icons
            </div>
          </h1>

          <p class="mt-3 text-gray-500">
            Easy to use{" "}
            <a
              class="text-blue-500 hover:underline"
              href="https://tabler-icons.io/"
            >
              Tabler Icons
            </a>{" "}
            in your Fresh app. Just import the icons.
          </p>
          <div class="flex gap-2 mt-4 items-center">
            <a href="https://fresh.deno.dev">
              <img
                width="160"
                height="32"
                src="https://fresh.deno.dev/fresh-badge.svg"
                alt="Made with Fresh"
              />
            </a>

            <a href="https://github.com/hashrock/tabler-icons-tsx">
              <IconBrandGithub class="w-6 h-6 text-gray-600" />
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-screen-lg flex mx-auto relative gap-4">
        <div class="pt-4">
          <p class="mt-2">
            <h2 class="text-sm font-bold uppercase text-gray-500">Usage</h2>

            <CodeBlock copy></CodeBlock>
          </p>

          <IconList icons={data.icons} />
        </div>
        <div class="w-96 shrink-0">
          <div class="sticky top-0 pt-4">
            <Examples />
          </div>
        </div>
      </div>
    </>
  );
}
