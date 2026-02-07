export function placeholder() {
  return null;
}

const cache = new Map<string, string>();\nexport function remember(key: string, value: string) { cache.set(key, value); }
