import React, { useState } from 'react';
import { qestnrSeqList, qestnrSeqMap } from '../../static/js/data';
import Button from 'react-bootstrap/Button';
// 심리검사변수를 정하는 버튼

const Qestnr = ({ onSelect, seq }) => {
  const [seqList, setSeqList] = useState(qestnrSeqList);

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
    <div>
      <Button onClick={handleOpen}>
        {seq > 0 ? qestnrSeqMap.get(seq) : '선택해주세요'}
      </Button>
      {display && (
        <ul>
          {seqList.map((value) => (
            <Button onClick={handleClick} value={value[1]}>
              {value[0]}
            </Button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Qestnr;
