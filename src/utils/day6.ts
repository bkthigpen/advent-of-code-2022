export const findStartOfPacket = (input: string, numChars: number) => {
  let subroutine: number | undefined;
  for (let i = 0; i <= input.length - numChars; i += 1) {
    const firstFourternLetters = input.slice(i, i + numChars);

    if (firstFourternLetters.match(/^(?:([A-Za-z])(?!.*\1))*$/)) {
      subroutine = i + numChars;
      break;
    }
  }

  if (subroutine !== undefined) {
    return subroutine;
  }

  return 'Cannot find start-of-packet marker';
};
