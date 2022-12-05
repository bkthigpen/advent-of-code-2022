export const splitPuzzle = (input: string): string[][] =>
  input.split('\n').map((input) => input.split(','));
