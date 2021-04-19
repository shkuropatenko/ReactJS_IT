import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Posts message='Hi, how are you?' like='15' />
                <Posts message="It's my first post" like='20' />
            </div>
        </div>
    );
};

export default MyPosts;