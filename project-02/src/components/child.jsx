import React from "react";

const Child = props => {
    return (
        <div style={{border: "1px solid blue", padding: "10px"}}>
            <p>이름{props.name}</p>
            <p>나이{props.age}</p>
            <p>{props.isMarried ? <span>기혼</span> : <span>미혼</span>}</p>
        </div>
    );
};

export default Child;
