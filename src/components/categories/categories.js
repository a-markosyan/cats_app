import React, {useEffect} from 'react';
import css from "./categories.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesThunk} from "../../redux/actions/categories.actions";
import {useSearchParams} from "react-router-dom";

const Categories = () => {

    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.categoriesReducer)

    const [searchParams, setSearchParams] = useSearchParams()
    const category = +searchParams.get('category')

    useEffect(() => {
        dispatch(getCategoriesThunk())
    }, [])

    return (
        <aside className={css.categories}>
            <ul className={css.ul}>
                {
                    categories.map(({id, name}) => {
                        return <li key={id}
                                   className={`${category === id ? css.active : undefined} ${css.li}`}
                                   onClick={() => {
                                       setSearchParams({
                                           category: id
                                       })
                                   }
                                   }
                        >
                            {name}
                        </li>
                    })
                }
            </ul>
        </aside>
    );
};

export default Categories;