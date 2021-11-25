import { connect } from "react-redux";
import Test from "../components/Test/Test";

const MapReduxStateToReactProps = (state) => {
  return { user: state.user };
};
const MapReduxDispatchToReactProps = (dispatch) => {};

export default connect(
  MapReduxStateToReactProps,
  MapReduxDispatchToReactProps
)(Test);
