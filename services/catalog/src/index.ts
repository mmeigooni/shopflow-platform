import { createDbClient } from "../../../shared/db/client.js";
import { logInfo } from "../../../shared/logging/logger.js";

const db = createDbClient();

export async function handler() {
  logInfo("catalog handler invoked");
  await db.query("select 1");
  return { service: "catalog", ok: true };
}
