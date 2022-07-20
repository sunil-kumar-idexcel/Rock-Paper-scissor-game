import { Fragment, useState, memo } from "react";
import PropTypes, { string } from 'prop-types';
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

    if (user_ch === "Rock" && comp_ch === "Paper") {
      setCompWinCount((prevState) => prevState + 1);
    } else if (user_ch === "Rock" && comp_ch === "Scissors") {
      setUserWinCount((prevState) => prevState + 1);
    } else if (user_ch === "Paper" && comp_ch === "Rock") {
      setUserWinCount((prevState) => prevState + 1);
    } else if (user_ch === "Paper" && comp_ch === "Scissors") {
      setCompWinCount((prevState) => prevState + 1);
    } else if (user_ch === "Scissors" && comp_ch === "Rock") {
      setCompWinCount((prevState) => prevState + 1);
    } else if (user_ch === "Scissors" && comp_ch === "Paper") {
      setUserWinCount((prevState) => prevState + 1);
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
  objects:PropTypes.arrayOf(string),
  rounds:PropTypes.number
}

export default memo(GamePage);
