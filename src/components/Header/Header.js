
import React from 'react';

import styles from './Header.module.css';

import {NavLink} from 'react-router-dom';



class Header extends React.Component{


    render(){

        return (
            <div className={styles.header}>

                <div className={styles.header__logo}>LOGO</div>

                <div className={styles.header__links}>
                    <NavLink to='/' exact className={styles.header__link}>Home</NavLink>
                    <NavLink to='/about' exact className={styles.header__link}>About Us</NavLink>
                    <NavLink to="/listings" exact className={styles.header__link}>Listings</NavLink>
                    <NavLink to="/contact" exact className={styles.header__link}>Contact</NavLink>

                    <button onClick={this.props.showModal} className={`${styles.header__link} ${styles.header__register}`}>Login / Register</button>

                </div>
            </div>
        )
    }
}

export default Header;