# Prerequisites

- Node must be installed in the machine. At least Node 14 version.

# Instructions to run the project

- install dependencies: `npm i`
- run cli: `npm cli <command> <arguments>` or `npm start <command> <arguments>`.
  For example, for this challenge use npm run cli pairSum 1,9,5,0,20,-4,12,16,7 12
- run unitarit tests for the algoirhtm implementations: `npm test`

# Algorithms & Big Notations

Big O notation describes the complexity of your code using algebraic terms. In summary, it is the language we use for talking about how long an algorithm takes to run (time complexity) or how much memory is used by an algorithm (space complexity). Big-O notation can express the best, worst, and average-case running time of an algorithm

![Alt text](big-o-cheatsheet.png)

## O(n²) -> Quadratic time

O(n²) means that the calculation runs in quadratic time, which is the squared size of the input data.

In programming, many of the more basic sorting algorithms have a worst-case run time of O(n²):

Bubble Sort
Insertion Sort
Selection Sort

## PairSumFinder algorithm challenge

- According to the challenge accepetence criterio. The PairSumFinder algorithm "efficient" is defined as be faster than O(n^2), and "correct" as returning the correct results for all possible inputs.

- PairSumFinder: To achieve a efficient strategy that be faster than O(n^2), We can use an accomulator and Set data structure mix approach that enables us to only perform a single for-n-iteration:

  1. Iterate over each number in the array, every iteration will add the number to the Set data structure.
  2. looking the difference between target and the current number (target - number), to obtain the required value to equal the expected targetValue.
  3. If this difference value already exists in the Set, add the difference and the current number to the array of valid pairs numbers that its addition operation is the target.

- PairSumFinderQuadratic: the inputs and outpus are the same that the above one, however the algorithm structure here follow the classic double for-n-iteration of the bubble sort algorithm.
