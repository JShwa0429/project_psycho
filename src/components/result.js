import React from "react"

const Result = ({history}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        history.replace('/')
    }

   return (
       <div>
           <h1>직업가치관검사 결과표</h1>
           <p>어쩌구 저쩌구</p>
           <table>
             <tr>
                 <td>이름</td>
                 <td>성별</td>
                 <td>검사일</td>
             </tr>
             <tr>
                 <td>엘리스</td>
                 <td>남</td>
                 <td>검사일</td>
             </tr>
           </table>
           <form onSubmit={handleSubmit}>
               
               



               <button type="submit">다시 검사하기</button>
           </form>
       </div>

   )
}

export default Result;