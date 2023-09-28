const kv = await Deno.openKv();

export interface PopularItem {
  name: string;
  count: number;
}
export async function getPopularItems() {
  const result = [] as PopularItem[];
  const cur = kv.list<PopularItem>({ prefix: ["popular"] });
  for await (const item of cur) {
    const name = item.key[1];
    const count = item.value;

    result.push({
      name,
      count,
    });
  }

  result.sort((a, b) => b.count - a.count);

  return result.slice(0, 10).map((item) => item.name);
}

export async function countUpPopularItem(key: string) {
  let tx_res = { ok: false };
  while (!tx_res.ok) {
    const res = await kv.get(["popular", key]);
    const atomic = kv.atomic().check(res);

    if (!res.versionstamp) {
      atomic.set(["popular", key], 1);
    } else {
      atomic.set(["popular", key], res.value + 1);
    }
    tx_res = await atomic.commit();
  }
}
