import puzzleInput from '@data/day6/puzzleInput';

const findStartOfPacket = (input: string) => {
  let subroutine: number | undefined;
  for (let i = 0; i <= input.length - 14; i += 1) {
    const firstFourternLetters = puzzleInput.slice(i, i + 14);

    if (firstFourternLetters.match(/^(?:([A-Za-z])(?!.*\1))*$/)) {
      subroutine = i + 14;
      break;
    }
  }

  if (subroutine !== undefined) {
    return subroutine;
  }

  return 'Cannot find start-of-packet marker';
};

const PartTwo = () => {
  return <div>{findStartOfPacket(puzzleInput)}</div>;
};

export default PartTwo;
