import { connect } from "react-redux";
import Home from "../components/Home/home";

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onSaveUser: function (user) {
      dispatch({ type: "SAVE_USER", user: user });
    },
  };
}

export default connect(null, mapReduxDispatchToReactProps)(Home);
