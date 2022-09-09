import axios from "axios";

export const GET_IMAGES = 'GET_IMAGES'
export const CHANGE_LOADING = 'CHANGE_LOADING'
export const RESET_PAGE = 'RESET_PAGE'

export const getImagesThunk = ({page, category}) => async (dispatch) => {
    dispatch(changeLoadingAC(true))
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`)
        dispatch({
            type: GET_IMAGES,
            payload: response.data
        })
    } catch (e) {
        console.log(e, "error")
    } finally {
        dispatch(changeLoadingAC(false))
    }
}

export const changeLoadingAC = (bool) => {
    return {
        type: CHANGE_LOADING,
        payload: bool
    }
}

export const resetAC = () => {
    return {
        type: RESET_PAGE
    }
}