export type Query = (...args: any[]) => {
  queryKey: unknown[];
  enabled: boolean;
};
