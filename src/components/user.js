import React,{useState} from "react";


// 구현 ----------------------------------------
// - 이름을 입력할 수 있는 input form을 구현합니다.
// - 성별을 선택할 수 있는 input form을 구현합니다.
// - 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 검사 시작 버튼이 비활성화 되어야 합니다.

// **`선택`** 

// - 이름을 올바르게 입력하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다.
// - 성별을 선택하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다.

const Home = ({history}) => {

    const [name,setName] = useState('')
    const [gender,setGender] = useState("gender")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(gender);

        // history를 통해 검사시작 화면으로 이동
        history.push('/example')
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

export default Home;
