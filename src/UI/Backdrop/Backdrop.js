import React from 'react';

import styles from './Backdrop.module.css';


function Backdrop(props){

    return (
        <div style={{display: `${props.show ? 'block' : 'none'}`}} className={styles.backdrop} onClick={props.hide}></div>
    )
}

export default Backdrop;