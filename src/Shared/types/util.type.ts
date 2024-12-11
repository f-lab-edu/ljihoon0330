export type Mask<T extends object> = Partial<{
  [K in keyof T]: true;
}>;
