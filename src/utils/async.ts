// utils/async.ts

const FAILURE = Symbol.for("FAILURE");

export async function* asDone<T>(promises: Promise<any>[]) {
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
