export interface DbClient {
  query<T>(sql: string, params?: unknown[]): Promise<T[]>;
}

export function createDbClient(): DbClient {
  return {
    async query<T>(_sql: string): Promise<T[]> {
      return [];
    },
  };
}
