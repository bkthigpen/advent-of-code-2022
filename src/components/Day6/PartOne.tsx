import puzzleInput from '@data/day6/puzzleInput';

const findStartOfPacket = (input: string) => {
  let subroutine: number | undefined;
  for (let i = 0; i <= input.length - 4; i += 1) {
    const firstFourLetters = puzzleInput.slice(i, i + 4);

    if (firstFourLetters.match(/^(?:([A-Za-z])(?!.*\1))*$/)) {
      subroutine = i + 4;
      break;
    }
  }

  if (subroutine !== undefined) {
    return subroutine;
  }

  return 'Cannot find start-of-packet marker';
};

const PartOne = () => {
  return <div>{findStartOfPacket(puzzleInput)}</div>;
};

export default PartOne;
