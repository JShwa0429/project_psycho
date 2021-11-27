import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

// 구현 ----------------------------------------
// - 이름을 입력할 수 있는 input form을 구현합니다.
// - 성별을 선택할 수 있는 input form을 구현합니다.
// - 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 검사 시작 버튼이 비활성화 되어야 합니다.

// **`선택`**

// - 이름을 올바르게 입력하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다.
// - 성별을 선택하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다.

const Home = ({ onClick }) => {
  const [name, setName] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const seq = 6;
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = +new Date();
    const user = {};
    user["name"] = name;
    user["gender"] = selectedGender;
    user["seq"] = seq;
    user["startDtm"] = timestamp;

    //Dispatch profile
    onClick(user);
    // history를 통해 검사시작 화면으로 이동
    history.push("/test");
  };

  const handleClick = (e) => {
    setSelectedGender(e.target.id);
  };

  return (
    <div className="home justify-content">
      <div className="home-left">
        <div className="home-introduce">
          <div className="home-introduce-img">
            <p style={{ color: "#50b8e7" }}>직업가치관검사</p>
          </div>
          <div className="home-introduce-content">
            <p>
              <b style={{ color: "navy" }}>&#47;* Elice *&#47;</b>에서 자신의
              가치관을 선택해 어울리는 직업을 알아보세요.
            </p>
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-input">
          <Form.Floating
            className="Form mb-3"
            onSubmit={handleSubmit}
            style={{ fontSize: "3vh" }}
          >
            <FloatingLabel
              controlId="floatingInput"
              label="이름"
              className="mb-3"
              style={{ marginLeft: "2.6vw" }}
            >
              <Form.Control
                style={{
                  width: "90%",
                  height: "8vh",
                  fontSize: "3vh",
                  textAlign: "center",
                }}
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </FloatingLabel>
            <div
              className="gender"
              role="group"
              aria-label="Basic radio toggle button group"
              style={{ padding: "0px" }}
            >
              <input
                type="radio"
                className="btn-check"
                name="gender"
                id="100205"
                onClick={handleClick}
              />
              <label
                className="btn "
                htmlFor="100205"
                style={{
                  width: "40%",
                  fontSize: "1em",
                  paddingTop: "1.3vh",
                  marginRight: "0vh",
                  color: "skyblue",
                  border: "1px solid skyblue",
                }}
              >
                남성
              </label>
              <input
                type="radio"
                className="btn-check"
                name="gender"
                id="100206"
                onClick={handleClick}
              />
              <label
                className="btn"
                htmlFor="100206"
                style={{
                  marginLeft: "2vh",
                  width: "40%",
                  fontSize: "1em",
                  paddingTop: "1.3vh",
                  color: "skyblue",
                  border: "1px solid skyblue",
                }}
              >
                여성
              </label>
            </div>
            <div
              className="btn justify-content"
              style={{ float: "right", marginRight: "1vw", marginTop: "2vh" }}
            >
              <Button
                variant="outline-primary"
                type="submit"
                style={{
                  marginLeft: "2vh",
                  width: "100%",
                  fontSize: "5vh",
                  paddingTop: "1vh",
                }}
                disabled={!(name && selectedGender)}
                onClick={handleSubmit}
              >
                검사 시작
              </Button>
            </div>
          </Form.Floating>
        </div>
      </div>
    </div>
  );
};

export default Home;
