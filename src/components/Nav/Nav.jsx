import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={s.navbar}>
            <div className={s.active_link}><a href='/profile'>Profile</a></div>
            <div><a href='/message'>Messages</a></div>
            <div><a href='#'>News</a></div>
            <div><a href='#'>Music</a></div>
            <div className={s.settings}><a href='#'>Settings</a></div>
        </nav>
    );
};

export default Nav;