import puzzleInput from "@data/day3/puzzleInput";

import { assignLetterValues } from "@utils/day3";

const divideCompartments = (compartments: string): string[][] => {
  return compartments.split('\n').map((compartment) => {
    const firstHalf = compartment.slice(0, compartment.length / 2);
    const secondHalf = compartment.slice(compartment.length / 2, compartment.length);
    return [firstHalf, secondHalf];
  });
};

const commonItemType = (compartments: string[][]): string[] => {
  const commonType = compartments.map((type) => {
    const compartmentOne = new Set(type[0]);
    const commonType = [...new Set(type[1])].filter((char) => compartmentOne.has(char))[0];
    return commonType;
  }); 

  return commonType;
};

const generatePriorityItemTotal = (): number => {
  const letterValues = assignLetterValues();
  const createPriorityItem = (priorityItem: string[]): number[] => priorityItem.map((item) => letterValues[item]);

  const dividedCompartments = divideCompartments(puzzleInput)

  const commonItem = commonItemType(dividedCompartments);
  const totalPriorityItem = createPriorityItem(commonItem).reduce((acc, curr) => acc + curr, 0);

  // answer 7821
  return totalPriorityItem;
};

const PartOne = () => {
  const initPriorityItemTotal = generatePriorityItemTotal();
  return (
    <div>
      {initPriorityItemTotal}
    </div>
  );
};

export default PartOne;