interface IPromiseCreatorFunction<T> {
  <T>(): Promise<T>
}

declare function runSync<T>(array: IPromiseCreatorFunction<T>[]): Promise<T | undefined>;

export {
  runSync
}
