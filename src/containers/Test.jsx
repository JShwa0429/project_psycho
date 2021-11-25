import { connect } from "react-redux";
import Test from "../components/Test/Test";

function MapReduxStateToReactProps(state) {
  return { user: state.user };
}
// const MapReduxDispatchToReactProps = (dispatch) => {};

export default connect(MapReduxStateToReactProps, null)(Test);
