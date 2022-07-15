// utils/math.ts

const sum = (xs) => (xs ? xs.reduce((a, b) => a + b, 0) : undefined);

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) => {
  const ny = ys.length;
  return (xs.length <= ny ? xs : xs.slice(0, ny)).map((x, i) => f(x, ys[i]));
};

// Calculate the dot product of two vector arrays.
export const dot = (xs: number[], ys: number[]) => {
  if (xs.length !== ys.length)
    throw new Error("For dot product, both vectors should be of same length");

  return sum(zipWith((a, b) => a * b, xs, ys));
};

export const norm = (xs: number[]) => {
  const squared = xs.map((x) => x ** 2);
  return Math.sqrt(sum(squared));
};

export const cosineSim = (a: number[], b: number[]) => {
  const aNorm = norm(a);
  const bNorm = norm(b);
  const dotProduct = dot(a, b);

  return dotProduct / (aNorm * bNorm);
};
