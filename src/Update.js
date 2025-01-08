import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    updateEmail,
    updateName,
    updatePhone,
    updateAddress1,
    updateAddress2,
    updateProfileImage,
} from "./redux/Action";

function UpDate() {
    const dispatch = useDispatch();
    const all = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(all)
    }, [all]);

    const [email, setEmail] = useState(all.email);
    const [name, setName] = useState(all.name);
    const [phone, setPhone] = useState(all.phone);
    const [address_1, setAddress1] = useState(all.address_1);
    const [address_2, setAddress2] = useState(all.address_2);
    const [profileImage, setProfileImage] = useState(all.profile_image);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleAddress1Change = (e) => setAddress1(e.target.value);
    const handleAddress2Change = (e) => setAddress2(e.target.value);
    const handleProfileImageChange = (e) => setProfileImage(e.target.value);

    return (
        <div className="outBox">
            <div>
                <span>이름</span>
                <input type="text" value={name}
                    onChange={handleNameChange}></input>
                <button onClick={() => {
                    dispatch(updateName(name))
                    console.log(all.name);
                }}>저장하기</button>
            </div>
            <div>
                <span>프로필 이미지</span>
                <div className="inBox"><img src={profileImage} alt="프로필 이미지"></img></div>
                <button onClick={() => dispatch(updateProfileImage(email))}>저장하기</button>
            </div>
            <div>
                <span>전화번호</span>
                <input type="text" value={phone}
                    onChange={handlePhoneChange}></input>
                <button onClick={() => dispatch(updatePhone(phone))}>저장하기</button>
            </div>
            <div>
                <span>이메일(아이디)</span>
                <input type="text" value={email}
                    onChange={handleEmailChange}></input>
                <button onClick={() => dispatch(updateEmail(email))}>저장하기</button>
            </div>
            <div>
                <span>주소</span>
                <input type="text" value={address_1}
                    onChange={handleAddress1Change}></input>
                <button onClick={() => dispatch(updateAddress1(address_1))}>저장하기</button>
            </div>
            <div>
                <span>상세주소</span>
                <input type="text" value={address_2}
                    onChange={handleAddress2Change}></input>
                <button onClick={() => { dispatch(updateAddress2(address_2)); console.log(address_2) }}>저장하기</button>
            </div>
            <div>
                <span>계정 생성일</span>
                <input type="text" value={all.created_at} readOnly></input>
            </div>
            <Link to="/mypage"><button>돌아가기</button></Link>
        </div>
    );
}

export default UpDate;