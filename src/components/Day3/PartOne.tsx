import puzzleInput from "@data/day3/puzzleInput";

type LettersType = {
  [T in string]: number
}

const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const divideCompartments = (compartments: string): string[][] => {
  return compartments.split('\n').map((compartment) => {
    const firstHalf = compartment.slice(0, compartment.length / 2);
    const secondHalf = compartment.slice(compartment.length / 2, compartment.length);
    return [firstHalf, secondHalf];
  })
};

const assignLetterValues = (letter: string): LettersType => {
  const letterObj: LettersType = {};
  for (let i = 0; i < 52; i += 1) {
    letterObj[letter[i]] = i + 1;
  }

  return letterObj;
}

const commonItemType = (compartments: string[][]): string[] => {
  const commonType = compartments.map((type) => {
    const compartmentOne = new Set(type[0]);
    const commonType = [...new Set(type[1])].filter((char) =>compartmentOne.has(char))[0];
    return commonType;
  }); 

  return commonType;
};

const generatePriorityItemTotal = (): number => {
  const letterValues = assignLetterValues(lowerCaseLetters);
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