import { Fragment, memo } from "react";
import PropTypes, { object} from 'prop-types';
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
            key={item.id}
            onClick={() => {
              let comp_ch_obj = objects[Math.floor(Math.random() * objects.length)];

              if (comp_ch_obj.id !== item.id) {
                choices(item, comp_ch_obj);
              } else {
                alert(
                  `ohh! you and me choosed the ${item.title}. let's give another try!`
                );
              }
            }}
            disabled={btnDisable}
          >
            {item.title}
          </button>
        );
      })}
    </Fragment>
  );
};

GameObjects.propTypes = {
  objects:PropTypes.arrayOf(object),
  choices:PropTypes.func,
  btnDisable:PropTypes.bool
}
export default memo(GameObjects);
