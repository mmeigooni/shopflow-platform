export function logInfo(message: string, context: Record<string, unknown> = {}) {
  console.log(`[shopflow] ${message}`, context);
}

export function logError(message: string, context: Record<string, unknown> = {}) {
  console.error(`[shopflow] ${message}`, context);
}
