import React,{useState} from "react";

const User = ({history}) => {

    const [name,setName] = useState('')
    const [gender,setGender] = useState("gender")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(gender);
        // history를 통해 검사시작 화면으로 이동
        //history.push('/api')
    }

    const handleChange = (e) => {
        setGender(e.target.id)
    }

    // 버튼 활성화

    return (<div> 
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value);}}></input>
            남자<input id="male" type="radio" name="gender" value="male" onChange={handleChange}></input>
            여자<input id="female" type="radio" name="gender" value="female" onChange={handleChange}></input>
            { name && (gender !== "gender") ?
                <button type="submit">검사 시작</button>
                :
                <button type="submit" disabled>검사 시작</button>
            }
        </form>
    </div>)
}

export default User
