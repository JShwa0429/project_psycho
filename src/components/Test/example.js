// import React, { useState } from "react";
// import Card from "./atom/card";
// import Move from "./atom/move";
// import Button from "react-bootstrap/Button";
// import { ProgressBar } from "react-bootstrap";

// const Example = ({ history, location }) => {
//   const [selected, setSelected] = useState(0);
//   const userProfile = location.userProfile;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(selected);
//     history.push({
//       pathname: "/test",
//       userProfile: userProfile,
//     });
//   };

//   const handleSelect = (value) => {
//     setSelected(value);
//     console.log(value);
//   };

//   const exampleQuestion = {};
//   exampleQuestion["question"] = `${
//     userProfile ? userProfile["name"] + "님" : ""
//   } 오늘 기분은 어떠신가요?`;
//   exampleQuestion["answer01"] = "나빠요";
//   exampleQuestion["answer02"] = "별로에요";
//   exampleQuestion["answer03"] = "괜찮아요";
//   exampleQuestion["answer04"] = "좋아요";
//   exampleQuestion["answerScore01"] = 1;
//   exampleQuestion["answerScore02"] = 2;
//   exampleQuestion["answerScore03"] = 3;
//   exampleQuestion["answerScore04"] = 4;
//   exampleQuestion["answerScore05"] = 5;
//   exampleQuestion["qitemNo"] = "예시";

//   return 0;
// };

// export default Example;
