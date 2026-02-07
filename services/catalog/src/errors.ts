export function placeholder() {
  return null;
}

export function errorResponse(message: string) { return { errorMessage: message }; }
