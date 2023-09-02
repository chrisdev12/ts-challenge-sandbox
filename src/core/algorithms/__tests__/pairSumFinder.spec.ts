import pairSumFinder from "../pairSumFinder";

describe("pairSumFinder tests", () => {
  it("should finds apairs of integers from a list that sum to a given value working", () => {
    //Arrange
    const input = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetSum = 12;
    const expectedValue = [
      [5, 7],
      [0, 12],
      [-4, 16],
    ];
    //Act
    const result = pairSumFinder(input, targetSum);

    //Assert
    expect(result).toEqual(expectedValue);
  });
});
