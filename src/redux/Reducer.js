import { FETCH_USER_SUCCESS } from "./Action";
import { UPDATE_EMAIL, UPDATE_NAME, UPDATE_PHONE, UPDATE_ADDRESS_1, UPDATE_ADDRESS_2, UPDATE_PROFILE_IMAGE, UPDATE_CREATED_AT } from "./Action";

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
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                phone: action.payload.phone,
                address_1: action.payload.address_1,
                address_2: action.payload.address_2,
                profile_image: action.payload.profile_image,
                created_at: action.payload.created_at,
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
                profileImage: action.payload,
            };
        case UPDATE_CREATED_AT:
            return {
                ...state,
                createdAt: action.payload,
            };
        default:
            return state;
    }
}

export default authReducer;