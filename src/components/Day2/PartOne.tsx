import puzzleInput from "@data/day2/puzzleInput";
import { GameOptionsType, GameResultsType, OpponentType, PlayerType} from '@customTypes/Day2';
import { handShapePoints, roundPoints} from '@utils/Day2';

type PuzzleInputType = OpponentType | PlayerType;
type HandShapeCipherType = {
  [T in PuzzleInputType]: GameOptionsType
};

const handShapeCipher: HandShapeCipherType = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors'
};

const determineWinner = (opponent: GameOptionsType, player: GameOptionsType): GameResultsType => {
  if (opponent === player) return 'draw';

  if (opponent === 'paper') {
    return (player === 'scissors') ? 'win' : 'lose';
  }

  if (opponent === 'rock') {
    return (player === 'paper') ? 'win' : 'lose';
  }

  if (opponent === 'scissors') {
    return (player === 'rock') ? 'win': 'lose';
  }

  throw new Error('determineWinner fell through all the exceptions');
};

const generatePlayerTotalPoints: number[] = puzzleInput.split('\n').map((game) => {
  const currentRound = game.split(' ');

  const opponent = currentRound[0] as OpponentType;
  const player = currentRound[1] as PlayerType;

  const opponentChoice = handShapeCipher[opponent];
  const playerChoice = handShapeCipher[player];

  const playerPoints = handShapePoints(playerChoice);
  const playerResult = determineWinner(opponentChoice, playerChoice);
  const playerRoundPoints = roundPoints(playerResult);

  return playerPoints + playerRoundPoints;
});

const addPlayerTotalPoints = generatePlayerTotalPoints.reduce((acc, curr) => acc + curr, 0);

const PartOne = () => <div>{addPlayerTotalPoints}</div>;

export default PartOne;
