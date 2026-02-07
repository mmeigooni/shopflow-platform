export function placeholder() {
  return null;
}

export function shouldRetry(statusCode: number) { if (statusCode >= 400 && statusCode < 500) return false; return true; }
