declare function runSync<T>(array: (() => Promise<T>)[]): Promise<T>;

export {
  runSync
}
