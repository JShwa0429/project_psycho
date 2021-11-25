import { connect } from "react-redux";
import Card from "../components/Test/atom/card";

function MapReduxStateToReactProps(state) {
  return { answers: state.answers };
}

export default connect(MapReduxStateToReactProps, null)(Card);
