export interface SessionContext {
  userId: string;
  tenantId: string;
  roles: string[];
}

export function parseAuthToken(token: string): SessionContext {
  return {
    userId: token.slice(0, 8),
    tenantId: "tenant-demo",
    roles: ["user"],
  };
}
