import { connect } from "react-redux";
import Test from "../components/Test/Test";

function MapReduxStateToReactProps(state) {
  return { user: state.user };
}
const MapReduxDispatchToReactProps = (dispatch) => {
  return {
    onSave: function (answers) {
      dispatch({ type: "SAVE_ANSWERS", answers: answers });
    },
  };
};

export default connect(
  MapReduxStateToReactProps,
  MapReduxDispatchToReactProps
)(Test);
