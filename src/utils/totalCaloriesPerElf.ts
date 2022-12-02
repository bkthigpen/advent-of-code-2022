// broken up in case we need to use this througout the challenge
// will label and rename if this changes
const totalCaloriesPerElf = (calories: string): number[] => {
  const splitCaloriesPerElf = calories.split('\n');
  let currTotal = 0;
  const buildArr: number[] = [];

  for (let i = 0; i < splitCaloriesPerElf.length; i += 1) {
    if (splitCaloriesPerElf[i] === '') {
      buildArr.push(currTotal);
      currTotal = 0;
      i += 1;
    }

    const toNumber = parseInt(splitCaloriesPerElf[i]);
    currTotal += toNumber;
  }

  return buildArr;
};

export default totalCaloriesPerElf;
