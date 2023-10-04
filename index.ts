/*
 * Util functions -> reusable in many cases, range
 */
const calculateSumOfRange = (
  arr: number[],
  startIndex: number = 0,
  endIndex?: number
): number => {
  if (!arr || arr.length === 0) {
    return 0;
  }

  if (startIndex < 0 || startIndex >= arr.length) {
    throw new Error("Start index is not valid");
  }

  if (endIndex && endIndex >= arr.length) {
    throw new Error("End index is not valid");
  }

  const finalEndIndex = endIndex || arr.length - 1;

  let sum = 0;

  for (let i = startIndex; i <= finalEndIndex; i++) {
    sum += arr[i];
  }

  return sum;
};

const minMaxSum = (arr: number[], range: number): string => {
  const sortedArr = arr.sort();

  const minEndIndex = range - 1;
  const maxStartIndex = arr.length - range;

  const minSum = calculateSumOfRange(sortedArr, 0, minEndIndex);
  const maxSum = calculateSumOfRange(sortedArr, maxStartIndex);

  return `${minSum} ${maxSum}`;
};

// return 2 types of arr to display both, avoid duplicate code
const getEvenOddNumberInArr = (
  arr: number[]
): { even: number[]; odd: number[] } => {
  if (!arr || arr.length === 0) {
    return { even: [], odd: [] };
  }

  const evenArr: number[] = [];
  const oddArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }

  return { even: evenArr, odd: oddArr };
};

const handleEachRow = (input: number[]): void => {
  console.log("Min max sum:\t", minMaxSum(input, 4));
  console.log("Count total of array:\t", calculateSumOfRange(input));
  console.log("Find min in array:\t", Math.min(...input));
  console.log("Find max in array:\t", Math.max(...input));

  const { even, odd } = getEvenOddNumberInArr(input);

  console.log("Find even elements in array:\t", even);
  console.log("Find odd elements in array:\t", odd);
};

const handleListInput = (multiInput: number[][]): void => {
  for (let i = 0; i < multiInput.length; i++) {
    console.log(multiInput[i]);
    handleEachRow(multiInput[i]);
    console.log("\n----------\n");
  }
};

const splitStringIntoArr = (str: string | null): number[] => {
  if (!str) {
    throw new Error("Input is not valid");
  }

  return str.split("").map(Number);
};

// --------- MAIN -------------

const multiInput: number[][] = [
  [3, 1, 6, 5, 9],
  [1000, 2000, 3000, 5000, 9123412, 5],
];

handleListInput(multiInput);
