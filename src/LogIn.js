import './LogIn.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

function LogIn() {
    //변수 선언
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [dis, setDis] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    //쿠키 변수 
    const cookies = new Cookies();

    //함수 선언
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePw = (e) => {
        setPw(e.target.value);
    };

    // 쿠키 함수 
    const setCookie = (name, value, options) => {
        return cookies.set(name, value, { ...options });
    };

    const handleSubmit = async (id, pw, setDis, setError) => {
        try {
            setDis(true);

            const url = "http://xraidev.store:3003/api/v1/auth/login";
            const data = {
                "email": id,
                "password": pw
            };
            const config = {
                headers: {
                    "accept": 'application/json',
                    "Content-Type": 'application/json'
                }
            };

            const response = await axios.post(url, data, config);

            if (response.status === 200) {
                console.log(response);
                const accessToken = response.data.access_token;
                setCookie("accessToken", accessToken, { path: '/', maxAge: 3600 }) //쿠키 제한시간은 초 단위
                // const tokenType = response.data.token_type;
                // setCookie("tokenType", tokenType, { path: '/', maxAge: 3600 }) //쿠키 제한시간은 초 단위
                navigate("/mypage");
            }
            else {
                console.log(response.data);
                setError(true);
            }
        } catch (error) {
            console.log('알 수 없는 에러');
            setError(true);
        } finally {
            setDis(false);
        }

    };

    return (
        <div className='outBox'>
            <div className='inBox'>
                <div className='in'>
                    <span>아이디(이메일)</span>
                    <input type="text" placeholder="아이디(이메일) 입력" value={id} onChange={(e) => onChangeId(e)}></input>
                </div>
                <div className='in'>
                    <span>비밀번호</span>
                    <input type="password" placeholder="비밀번호 입력" value={pw} onChange={(e) => onChangePw(e)}></input>
                </div>
            </div>
            <button
                disabled={dis}
                onClick={() => handleSubmit(id, pw, setDis, setError)}>
                로그인</button>
            {error ? <p>아이디 또는 비밀번호를 다시 확인해주세요.</p> : <></>}
        </div>
    );
}

export default LogIn;