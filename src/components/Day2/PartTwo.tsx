import puzzleInput from "@data/day2/puzzleInput";
import { GameOptionsType, GameResultsType, OpponentType, PlayerType} from '@customTypes/Day2';
import { handShapePoints, roundPoints} from '@utils/day2';

type OpponentCipherType = {
  [T in OpponentType]: GameOptionsType;
};

type PlayerCipherType = {
  [T in PlayerType]: GameResultsType;
};

const opponentCipher: OpponentCipherType = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
};

const playerCipher: PlayerCipherType = {
  X: 'lose',
  Y: 'draw',
  Z: 'win',
};

const determineHandSign = (opponent: GameOptionsType, playerOutcome: GameResultsType): GameOptionsType => {
  if (playerOutcome === 'lose') {
    if (opponent === 'paper') return 'rock';
    if (opponent === 'rock') return 'scissors';
    if (opponent === 'scissors') return 'paper';
  }

  if (playerOutcome === 'draw') {
    if (opponent === 'paper') return 'paper';
    if (opponent === 'rock') return 'rock';
    if (opponent === 'scissors') return 'scissors';
  }

  if (playerOutcome === 'win') {
    if (opponent === 'paper') return 'scissors';
    if (opponent === 'rock') return 'paper';
    if (opponent === 'scissors') return 'rock';
  }

  throw new Error('determineWinner does not satsify any of the conditions');
};

const generatePlayerTotalPoints = puzzleInput.split('\n').map((game) => {
  const currentRound = game.split(' ');

  const opponent = currentRound[0] as OpponentType;
  const player = currentRound[1] as PlayerType;

  const opponentChoice = opponentCipher[opponent];
  const playerOutcome = playerCipher[player];
  const playerHandSign = determineHandSign(opponentChoice, playerOutcome);

  const playerPoints = handShapePoints(playerHandSign);
  const playerRoundPoints = roundPoints(playerOutcome);

  return playerPoints + playerRoundPoints;
});

const addPlayerTotalPoints = generatePlayerTotalPoints.reduce((acc, curr) => acc + curr, 0);

const PartTwo = () => <div>{addPlayerTotalPoints}</div>;

export default PartTwo;
