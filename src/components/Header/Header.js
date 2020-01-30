
import React from 'react';

import styles from './Header.module.css';


class Header extends React.Component{


    render(){

        return (
            <div className={styles.header}>

                <div className={styles.header__logo}>LOGO</div>

                <div className={styles.header__links}>
                    <p className={styles.header__link}>Create Ads</p>
                    <p className={styles.header__link}>About Us</p>
                    <p className={styles.header__link}>Log In</p>

                    <p className={`${styles.header__link} ${styles.header__register}`}>Register</p>

                </div>
            </div>
        )
    }
}

export default Header;