export interface AlgorithmStrategy {
  execute(input: string[]): unknown;
}

export class AlgorithmContext {
  private _strategy: AlgorithmStrategy = {
    execute: () => console.log(`Not algorithm defined`),
  };

  public setStrategy(strategy: AlgorithmStrategy) {
    this._strategy = strategy;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public execute(input: string[]): unknown {
    const result = this._strategy.execute(input);

    return result;
  }
}
