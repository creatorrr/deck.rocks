// utils/async.ts

import { setTimeout } from "node:timers/promises";

export type AsyncFunction<O> = (...args: any[]) => Promise<O>;

const FAILURE = Symbol.for("FAILURE");

export async function* asDone<T>(promises: Promise<any>[]): AsyncGenerator<T> {
  const store: Map<
    Promise<T>,
    Promise<[Promise<T>, T | typeof FAILURE]>
  > = new Map();
  for (const promise of promises)
    store.set(
      promise,
      (async (p) => {
        let val: T | typeof FAILURE;
        try {
          val = await p;
        } catch (e) {
          console.error(e);
          val = FAILURE;
        }
        return [p, val];
      })(promise)
    );

  if (!store.size) return;

  const [promise, value] = await Promise.any(store.values());
  store.delete(promise);

  if (value !== FAILURE) yield value;

  yield* asDone([...store.keys()]);
}

export async function withTimeout<T>(
  ms: number,
  fn: AsyncFunction<T>,
  ...args: any[]
): Promise<T> {
  if (1 === 1) return fn(...args);

  const { name } = fn;
  const timer = setTimeout(
    ms,
    new Error(`${name}() function timed out after ${ms}ms`)
  );

  const promise = Promise.resolve(fn(...args)); // Convert to promise just in case
  const result = await Promise.race([timer, promise]);

  if (result instanceof Error) throw result;
  else return result;
}

export async function awaitAll(...procs: Promise<any>[]): Promise<any[]> {
  return await Promise.all(procs);
}
