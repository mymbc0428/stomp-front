import React, {useState} from "react";

const Roomdetail = () => {

    const roomName = localStorage.getItem('wschat.roomName');
    const sender = localStorage.getItem('wschat.sender');

    const [content, setContent] = useState();

    const onChange = (e) => {
        setContent(e.target.value);
    }

    const reset = () => {
        setContent('');
    }

    return (
        <div>
            <div>
                <h2>{roomName}</h2>
            </div>
            <div style={{padding: "10px"}}>
                <label htmlFor='content'>내용</label>
                <input style={{marginLeft: "10px", width:"500px"}} id='content' onChange={onChange} value={content}/>
            </div>
        </div>
    );
}

export default Roomdetail