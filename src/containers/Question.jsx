import { connect } from "react-redux";
import Question from "../components/Test/question";

function MapReduxStateToReactProps(state) {
  return { answers: state.answers };
}

export default connect(MapReduxStateToReactProps, null)(Question);
