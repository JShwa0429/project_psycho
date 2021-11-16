import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Api = () => {
    const [result,setResult] = useState("")

    useEffect(()=>{
        setResult(()=>{
            console.log(result)
            getQuestion()
        })
    },[])

    const getQuestion = async () => {
        let questions = null
        const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=a4c80b03ef9a8b8df73cf7b36775257c&q=10`
        await axios.get(url)
            .then(res=> {
                questions = res.data["RESULT"][0]["question"];
                console.log(res.data)
                console.log("RES:" + questions);
            }
                )
            .catch(err=>questions = err)
        return questions
    }

    return (
            <div>
                <h4>GET 요청해보기</h4>
                <div>
                    {console.log(result)}
                    {result}
                </div>
            </div>
        )
}

export default Api;
