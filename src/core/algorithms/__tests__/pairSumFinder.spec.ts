import { describe } from "node:test";
import pairSumFinder, { pairSumFinderQuadratic } from "../pairSumFinder";

describe("PairSumFinder Algorithms tests", () => {
  //Base arrange
  const input = [1, 9, 5, 0, 20, -4, 12, 16, 7, 11, 23, -8, 2, -11];
  const targetSum = 12;
  const expectedValues = [
    [5, 7],
    [0, 12],
    [-4, 16],
    [1, 11],
    [20, -8],
    [23, -11],
  ];

  it("PairSumFinder returns all the expected pair of integers", () => {
    //Act
    const result = pairSumFinder(input, targetSum);
    const resultAsStringArray = result.map((r) => r.toString());

    //Assert
    let allExpectedValuesPresent = true;
    expectedValues.forEach((pair) => {
      const isPresent = resultAsStringArray.includes(pair.toString());
      if (!isPresent) {
        allExpectedValuesPresent = false;
      }
    });
    expect(allExpectedValuesPresent).toBe(true);
    expect(result.length).toBe(expectedValues.length);
  });

  it("PairSumFinderQuadratic returns all the expected pair of integers", () => {
    //Act
    const result = pairSumFinderQuadratic(input, targetSum);
    const resultAsStringArray = result.map((r) => r.toString());

    //Assert
    let allExpectedValuesPresent = true;
    expectedValues.forEach((pair) => {
      const isPresent = resultAsStringArray.includes(pair.toString());
      if (!isPresent) {
        allExpectedValuesPresent = false;
      }
    });
    expect(allExpectedValuesPresent).toBe(true);
    expect(result.length).toBe(expectedValues.length);
  });
});
