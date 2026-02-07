import { createDbClient } from "../../../shared/db/client.js";
import { logInfo } from "../../../shared/logging/logger.js";

const db = createDbClient();

export async function handler() {
  logInfo("orders handler invoked");
  await db.query("select 1");
  return { service: "orders", ok: true };
}
