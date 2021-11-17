import React,{useEffect, useState, useCallback} from 'react';
import axios from 'axios';



const Api = () => {
    const [questions,setQuestions] = useState([])
    const key = 'a4c80b03ef9a8b8df73cf7b36775257c'
    


    const getQuestion = useCallback(async () => {
        let result = []
        const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=5`
        await axios.get(url)
            .then(res=> {
                result = res.data["RESULT"];
                console.log(result)
                setQuestions(result)
            })
            .catch(err=> result = err)
    },[]);

    useEffect(()=>{
        getQuestion();
    },[getQuestion]);

    return (
            <div>
                <h4>GET 요청해보기</h4>
                {questions.map((question)=>{return (<p>{question['question']}</p>)})}
            </div>
        )
}

export default Api;
