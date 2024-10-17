import {Outlet, useNavigate} from "react-router-dom";
import "./Layout.css";
const Layout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <ul className="ul">
                    <li>
                        <a
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            홈
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                navigate("/contents");
                            }}
                        >
                            콘텐츠
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            로그인
                        </a>
                    </li>
                </ul>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
