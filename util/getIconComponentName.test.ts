import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import getIconComponentName from "./getIconComponentName.ts";

Deno.test("Icon name conversion", (_) => {
  assertEquals(
    "IconBoxMultiple3",
    getIconComponentName("box-multiple-3"),
  );

  assertEquals(
    "IconAB2",
    getIconComponentName("a-b-2"),
  );

  assertEquals(
    "Icon2fa",
    getIconComponentName("2fa"),
  );
});
