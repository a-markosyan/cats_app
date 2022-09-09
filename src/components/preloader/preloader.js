import React from 'react';
import css from "./preloader.module.css"
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const Preloader = () => {
    return (
        <div className={css.preloader}>
            <AiOutlineLoading3Quarters/>
        </div>
    );
};

export default Preloader;