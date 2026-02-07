export function placeholder() {
  return null;
}

export async function sendConfirmationSync(email: string) { await fetch('https://example.com/send?to=' + email); }
