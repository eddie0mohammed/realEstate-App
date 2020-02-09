
import React from 'react';

import styles from './Sidebar.module.css';

import {withRouter} from 'react-router-dom';




class Sidebar extends React.Component{


    handleClick = (path) => {

        this.props.history.push(path);
        this.props.hideSidebar();

        //toggle button ui


    }

    render(){

        return (
            <div className={styles.sidebar} style={{ transform: `${this.props.show ? 'translateX(0)' : 'translateX(100%)'}`}}>

                <div className={styles.container}>

                    <div className={styles.link} onClick={() => this.handleClick('/')}>Home</div>
                    <div className={styles.link} onClick={() => this.handleClick('/about')}>About</div>
                    <div className={styles.link} onClick={() => this.handleClick('/listings')}>Listings</div>
                    <div className={styles.link} onClick={() => this.handleClick('/contact')}>Contact</div>

                    <button className={styles.btn}>Login / Register</button>
                </div>

            </div>
        )
    }
}

export default withRouter(Sidebar);