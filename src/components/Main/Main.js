import React from 'react';

import styles from './Main.module.css';

import Filter from '../Filter/Filter';
import MainComponent from '../MainComponent/MainComponent';


class Main extends React.Component{


    render(){

        return (
            <div className={styles.main}>

                <div className={styles.filter}>
                    <Filter />
                </div>

                <div className={styles.main__content}>
                    <MainComponent />
                </div>
            </div>
        )
    }
}

export default Main;