// 정보 가져와서 저장하기 
import { Cookies } from 'react-cookie';
import axios from 'axios';

//쿠키 변수
const cookies = new Cookies();

//쿠키 함수
const getCookie = (name) => {
    return cookies.get(name);
}
const accessCookie = getCookie('accessToken');
// const typeCookie = getCookie('tokenType');

const url = 'http://xraidev.store:3003/api/v1/auth/me';
const config = {
    headers: {
        "accept": 'application/json',
        "Authorization": `Bearer ${accessCookie}`
    }
};

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const UPDATE_EMAIL = "UPDATE_EMAIL"
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_PHONE = "UPDATE_PHONE";
export const UPDATE_ADDRESS_1 = "UPDATE_ADDRESS_1";
export const UPDATE_ADDRESS_2 = "UPDATE_ADDRESS_2";
export const UPDATE_PROFILE_IMAGE = "UPDATE_PROFILE_IMAGE";

export const fetchUserData = () => async (dispatch) => {
    try {
        const response = await axios.get(url, config);

        // const data = [

        // ]
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.error(error);
    }
};

export const updateEmail = (email) => ({
    type: UPDATE_EMAIL,
    payload: email,
});

export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name,
});

export const updatePhone = (phone) => ({
    type: UPDATE_PHONE,
    payload: phone,
});

export const updateAddress1 = (address_1) => ({
    type: UPDATE_ADDRESS_1,
    payload: address_1,
});

export const updateAddress2 = (address_2) => ({
    type: UPDATE_ADDRESS_2,
    payload: address_2,
});

export const updateProfileImage = (profile_image) => ({
    type: UPDATE_PROFILE_IMAGE,
    payload: profile_image,
});