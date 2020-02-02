
import React from 'react';

import styles from './NotFound.module.css';

import {Redirect} from 'react-router-dom';


class NotFound extends React.Component{


    render(){

        return (
            <div className={styles.notFound}>
                Not Found

                <Redirect to="/" />
            </div>
        )
    }
}

export default NotFound;