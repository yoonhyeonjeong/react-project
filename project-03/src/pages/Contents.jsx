import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
const Contents = () => {
    const [contents, setContents] = useState([
        {
            id: 1,
            content: "컨텐츠 1 입니다",
        },
        {
            id: 2,
            content: "컨텐츠 2 입니다",
        },
        {
            id: 3,
            content: "컨텐츠 3 입니다",
        },
    ]);
    return (
        <div>
            <ul>
                {contents.map((item, idx) => (
                    <li key={idx}>
                        <NavLink to={`${item.id}?content=${item.content}`}>{item.content}</NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Contents;
