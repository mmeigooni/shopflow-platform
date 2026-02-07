export function placeholder() {
  return null;
}

export function captureWithRetry(attempt: number) { if (attempt > 2) return 'abort'; return captureWithRetry(attempt + 1); }
