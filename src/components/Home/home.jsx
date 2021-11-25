import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Qestnr from "./seq";

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
  const [seq, setSeq] = useState(0);
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
    const id = e.target.id;
    if (id === "radio_man") {
      setSelectedGender("남자");
    } else if (id === "radio_woman") {
      setSelectedGender("여자");
    }
  };

  return (
    <div className="userform">
      <form onSubmit={handleSubmit}>
        <h1>직업가치관검사</h1>
        <div className="name" style={{ padding: "10px" }}>
          <label class="name">이름</label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>

        <div className="qestnrSeq justify-content">
          <label>구분</label>
          <Qestnr onSelect={(seq) => setSeq(seq)} seq={seq} />
        </div>

        <div
          class="gender justify-content"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <label>성별</label>
          <input
            type="radio"
            class="btn-check"
            name="gender"
            id="radio_man"
            onClick={handleClick}
          />
          <label class="btn btn-outline-primary" for="radio_man">
            남자
          </label>

          <input
            type="radio"
            class="btn-check"
            name="gender"
            id="radio_woman"
            onClick={handleClick}
          />
          <label class="btn btn-outline-primary" for="radio_woman">
            여자
          </label>
        </div>

        <div className="btn justify-content">
          {name && selectedGender && seq > 0 ? (
            <Button type="submit">검사 시작</Button>
          ) : (
            <Button type="submit" disabled>
              검사 시작
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Home;
