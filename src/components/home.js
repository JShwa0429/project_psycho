import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Qestnr from './atom/qestnr';
// 구현 ----------------------------------------
// - 이름을 입력할 수 있는 input form을 구현합니다.
// - 성별을 선택할 수 있는 input form을 구현합니다.
// - 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 검사 시작 버튼이 비활성화 되어야 합니다.

// **`선택`**

// - 이름을 올바르게 입력하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다.
// - 성별을 선택하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다.

const Home = ({ history }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('gender');
  //const [qestnrSeq, setQestnrSeq] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    // history를 통해 검사시작 화면으로 이동
    history.push('/example');
  };

  const handleClick = (e) => {
    setGender(e.target.id);
  };

  const [seq, setSeq] = useState(0);
  const handleSelect = (value) => {
    console.log(value);
    setSeq(value);
    console.log(seq);
  };
  // 버튼 활성화

  return (
    <div>
      <h1>직업가치관검사</h1>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label class="name">이름</label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>

        <div className="qestnrSeq">
          <label class="name">구분</label>
          <Qestnr onSelect={handleSelect} seq={seq} />
        </div>

        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            onClick={handleClick}
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            남자
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
            onClick={handleClick}
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            여자
          </label>
        </div>

        <div className="btn">
          {name && gender !== 'gender' && seq > 0 ? (
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
