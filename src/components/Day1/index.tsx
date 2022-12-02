import puzzleInput from "@data/puzzleInput";
import totalCaloriesPerElf from "@utils/totalCaloriesPerElf";

const Day1 = (): JSX.Element => {

const initCaloriesPerElf = totalCaloriesPerElf(puzzleInput);

// part one solution
const mostCalories = Math.max(...initCaloriesPerElf);

// part two solution
const caloriesDescending = initCaloriesPerElf.sort((a, b) => b - a);
const topThreeTotal = caloriesDescending.slice(0, 3).reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h1>Day One</h1>
      <h2>Part One Answer</h2>
      {mostCalories}
      <h2>Part Two Answer</h2>
      {topThreeTotal}
    </div>
  );
};

export default Day1;