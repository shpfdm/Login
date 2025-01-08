import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/Action";
import { Link } from "react-router-dom";
import { initialState } from "./redux/Reducer";

function MyPage() {
    const dispatch = useDispatch();
    const all = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(all)
    }, [all]);

    useEffect(() => {
        if (JSON.stringify(all) === JSON.stringify(initialState)) {
            dispatch(fetchUserData());
        }
    }, [dispatch, all]);

    return (
        <div className="outBox">
            <div>
                <span>이름</span>
                <div className="inBox">{all.name}</div>
            </div>
            <div>
                <span>프로필 이미지</span>
                <div className="inBox"><img src={`http://xraidev.store:3003${all.profile_image}`} alt="프로필 이미지"></img></div>
            </div>
            <div>
                <span>전화번호</span>
                <div className="inBox">{all.phone}</div>
            </div>
            <div>
                <span>이메일(아이디)</span>
                <div className="inBox">{all.email}</div>
            </div>
            <div>
                <span>주소</span>
                <div className="inBox">{all.address_1}</div>
            </div>
            <div>
                <span>상세주소</span>
                <div className="inBox">{all.address_2}</div>
            </div>
            <div>
                <span>계정 생성일</span>
                <div className="inBox">{all.created_at}</div>
            </div>
            <Link to="/mypage/update"><button>수정하기</button></Link>
            <button onClick={() => dispatch(fetchUserData())}>리셋</button>
        </div>
    );
}

export default MyPage;