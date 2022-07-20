import { Fragment, memo } from "react";
import PropTypes, { string } from 'prop-types';
const GameObjects = ({ objects, choices, btnDisable }) => {
  return (
    <Fragment>
      {objects.map((item, index) => {
        return (
          <button
            style={{
              backgroundColor: "white",
              cursor: "pointer",
              padding: "10px",
              margin: "10px",
              width: "100px",
              overflow: "auto",
            }}
            key={index}
            onClick={() => {
              let comp_ch = objects[Math.floor(Math.random() * objects.length)];

              if (comp_ch !== item) {
                choices(item, comp_ch);
              } else {
                alert(
                  `ohh! you and me choosed the ${item}. let's give another try!`
                );
              }
            }}
            disabled={btnDisable}
          >
            {item}
          </button>
        );
      })}
    </Fragment>
  );
};

GameObjects.propTypes = {
  objects:PropTypes.arrayOf(string),
  choices:PropTypes.func,
  btnDisable:PropTypes.bool
}
export default memo(GameObjects);
