import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { svgToTsx } from "./convert.ts";

// want to use deno fmt
import * as prettier from "npm:prettier";

Deno.test("svg conversion", async (t) => {
  const svg = await Deno.readTextFile(
    new URL("./fixtures/a-b.svg", import.meta.url).pathname,
  );
  const tsx = await Deno.readTextFile(
    new URL("./fixtures/a-b.tsx", import.meta.url).pathname,
  );

  const result = await svgToTsx("a-b", svg);

  assertEquals(
    prettier.format(result, { parser: "babel" }),
    prettier.format(tsx, { parser: "babel" }),
  );
});

Deno.test("regression test #7", async (t) => {
  const component = "alert-triangle-filled";
  const svg = await Deno.readTextFile(
    new URL(`./fixtures/${component}.svg`, import.meta.url).pathname,
  );
  const tsx = await Deno.readTextFile(
    new URL(`./fixtures/${component}.tsx`, import.meta.url).pathname,
  );

  const result = await svgToTsx(component, svg);

  assertEquals(
    prettier.format(result, { parser: "babel" }),
    prettier.format(tsx, { parser: "babel" }),
  );
});
