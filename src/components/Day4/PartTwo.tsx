import puzzleInput from '@data/day4/puzzleInput';
import { splitPuzzle } from '@utils/day4';

const PartOne = (): JSX.Element => {
  const determineWorkOverlap = splitPuzzle(puzzleInput).map((puzzle) => {
    const firstElf = puzzle[0].split('-').map((elf) => parseInt(elf));
    const secondElf = puzzle[1].split('-').map((elf) => parseInt(elf));

    const hasWorkOverlap: number =
      (firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[0]) ||
      (secondElf[0] <= firstElf[0] && secondElf[1] >= firstElf[0])
        ? 1
        : 0;

    return hasWorkOverlap;
  });

  const totalWorkOverlap = determineWorkOverlap.reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div>
      {/* Answer - 792 */}
      {totalWorkOverlap}
    </div>
  );
};

export default PartOne;
