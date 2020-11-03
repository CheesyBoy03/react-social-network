import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={s.content}>
            <img className={s.headerImg} src="https://specials-images.forbesimg.com/imageserve/5ed424a52259c9000769e94c/960x0.jpg?cropX1=120&cropX2=1267&cropY1=96&cropY2=668"/>
            <div className={`${s.content} ${s.text}`}>
                <MyPosts />
            </div>
        </div>
    );
};

export default Profile;