import puzzleInput from '@data/day3/puzzleInput';
import { commonCharacters } from '@utils/index';
import { createPriorityItem } from '@utils/day3';

const divideCompartments = (compartments: string): string[][] => {
  return compartments.split('\n').map((compartment) => {
    const firstHalf = compartment.slice(0, compartment.length / 2);
    const secondHalf = compartment.slice(
      compartment.length / 2,
      compartment.length
    );
    return [firstHalf, secondHalf];
  });
};

const generatePriorityItem: number[] = divideCompartments(puzzleInput).map(
  (priority) => {
    const commonCharacter = commonCharacters(priority);
    return createPriorityItem(commonCharacter)[0];
  }
);

const PartOne = (): JSX.Element => {
  const generatePriorityItemTotal = generatePriorityItem.reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div>
      {/* Answer - 7821 */}
      {generatePriorityItemTotal}
    </div>
  );
};

export default PartOne;
