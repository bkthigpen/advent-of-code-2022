import puzzleInput from '@data/day4/puzzleInput';

const splitPuzzle = puzzleInput.split('\n').map((input) => input.split(','));

const determineWorkOverlap = splitPuzzle.map((puzzle) => {
  const firstElf = puzzle[0].split('-').map((elf) => parseInt(elf));
  const secondElf = puzzle[1].split('-').map((elf) => parseInt(elf));

  const hasWorkOverlap: number =
    (firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[1]) ||
    (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1])
      ? 1
      : 0;

  return hasWorkOverlap;
});

const PartOne = () => {
  const totalWorkOverlap = determineWorkOverlap.reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div>
      {/* Answer - 538 */}
      {totalWorkOverlap}
    </div>
  );
};

export default PartOne;
