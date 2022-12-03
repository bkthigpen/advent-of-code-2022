import { LettersType } from '@customTypes/Day3';

export const assignLetterValues = (): LettersType => {
  const lowerCaseLetters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letterObj: LettersType = {};
  for (let i = 0; i < 52; i += 1) {
    letterObj[lowerCaseLetters[i]] = i + 1;
  }

  return letterObj;
};

export const createPriorityItem = (priorityItem: string[]): number[] => {
  const letterValues = assignLetterValues();
  return priorityItem.map((item) => letterValues[item]);
};
