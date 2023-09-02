export type pairFounds = Array<[number, number]>;

const pairSumFinder = (numbers: number[], targetSum: number): pairFounds => {
  const pairFounds: pairFounds = [];
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
