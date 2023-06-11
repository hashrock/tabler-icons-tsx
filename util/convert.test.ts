import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { svgToTsx } from "./convert.ts";

// want to use deno fmt
import * as prettier from "npm:prettier";

async function loadFixtures(component: string) {
  const svg = await Deno.readTextFile(
    new URL(`./fixtures/${component}.svg`, import.meta.url).pathname,
  );
  const tsx = await Deno.readTextFile(
    new URL(`./fixtures/${component}.tsx`, import.meta.url).pathname,
  );
  return { svg, tsx };
}

Deno.test("svg conversion", async (t) => {
  const component = "a-b";
  const { svg, tsx } = await loadFixtures(component);
  const result = await svgToTsx(component, svg);

  assertEquals(
    prettier.format(result, { parser: "babel" }),
    prettier.format(tsx, { parser: "babel" }),
  );
});

Deno.test("regression test #7", async (t) => {
  const component = "alert-triangle-filled";
  const { svg, tsx } = await loadFixtures(component);
  const result = await svgToTsx(component, svg);

  assertEquals(
    prettier.format(result, { parser: "babel" }),
    prettier.format(tsx, { parser: "babel" }),
  );
});
