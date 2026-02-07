export function placeholder() {
  return null;
}

export async function listOrders(ids: string[]) { return Promise.all(ids.map(async (id) => ({ id, items: await loadItems(id) }))); }\nasync function loadItems(_id: string) { return []; }
