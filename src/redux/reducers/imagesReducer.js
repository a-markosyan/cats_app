import {CHANGE_LOADING, GET_IMAGES, RESET_PAGE} from "../actions/images.actions";

const initialState = {
    images: [],
    loading: false
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.payload]
            }
        case CHANGE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case RESET_PAGE:
            return {
                images: []
            }
        default:
            return state
    }
}

export default imagesReducer