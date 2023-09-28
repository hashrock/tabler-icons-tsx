import { Handlers } from "$fresh/server.ts";
import {
  countUpPopularItem,
  getPopularItems,
  PopularItem,
} from "../../util/db.ts";

export const handler: Handlers<PopularItem | null> = {
  async POST(req, _ctx) {
    const item = (await req.json()) as PopularItem;
    if (!item.name) return new Response("name is required", { status: 400 });
    try {
      await countUpPopularItem(item.name);
      return new Response("ok", { status: 200 });
    } catch (e) {
      console.error(e);
      return new Response("API error", { status: 500 });
    }
  },
  async GET(_req, _ctx) {
    const user = await getPopularItems();
    return new Response(JSON.stringify(user));
  },
};
