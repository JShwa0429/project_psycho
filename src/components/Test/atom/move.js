import React from "react";
import { useHistory, useLocation } from "react-router";
import Button from "react-bootstrap/Button";
const Move = (props) => {
  const history = useHistory();
  const location = useLocation();
  const userProfile = location.userProfile;
  const next = props.next;

  const handleMove = (e) => {
    e.preventDefault();
    let move = e.target.id;
    if (move === "btn_prev") {
      history.goBack();
    } else if (move === "btn_next") {
      history.push({
        pathname: next,
        userProfile: userProfile,
      });
    }
  };
  return (
    <div>
      <Button id="btn_prev" onClick={handleMove}>
        이전으로 가기
      </Button>
      {next && (
        <Button id="btn_next" onClick={handleMove}>
          다음으로 가기
        </Button>
      )}
    </div>
  );
};

export default Move;
