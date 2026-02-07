import { createDbClient } from "../../../shared/db/client.js";
import { logInfo } from "../../../shared/logging/logger.js";

const db = createDbClient();

export async function handler() {
  logInfo("checkout handler invoked");
  await db.query("select 1");
  return { service: "checkout", ok: true };
}
