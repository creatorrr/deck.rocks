// utils/math.ts

const sum = (xs: number[] = []) => xs.reduce((a, b) => a + b, 0);

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (
  f: (a: number, b: number) => number,
  xs: number[],
  ys: number[]
) => {
  const ny = ys.length;
  return (xs.length <= ny ? xs : xs.slice(0, ny)).map((x, i) => f(x, ys[i]));
};

// Calculate the dot product of two vector arrays.
export const dot = (xs: number[], ys: number[]): number => {
  if (xs.length !== ys.length)
    throw new Error("For dot product, both vectors should be of same length");

  return sum(zipWith((a, b) => a * b, xs, ys));
};

export const norm = (xs: number[]): number => {
  const squared = xs.map((x) => x ** 2);
  return Math.sqrt(sum(squared));
};

export const cosineSim = (a: number[], b: number[]): number => {
  const aNorm = norm(a);
  const bNorm = norm(b);
  const dotProduct = dot(a, b);

  return dotProduct / (aNorm * bNorm);
};

// From: https://arxiv.org/abs/1803.11175
// Universal sentence encoder paper
// See here for why this is better:
// https://math.stackexchange.com/questions/2874940/cosine-similarity-vs-angular-distance
export const angularSim = (a: number[], b: number[]): number => {
  const cSim = cosineSim(a, b);
  const result = 1 - Math.acos(cSim) / Math.PI;

  return result;
};
