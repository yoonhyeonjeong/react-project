import React from "react";
import {useLocation, useParams} from "react-router-dom";

const User = () => {
    const {userId} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");

    return (
        <div>
            유저 id : {userId}
            유저 이름 : {name}
        </div>
    );
};

export default User;
