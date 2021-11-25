import { connect } from "react-redux";
import Result from "../components/Result/result";

function MapReduxStateToReactProps(state) {
  return { user: state.user, answers: state.answers };
}
const MapReduxDispatchToReactProps = (dispatch) => {
  return {
    onInit: function () {
      dispatch({ type: "INIT" });
    },
  };
};

export default connect(
  MapReduxStateToReactProps,
  MapReduxDispatchToReactProps
)(Result);
