import puzzleInput from '@data/day3/puzzleInput';
import { commonCharacters } from '@utils/index';
import { createPriorityItem } from '@utils/day3';

const divideCompartments = (input: string) => {
  const dividedCount = input.split('\n');
  let trueIndex = 0;
  const builderArray = [];

  for (let i = 0; i < dividedCount.length; i += 1) {
    if (i % 3 === 0) {
      const newArray = [
        dividedCount[i],
        dividedCount[i + 1],
        dividedCount[i + 2],
      ];
      builderArray.push(newArray);
      trueIndex += 1;
    }
  }

  return builderArray;
};

const generatePriorityItem: number[] = divideCompartments(puzzleInput).map(
  (priority) => {
    const commonCharacter = commonCharacters(priority);
    return createPriorityItem(commonCharacter)[0];
  }
);

const PartTwo = (): JSX.Element => {
  const generatePriorityItemTotal = generatePriorityItem.reduce(
    (acc, curr) => acc + curr,
    0
  );
  return (
    <div>
      {/* Answer - 2752 */}
      {generatePriorityItemTotal}
    </div>
  );
};

export default PartTwo;
