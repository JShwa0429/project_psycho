import { connect } from "react-redux";
import Home from "../components/Home/home";

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (user) {
      dispatch({ type: "SAVE_USER", user: user });
    },
    onInit: function () {
      dispatch({ type: "INIT" });
    },
  };
}

export default connect(null, mapReduxDispatchToReactProps)(Home);
