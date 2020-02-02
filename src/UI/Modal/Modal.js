import React from 'react';

import styles from './Modal.module.css';


class Modal extends React.Component{

    render(){

        return (
            <div className={styles.modal} style={{display: `${this.props.show ? 'block' : 'none'}`}}>
                {this.props.children}
            </div>
        )
    }
    
}

export default Modal;