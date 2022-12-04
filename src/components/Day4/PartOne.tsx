import puzzleInput from '@data/day4/puzzleInput';

const splitPuzzle = puzzleInput.split('\n').map((input) => input.split(','));

const determineWorkOverlap = splitPuzzle.map((puzzle) => {
  const firstElf = puzzle[0].split('-');
  const secondElf = puzzle[1].split('-');

  const orderedElvesArray =
    firstElf[0] > secondElf[0] ? [secondElf, firstElf] : [firstElf, secondElf];

  const firstElfSorted = orderedElvesArray[0];
  const secondElfSorted = orderedElvesArray[1];

  const hasWorkOverlap: number =
    firstElfSorted[0] <= secondElfSorted[0] &&
    firstElfSorted[1] >= secondElfSorted[1]
      ? 1
      : 0;

  // console.log('firstElf', firstElf);
  // console.log('secondElf', secondElf);
  // console.log('orderElvesArray', orderedElvesArray);

  // console.log('firstElfSorted', firstElfSorted);
  // console.log('secondElfSorted', secondElfSorted);
  // console.log('hasWorkOverlap', hasWorkOverlap);
  // console.log('-------');
  return hasWorkOverlap;
});

// console.log('determineWorkOverlap', determineWorkOverlap);

const PartOne = () => {
  const totalWorkOverlap = determineWorkOverlap.reduce(
    (acc, curr) => acc + curr,
    0
  );

  {
    /* 511 - This is incorrect so find where the edge case is */
  }

  console.log('totalWorkOverlap', totalWorkOverlap);
  return <div>{totalWorkOverlap}</div>;
};

export default PartOne;
