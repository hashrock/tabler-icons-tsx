import { copy } from "../util/copy.ts";
import { effect } from "@preact/signals";
export default function Toast() {
  effect(() => {
    if (copy.value) {
      setTimeout(() => {
        copy.value = false;
      }, 2000);
    }
  });

  const cclass = copy.value ? "translate-y-0" : "-translate-y-20";

  return (
    <div
      class={"fixed flex z-50 w-full justify-center transition-transform " +
        cclass}
    >
      <div class="bg-green-100 text-green-800 px-4 py-3 rounded-b-md font-bold text-2xl">
        Copied!
      </div>
    </div>
  );
}
