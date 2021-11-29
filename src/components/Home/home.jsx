import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Home = ({ onSaveUser }) => {
  const [name, setName] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = +new Date();
    const user = {};
    user["name"] = name;
    user["gender"] = selectedGender;
    user["startDtm"] = timestamp;

    //Dispatch
    onSaveUser(user);
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
            style={{ fontSize: "1em" }}
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
                  fontSize: "1em",
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
                checked={selectedGender === "100205"}
                id="100205"
                readOnly
                onClick={handleClick}
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="100205"
                style={{
                  width: "40%",
                  fontSize: "2vw",
                  paddingTop: "2vh",
                  paddingBottom: "2vh",
                  marginRight: "0vw",
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
                checked={selectedGender === "100206"}
                id="100206"
                readOnly
                onClick={handleClick}
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="100206"
                style={{
                  marginLeft: "2vw",
                  width: "8vw",
                  fontSize: "2vw",
                  paddingTop: "2vh",
                  paddingBottom: "2vh",
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
                  marginLeft: "1vw",
                  width: "100%",
                  fontSize: "1.5em",
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
