import axios from "axios";

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategoriesThunk = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/categories`)
        dispatch({
            type: GET_CATEGORIES,
            payload: response.data
        })
    } catch (e) {
        console.log(e, "error")
    }

}

