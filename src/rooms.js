import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Rooms = () => {
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState();
    const [chatRooms, setChatRooms] = useState([{
        roomId: '',
        roomName: ''
    }]);

    const onChange = (e) => {
        setRoomName(e.target.value);
    }

    const onReset = () => {
        setRoomName('');
    }

    const findRooms = () => {

        axios.get('/api/chat/rooms')
            .then((response) => {
                setChatRooms(response.data);
            })

        onReset();
    }

    const createRoom = () => {
        const params = new URLSearchParams();
        params.append("name", roomName);

        if (roomName === '') {
            alert("방 제목을 입력해 주세요");
            return;
        }

        axios.post('/api/chat/room', params)
            .then((response) => {
                alert(response.data.roomName + "방 개설에 성공하였습니다.");
                onReset();
                findRooms();
            })
    }

    const enterRoom = (index) => {
        const sender = prompt("대화명을 입력해 주세요.");
        if(sender !== ''){
            localStorage.setItem('wschat.sender', sender);
            localStorage.setItem('wschat.roomName', chatRooms[index].roomName);
            navigate('/chat/room/' + chatRooms[index].roomId);

        }
    }

    // findRooms();

    return (
        <div style={{paddingLeft: "10px"}}>
            <div>
                <h3>채팅방 리스트</h3>
            </div>
            <div>
                <div>
                    <label htmlFor='room_name'>방 제목: </label>
                    <input id='room_name' name='room_name' onChange={onChange} value={roomName}/>
                    <button style={{marginLeft: "10px"}} onClick={createRoom}>채팅방 개설</button>
                </div>
                <table>
                    {chatRooms && chatRooms.map((list, index) => {
                        return (
                        <tr key={index} onClick={() => enterRoom(index)}>
                            <td>
                                {list.roomId}
                            </td>
                            <td>
                                {list.roomName}
                            </td>
                        </tr>
                        )})}
                </table>
            </div>
        </div>
    );
}

export default Rooms