import React, {useEffect, useState} from 'react';
import css from "./images.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getImagesThunk, resetAC} from "../../redux/actions/images.actions";
import {useSearchParams} from "react-router-dom";
import Preloader from "../preloader/preloader";

const Images = () => {

    const dispatch = useDispatch()
    const {images, loading} = useSelector(state => state.imagesReducer)

    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getImagesThunk({category, page}))
    }, [category, page])

    useEffect(() => {
        dispatch(resetAC())
    }, [category])

    return (
        <div className={css.container}>
            {!images.length ?
                <p>Select Category</p>
                :
                <div className={css.images}>
                    <div>
                        {images.map(({id, url}) => {
                            return <img src={url} key={Math.random()} alt="image" width="200px" height="200px"/>
                        })}
                    </div>
                    {loading && <Preloader/>}
                    <button className={css.button}
                            onClick={() => setPage(page + 1)}>
                        More
                    </button>
                </div>
            }
        </div>
    );
};

export default Images;