import { GameOptionsType, GameResultsType } from "@customTypes/Day2";

export const handShapePoints = (result: GameOptionsType): number => {
  if (result === 'rock') return 1;
  if (result === 'paper') return 2;
  if (result === 'scissors') return 3;

  throw new Error('totalPoints received an invalid argument', result);
};

export const roundPoints = (outcome: GameResultsType): number => {
  if (outcome === 'lose') return 0;
  if (outcome === 'draw') return 3;
  if (outcome === 'win') return 6;

  throw new Error('roundPoints received an invalid argument', outcome);
};