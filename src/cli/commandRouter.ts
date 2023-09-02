import { AlgorithmContext } from "./strategies";
import PairSumFinderStrategy from "./strategies/pairSumStrategy";

const commandRouter = (command: string, additionalArguments: string[]) => {
  const context = new AlgorithmContext();
  switch (command) {
    case "pairSum":
      context.setStrategy(new PairSumFinderStrategy());
      break;

    default:
      context.setStrategy(new PairSumFinderStrategy());
      break;
  }

  try {
    const result = context.execute(additionalArguments);
    console.info(result);
    process.stdout;
  } catch (error: unknown) {
    let errorMessage = error;
    if (error instanceof Error) {
      errorMessage = error!.message;
    }
    console.error(errorMessage);
  }
};

export default commandRouter;
