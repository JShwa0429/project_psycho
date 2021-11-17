import React,{useState} from "react";

const Example = ({history}) => {

    const [select,setSelect] = useState(null)

    const handleClick = (e) => {
        e.preventDefalut();
        history.push('/test/0')
    }

    return (<div>
                <form onSubmit={handleClick}>
                <div>
                    <p><input type="radio" name="select" id="1" onChange={(e)=>setSelect(e.target.id)}/>능력발휘</p>
                    <p><input type="radio" name="select" id="2" onChange={(e)=>setSelect(e.target.id)}/>자율성</p>
                </div>

                {select ?
                    <button type="submit">검사 시작</button>
                    :
                    <button type="submit" disabled>검사 시작</button>
                }
            </form>
    </div>)
}

export default Example;
