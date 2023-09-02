export type PairFounds = Array<[number, number]>;

/**
 * @param numbers Array of numbers that will be traversed to find the pairs of numbers that added together give the target sum.
 * @param targetSum desired number that will be used as the sum target
 * @returns An Array of [number, number]
 */
export const pairSumFinder = (
  numbers: number[],
  targetSum: number,
): PairFounds => {
  const pairFounds: PairFounds = [];
  const numbersTraversed = new Set();

  for (const num of numbers) {
    const expectedValToGetTarget = targetSum - num;

    if (numbersTraversed.has(expectedValToGetTarget)) {
      pairFounds.push([expectedValToGetTarget, num]);
    }
    numbersTraversed.add(num);
  }

  return pairFounds;
};

/**
 * Same pairSumFinder signature. However this one has a complexity of O(n²) - quadratic
 */
export const pairSumFinderQuadratic = (
  numbers: number[],
  targetSum: number,
): PairFounds => {
  const pairFounds: PairFounds = [];
  for (let baseIdx = 0; baseIdx < numbers.length; baseIdx++) {
    const baseValue = numbers[baseIdx];
    for (
      let comparisonIdx = baseIdx + 1;
      comparisonIdx < numbers.length;
      comparisonIdx++
    ) {
      const comparisionValue = numbers[comparisonIdx];
      const result = baseValue + comparisionValue;
      if (result === targetSum) {
        pairFounds.push([baseValue, comparisionValue]);
      }
    }
  }

  return pairFounds;
};

export default pairSumFinder;
