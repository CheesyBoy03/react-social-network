import React from 'react';
import s from './Posts.module.css'

const Posts = (props) => {
    return(
        <div className={s.block}>
            <div className={s.item}>
                <div className={s.ava_and_name}>
                    <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"/>
                    <div className={s.username}>
                        <a href="">{ props.name }</a>
                    </div>
                </div>
                <div className={s.message}>
                    {props.message}
                </div>  
            </div>
            <div className={s.buttons}>
                <span className={s.like}><img src='https://www.iconsdb.com/icons/preview/white/favorite-3-xxl.png' /> { props.num_of_likes }</span>
                <span className={s.repost}>Repost { props.num_of_reposts }</span> 
            </div>
            
        </div>
        
    );
};

export default Posts;