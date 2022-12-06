import puzzleInput from "@data/day5/puzzleInput";


// 36 spaces per line
// crates take up 3 spaces
// numbers have 1 space at the beginning and end
// must be divisible by 4
// 9 * 4 = 36

// brute force solution since I did not have the time or patience to write my own input parser
// maybe something I can come back to eventually
const hardcodedInput = [
  ['1','G','D','V','Z','J','S','B'],
  ['2','Z','S','M','G','V','P'],
  ['3','C','L','B','S','W','T','Q','F'],
  ['4','H','J','G','W','M','R','V','Q'],
  ['5','C','L','S','N','F','M','D'],
  ['6','R','G','C','D'],
  ['7','H','G','T','R','J','D','S','Q'],
  ['8','P','F','V'],
  ['9','D','R','S','T','J']
];


const PartOne = () => {
  const crateRows = puzzleInput.split(`\n\n`)[0].split('\n');
  const numberOfCrateColumns = crateRows.length;
  const rawInstructions = puzzleInput.split('\n\n')[1].split('\n');

  // console.log('crateRows', crateRows);
  // console.log('hardcodedInput', hardcodedInput);

  console.log('Raw instructions', rawInstructions);

  const instructions = rawInstructions.map((instruct) => {
    // console.log('instruct', instruct);
    const splitInstruct = instruct.split(' ');
    return {
      [splitInstruct[0]]: splitInstruct[1],
      [splitInstruct[2]]: splitInstruct[3],
      [splitInstruct[4]]: splitInstruct[5]
    }
  });

  console.log('instructions', instructions);

  return (
    <div>
      WIP
    </div>
  );
};

export default PartOne;
