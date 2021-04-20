import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {

    return (
        <div className={s.item}>
            <img src="data:image/jpeg;base64,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" alt=""/>
            {props.message}
            <div>
                <span>likes {props.like}</span>
            </div>
        </div>
    );
};

export default Posts;