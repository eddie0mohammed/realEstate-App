
import React from 'react';

import styles from './Header.module.css';

import {NavLink} from 'react-router-dom';



class Header extends React.Component{


    handleClick = (e) => {
        // let elem;
        // if (e.target.classList.contains('bar')){
        //     elem = e.target.parentElement;
        // }else{
        //     elem = e.target;
        // }

        

        this.props.toggle();
        // console.log(elem);

        // if (elem.classList.contains('barActive')){
        // if (this.props.showSidebar){
        //     elem.classList.add('barActive');
            
        // }else{
        //     elem.classList.remove('barActive');
        // }
    }

    render(){

        let showHamburger = '';
        if (this.props.showSidebar){
            showHamburger = 'barActive'
        }

        return (
            <div className={styles.header}>

                <div className={styles.header__logo}><ion-icon name="business"></ion-icon></div>

                <div className={styles.header__links}>
                    <NavLink to='/' exact className={styles.header__link}>Home</NavLink>
                    <NavLink to='/about' exact className={styles.header__link}>About</NavLink>
                    <NavLink to="/listings" exact className={styles.header__link}>Listings</NavLink>
                    <NavLink to="/contact" exact className={styles.header__link}>Contact</NavLink>

                    <button onClick={this.props.showModal} className={`${styles.header__link} ${styles.header__register}`}>Login / Register</button>

                </div>
                
                <div className={`hamburger__container ${styles.ham__container} ${showHamburger}`} onClick={this.handleClick}>
                    <span className='bar'>&nbsp;</span>
                    <span className='bar'>&nbsp;</span>
                    <span className='bar'>&nbsp;</span>
                </div>
            </div>
        )
    }
}

export default Header;