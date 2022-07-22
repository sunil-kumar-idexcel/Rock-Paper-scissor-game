import { Fragment, useState, memo } from "react";
import PropTypes, { string } from "prop-types";
import GameObjects from "./components/GameObjects";
import PickedChoices from "./components/PickedChoices";
import Result from "./components/Result";
const GamePage = ({ objects, rounds }) => {
  const [user_ch, set_user_ch] = useState("");
  const [comp_ch, set_comp_ch] = useState("");
  const [userWinCount, setUserWinCount] = useState(0);
  const [compWinCount, setCompWinCount] = useState(0);
  const [btnDisable, setBtnDisable] = useState(false);

  const choices = (user_ch, comp_ch) => {
    set_comp_ch(comp_ch);
    set_user_ch(user_ch);
    console.log(user_ch, comp_ch);
    console.log("winnerObject", winnerObject(user_ch, comp_ch));
    let winObj = winnerObject(user_ch, comp_ch);
    winObj === comp_ch
      ? setCompWinCount((prevState) => prevState + 1)
      : setUserWinCount((prevState) => prevState + 1);

    function winnerObject(obj1, obj2) {
      if (
        (obj1 === "Rock" && obj2 === "Paper") ||
        (obj2 === "Rock" && obj1 === "Paper")
      )
        return "Paper";
      if (
        (obj1 === "Rock" && obj2 === "Scissors") ||
        (obj2 === "Rock" && obj1 === "Scissors")
      )
        return "Rock";
      if (
        (obj1 === "Paper" && obj2 === "Scissors") ||
        (obj2 === "Paper" && obj1 === "Scissors")
      )
        return "Scissors";
    }
  };

  const gameOver = () => {
    setBtnDisable(true);
  };

  return (
    <Fragment>
      <GameObjects
        objects={objects}
        choices={choices}
        btnDisable={btnDisable}
      />
      <PickedChoices user_ch={user_ch} comp_ch={comp_ch} />
      <Result
        userWinCount={userWinCount}
        compWinCount={compWinCount}
        gameOver={gameOver}
        rounds={rounds}
      />
    </Fragment>
  );
};

GamePage.propTypes = {
  objects: PropTypes.arrayOf(string),
  rounds: PropTypes.number,
};

export default memo(GamePage);
