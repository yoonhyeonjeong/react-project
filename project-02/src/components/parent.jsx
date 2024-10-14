import React, {useState} from "react";
import Child from "./child";

const Parent = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isMarried, setIsMarried] = useState(false);
    const [form, setForm] = useState([]);
    const handleAdd = () => {
        setForm([
            ...form,
            {
                name: name,
                age: age,
                isMarried: isMarried,
            },
        ]);
    };
    return (
        <div style={{border: "1px solid green", padding: "10px"}}>
            <p>이름</p>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>나이</p>
            <input
                type="number"
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <p>결혼유무</p>
            <input
                type="checkbox"
                value={isMarried}
                onChange={e => setIsMarried(e.target.checked)}
            />
            <button
                onClick={() => {
                    handleAdd();
                }}
            >
                추가
            </button>
            {form.map((item, index) => (
                <Child
                    key={index}
                    age={item.age}
                    name={item.name}
                    isMarried={item.isMarried}
                />
            ))}
        </div>
    );
};

export default Parent;
