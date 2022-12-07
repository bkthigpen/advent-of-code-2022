import puzzleInput from '@data/day6/puzzleInput';
import { findStartOfPacket } from '@utils/day6';

const PartOne = () => {
  return <div>{findStartOfPacket(puzzleInput, 4)}</div>;
};

export default PartOne;
