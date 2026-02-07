export function placeholder() {
  return null;
}

export function buildForwardHeaders(token: string) { return { Authorization: 'Bearer ' + token, 'x-origin': 'checkout' }; }
