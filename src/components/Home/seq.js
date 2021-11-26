import React, { useState } from "react";
import { qestnrSeqList, qestnrSeqMap } from "../../static/js/data";
import Button from "react-bootstrap/Button";
// 심리검사변수를 정하는 버튼

const Seq = ({ onSelect, seq }) => {
  const seqList = qestnrSeqList;

  const [display, setDisplay] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };

  const handleClick = (e) => {
    setDisplay(!display);
    onSelect(e.target.value);
  };

  return (
    <div className="qestnr">
      {!display && (
        <Button onClick={handleOpen}>
          {seq > 0 ? qestnrSeqMap.get(seq) : "선택해주세요"}
        </Button>
      )}
      {display && (
        <ul>
          {seqList.map((value) => (
            <Button key={value[0]} onClick={handleClick} value={value[1]}>
              {value[0]}
            </Button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Seq;
