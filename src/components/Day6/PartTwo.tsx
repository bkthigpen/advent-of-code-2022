import puzzleInput from '@data/day6/puzzleInput';
import { findStartOfPacket } from '@utils/day6';

const PartTwo = () => {
  return <div>{findStartOfPacket(puzzleInput, 14)}</div>;
};

export default PartTwo;
