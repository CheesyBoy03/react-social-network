import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts = (props) => {
    return(
        <div className={s.MyPosts}>
            <h2>My posts</h2>
            <div className={s.posts}>
                <textarea placeholder='Что у вас нового?'></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Posts name='Ivan Stepanov' message='How are you?' num_of_likes='20' num_of_reposts='2'/>
                <Posts name='Ivan Stepanov' message='Hello World!' num_of_likes='100' num_of_reposts='10'/>
            </div>
        </div>
        
    );
};

export default MyPosts;