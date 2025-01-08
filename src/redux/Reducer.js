import { FETCH_USER_SUCCESS } from "./Action";
import { UPDATE_EMAIL, UPDATE_NAME, UPDATE_PHONE, UPDATE_ADDRESS_1, UPDATE_ADDRESS_2, UPDATE_PROFILE_IMAGE } from "./Action";

export const initialState = {
    email: "",
    name: "",
    phone: "",
    address_1: "",
    address_2: "",
    profile_image: "",
    created_at: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            const date = new Date(action.payload.created_at);
            console.log(date);
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                phone: action.payload.phone,
                address_1: action.payload.address_1,
                address_2: action.payload.address_2,
                profile_image: action.payload.profile_image ? `http://xraidev.store:3003${action.payload.profile_image}` : 'src/redux/default-profile.png', // 기본 이미지 함수 
                created_at: `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`,
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case UPDATE_PHONE:
            return {
                ...state,
                phone: action.payload,
            };
        case UPDATE_ADDRESS_1:
            return {
                ...state,
                address_1: action.payload,
            };
        case UPDATE_ADDRESS_2:
            return {
                ...state,
                address_2: action.payload,
            };
        case UPDATE_PROFILE_IMAGE:
            return {
                ...state,
                profile_image: action.payload,
            };
        default:
            return state;
    }
}

export default authReducer;