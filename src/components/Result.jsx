import PropTypes from 'prop-types';
import { Fragment, useState, memo } from "react";
const Result = ({ compWinCount, userWinCount, gameOver, rounds }) => {
  const [winner, setWinner] = useState("none");

  if (compWinCount === Math.ceil(rounds / 2) && winner === "none") {
    setWinner("computer");
    gameOver();
  }
  if (userWinCount == Math.ceil(rounds / 2) && winner === "none") {
    setWinner("user");
    gameOver();
  }
  return (
    <Fragment>
      {winner === "none" ? (
        ""
      ) : winner === "computer" ? (
        <p>computer won the game! Refresh the page to start new Game!</p>
      ) : (
        <p>user won the game! Refresh the page to start new Game!</p>
      )}
      <p>
        <span style={{ marginRight: 30 }}>User wins : {userWinCount}</span>
        <span>Computer wins : {compWinCount}</span>
      </p>

      <p>The game is of {rounds} rounds in total.</p>
    </Fragment>
  );
};

Result.propTypes = {
  compWinCount:PropTypes.number,
  userWinCount:PropTypes.number,
  gameOver:PropTypes.func,
  rounds:PropTypes.number
}
export default memo(Result);
