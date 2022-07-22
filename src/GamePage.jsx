import { Fragment, useState, memo } from "react";
import PropTypes, { object, string } from "prop-types";
import GameObjects from "./components/GameObjects";
import PickedChoices from "./components/PickedChoices";
import Result from "./components/Result";
const GamePage = ({ objects, rounds }) => {
  const [user_ch, set_user_ch] = useState({});
  const [comp_ch, set_comp_ch] = useState({});
  const [userWinCount, setUserWinCount] = useState(0);
  const [compWinCount, setCompWinCount] = useState(0);
  const [btnDisable, setBtnDisable] = useState(false);

  const choices = (user_ch, comp_ch) => {
    set_comp_ch(comp_ch);
    set_user_ch(user_ch);
    console.log(user_ch, comp_ch);
    console.log("winnerObject", winnerObject(user_ch, comp_ch));
    let winObjId = winnerObject(user_ch, comp_ch);
    winObjId === comp_ch.id
      ? setCompWinCount((prevState) => prevState + 1)
      : setUserWinCount((prevState) => prevState + 1);

    // function winnerObject(obj1, obj2) {
    //   if (
    //     (obj1 === "Rock" && obj2 === "Paper") ||
    //     (obj2 === "Rock" && obj1 === "Paper")
    //   )
    //     return "Paper";
    //   if (
    //     (obj1 === "Rock" && obj2 === "Scissors") ||
    //     (obj2 === "Rock" && obj1 === "Scissors")
    //   )
    //     return "Rock";
    //   if (
    //     (obj1 === "Paper" && obj2 === "Scissors") ||
    //     (obj2 === "Paper" && obj1 === "Scissors")
    //   )
    //     return "Scissors";
    // }

    function winnerObject(obj1, obj2) {
      if (obj1.id === 1) {
        switch (obj2.id) {
          case 2:
            return 2;
          default:
            return 3;
        }
      } else if (obj1.id === 2) {
        switch (obj2.id) {
          case 1:
            return 2;
          default:
            return 3;
        }
      } else {
        switch (obj2.id) {
          case 1:
            return 1;
          default:
            return 3;
        }
      }
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
  objects: PropTypes.arrayOf(object),
  rounds: PropTypes.number,
};

export default memo(GamePage);
