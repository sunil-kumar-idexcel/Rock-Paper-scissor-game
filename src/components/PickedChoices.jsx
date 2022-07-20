import PropTypes from "prop-types";
import { Fragment, memo } from "react";
const PickedChoices = ({ user_ch, comp_ch }) => {
  return (
    <Fragment>
      <p>User's choice : {user_ch}</p>
      <p>Computer's choice : {comp_ch}</p>
    </Fragment>
  );
};

PickedChoices.propTypes = {
  user_ch: PropTypes.string,
  comp_ch: PropTypes.string,
};
export default memo(PickedChoices);
