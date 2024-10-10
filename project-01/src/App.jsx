import "./App.css";
import {useState} from "react";

function App() {
    // 상태값 설정
    const [name, setName] = useState(""); // 이름
    const [age, setAge] = useState(""); // 나이
    const [user, setUser] = useState([]);

    // 입력 필드값 업데이트
    const handleNameChange = e => setName(e.target.value);
    const handleAgeChange = e => setAge(e.target.value);

    // 사용자 추가 함수
    const addItem = () => {
        if (!name || !age) {
            alert("값을 입력해주세용");
            return;
        }
        const newUser = {name, age};
        setUser([...user, newUser]);
        setName("");
        setAge("");
    };
    return (
        <div className="user-box">
            <img
                src="/src/assets/moka.jpeg"
                width={300}
            />

            <h1>사용자 정보 입력</h1>
            <ul>
                <li>
                    <input
                        label="이름"
                        placeholder="이름을 입력하세요"
                        value={name}
                        onChange={handleNameChange}
                    />
                </li>
                <li>
                    <input
                        label="나이"
                        placeholder="나이를 입력하세요"
                        value={age}
                        onChange={handleAgeChange}
                    />
                </li>
            </ul>

            <button onClick={() => addItem()}>사용자 추가</button>

            <ul>
                {user.map((user, index) => (
                    <li key={index}>
                        이름:{user.name}, 나이:{user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
