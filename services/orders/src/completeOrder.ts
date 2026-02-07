export function placeholder() {
  return null;
}

export async function completeOrder(orderId: string) { await Promise.all([markPaid(orderId), markShipped(orderId)]); }\nasync function markPaid(_id: string) { return; }\nasync function markShipped(_id: string) { return; }
