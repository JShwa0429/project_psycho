import { connect } from "react-redux";
import Test from "../components/Test/Test";

const MapReduxDispatchToReactProps = (dispatch) => {
  return {
    onSave: function (answers) {
      dispatch({
        type: "SAVE_ANSWERS",
        answers: { index: answers[0], score: answers[1] },
      });
    },
  };
};

export default connect(null, MapReduxDispatchToReactProps)(Test);
