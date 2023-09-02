import { AlgorithmStrategy } from ".";
import pairSumFinder from "../../core/algorithms/pairSumFinder";

enum PairSumErrors {
  numberArrayRequired = "NumberArray is required && min-length required is 2",
  targetNumRequired = "TargetNum is required and must be a number",
}

class PairSumFinderStrategy implements AlgorithmStrategy {
  public execute(data: string[]) {
    const [numberArray, targetNum] = data;
    const numberArrayParsed = this.convertArgumentToNumbersArray(numberArray);
    const targetSumParsed = parseInt(targetNum);
    if (!numberArrayParsed || numberArrayParsed?.length < 2)
      throw Error(PairSumErrors.numberArrayRequired);
    if (isNaN(targetSumParsed)) throw Error(PairSumErrors.targetNumRequired);

    const result = pairSumFinder(numberArrayParsed, targetSumParsed);

    return result;
  }

  public convertArgumentToNumbersArray(arg: string): number[] {
    return arg?.split(",")?.map((s) => parseInt(s));
  }
}

export default PairSumFinderStrategy;
