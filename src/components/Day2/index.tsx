import puzzleInput from "@data/day2/puzzleInput";

type GameOptionsType = 'rock' | 'paper' | 'scissors';
type GameResultsType = 'win' | 'lose' | 'draw';
type OpponentType = 'A' | 'B' | 'C';
type PlayerType = 'X' | 'Y' | 'Z';
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

const handShapePoints = (result: GameOptionsType): number => {
  if (result === 'rock') return 1;
  if (result === 'paper') return 2;
  if (result === 'scissors') return 3;

  throw new Error('totalPoints received an invalid argument', result);
};

const roundPoints = (outcome: GameResultsType): number => {
  if (outcome === 'lose') return 0;
  if (outcome === 'draw') return 3;
  if (outcome === 'win') return 6;

  throw new Error('roundPoints received an invalid argument', outcome);
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

const Day2 = () => {
  return (
    <div>
      <h1>Day 2</h1>
      <h2>Part One Answer</h2>
      {addPlayerTotalPoints}
    </div>
  )
}

export default Day2;
