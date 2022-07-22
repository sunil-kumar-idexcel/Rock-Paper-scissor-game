import PropTypes from "prop-types";
import { Fragment, memo } from "react";
const PickedChoices = ({ user_ch, comp_ch }) => {
  return (
    <Fragment>
      <p>User's choice : {user_ch.title}</p>
      <p>Computer's choice : {comp_ch.title}</p>
    </Fragment>
  );
};

PickedChoices.propTypes = {
  user_ch: PropTypes.object,
  comp_ch: PropTypes.object,
};
export default memo(PickedChoices);
