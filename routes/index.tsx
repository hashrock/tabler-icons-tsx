import { Head } from "$fresh/runtime.ts";
import IconList from "../islands/IconList.tsx";
import BrandTabler from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-tabler.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import icons from "../data/icons.json" assert { type: "json" };
import Examples from "../islands/Examples.tsx";
import Toast from "../islands/Toast.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import { getPopularItems } from "../util/db.ts";

interface Icons {
  icons: string[];
  popularIcons: string[];
}

export const handler: Handlers<Icons> = {
  async GET(_, ctx) {
    const popularIcons = await getPopularItems();

    return ctx.render({ icons, popularIcons });
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

      <div class="max-w-screen-lg flex mx-auto relative gap-4 mb-16">
        <div class="flex-1">
          <IconList icons={data.icons} popularIcons={data.popularIcons} />
        </div>
        <div class="w-64 shrink-0">
          <div class="sticky top-0 pt-4">
            <Examples />
          </div>
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="max-w-screen-lg mx-auto flex flex-col py-8 text-center">
          Icons are made by Paweł Kuna
          <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE">
            MIT License
          </a>
        </div>
      </div>
    </>
  );
}
