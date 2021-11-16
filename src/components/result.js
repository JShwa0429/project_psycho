import React from "react"

const Result = ({history}) => {
   

    const handleSubmit = (e) => {
        e.preventDefault();
        history.replace('/')
    }

   return (
       <div>
           <form onSubmit={handleSubmit}>
               <button type="submit">다시하기</button>
           </form>
       </div>

   )
}

export default Result;