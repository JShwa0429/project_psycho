import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const Completed = ({ onMove }) => {
  const history = useHistory();
  return (
    <div>
      <div>
        <h3>검사가 완료되었습니다.</h3>
        <p>
          검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
          생각하는 지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해
          생각해 볼 기회를 제공합니다.
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            history.push("/result");
          }}
        >
          결과 보기
        </button>
      </div>
      <div className="text-center justify-content">
        <Button id="prev" onClick={onMove}>
          이전으로
        </Button>
      </div>
    </div>
  );
};

export default Completed;
