export const apikey = "a4c80b03ef9a8b8df73cf7b36775257c";
export const Seq = 6;

export const qestnrSeqMap = new Map([
  ["4", "직업흥미검사(K) – 중학생"],
  ["5", "직업흥미검사(K) – 고등학생"],
  ["6", "직업가치관검사 - 일반,대학생"],
  ["8", "진로개발준비도검사"],
  ["9", "이공계전공적합도검사"],
  ["10", "주요능력효능감검사"],
  ["17", "직업흥미검사(H) – 중학생"],
  ["18", "직업흥미검사(H) – 고등학생"],
  ["19", "진로흥미탐색"],
  ["20", "직업적성검사 - 중학생"],
  ["21", "직업적성검사 - 고등학생"],
  ["22", "진로성숙도검사 - 중학생"],
  ["23", "진로성숙도검사 - 고등학생"],
  ["24", "직업가치관검사 - 중학생"],
  ["25", "직업가치관검사 - 고등학생"],
  ["26", "진로개발역량검사 - 중학생"],
  ["27", "진로개발역량검사 - 고등학생"],
]);

// export const qestnrSeqDict = {
//   4: ["직업흥미검사(K) – 중학생",100206,'A'],
//   5: ["직업흥미검사(K) – 고등학생",100207,'A'],
//   6: ["직업가치관검사 - 일반,대학생",100208,''],
//   8: ["진로개발준비도검사",100209,''],
//   9: ["이공계전공적합도검사",''],
//   10: ["주요능력효능감검사",'A'],
//   17: ["직업흥미검사(H) – 중학생",'A'],
//   18: ["직업흥미검사(H) – 고등학생",'A'],
//   19: ["진로흥미탐색"],
//   20: ["직업적성검사 - 중학생"],
//   21: ["직업적성검사 - 고등학생"],
//   22: ["진로성숙도검사 - 중학생"],
//   23: ["진로성숙도검사 - 고등학생"],
//   24: ["직업가치관검사 - 중학생"],
//   25: ["직업가치관검사 - 고등학생"],
//   26: ["진로개발역량검사 - 중학생"],
//   27: ["진로개발역량검사 - 고등학생"],
// };

export const qestnrSeqList = [];
qestnrSeqMap.forEach((key, value) => {
  qestnrSeqList.push([key, value]);
});

export const trgetSe = new Map();
trgetSe.set("초등학생", "100205");
trgetSe.set("중학생", "100206");
trgetSe.set("고등학생", "100207");
trgetSe.set("대학생", "100208");
trgetSe.set("일반", "100209");
trgetSe.set("일반(학부모)", "100210");
trgetSe.set("교사", "100214");
trgetSe.set("교사(상담)", "100215");

export const genderList = {
  100205: "남자",
  100206: "여자",
};

export const educationList = [
  "중졸이하",
  "고졸",
  "전문대졸",
  "대졸",
  "대학원졸",
];

export const majorList = [
  "계열무관",
  "인문",
  "사회",
  "교육",
  "공학",
  "자연",
  "의학",
  "예체능",
];

export const ValueList = [
  "능력발휘",
  "자율성",
  "보수",
  "안정성",
  "사회적 인정",
  "사회봉사",
  "자기계발",
  "창의성",
];
