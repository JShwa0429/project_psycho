import { useMemo } from "react";
import { ValueList } from "../../etc/data";
const Chart = ({ data }) => {
  const maxScore = useMemo(() => {
    if (Array.isArray(data)) {
      return Math.max(...data.map(({ score }) => score));
    }
    return 1;
  }, [data]);

  const rows = useMemo(() => {
    if (Array.isArray(data)) {
      const row = (
        <tr>
          {data.map(() => (
            <td>&nbsp;</td>
          ))}
        </tr>
      );
      const result = new Array(10).fill(row);
      return result;
    }
    return [];
  }, [data]);
  return (
    <div
      style={{
        position: "relative",
        width: "auto",
        height: "auto",
      }}
    >
      <table>{rows}</table>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          bottom: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {Array.isArray(data) &&
          data.map((value) => {
            return (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div
                  className="bg-primary"
                  style={{
                    position: "relative",
                    width: "80%",
                    height: `${(value?.score / maxScore) * 80}%`,
                  }}
                >
                  <div
                    className="text-secondary"
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      bottom: "100%",
                      width: "100%",
                    }}
                  >
                    {value?.score}
                  </div>
                </div>
                <div
                  className="text-secondary"
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "100%",
                    width: "auto",
                    fontSize: "1em",
                  }}
                >
                  {ValueList[value?.seq - 1]}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Chart;
