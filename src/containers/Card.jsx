import { connect } from "react-redux";
import Card from "../components/Test/card";

function MapReduxStateToReactProps(state) {
  return { answers: state.answers };
}

export default connect(MapReduxStateToReactProps, null)(Card);
