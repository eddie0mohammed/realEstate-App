import React from 'react';

import styles from './Filter.module.css';


class Filter extends React.Component{


    render(){

        return (
            <div className={styles.filter__container}>


                <div className={styles.first}>
                    
                    <h4 className={styles.first__header}>Filter</h4>

                    <select name="neighbourhood" className={styles.first__neighbourhood}>
                        <option value="neighbourhood" default>Neighbourhood</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <select name="houseType" className={styles.first__neighbourhood}>
                        <option value="Type of House" default>Type of house</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <select name="interior" className={styles.first__neighbourhood}>
                        <option value="interior" default>Interior</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>


                </div>


                <div className={styles.second}>
                    
                    <h4 className={styles.second__header}>Price</h4>  
                    <input type="range" className={styles.second__input}/>
                    <div className={styles.number__container}>
                        <p className={styles.price__start}>$0</p>
                        <p className={styles.price__end}>$1000</p>
                    </div>

                    <h4 className={styles.second__header}>Floor Space</h4>
                    <input type="range" className={styles.second__input}/>
                    <div className={styles.number__container}>
                        <p className={styles.price__start}>0 sqm</p>
                        <p className={styles.price__end}>1000 sqm</p>
                    </div>

                    <h4 className={styles.second__header}>Radius</h4>
                    <input type="range" className={styles.second__input}/>
                    <div className={styles.number__container}>
                        <p className={styles.price__start}>0 Km</p>
                        <p className={styles.price__end}>1000 Km</p>
                    </div>
                </div>


                <div className={styles.third}>

                    <h4 className={styles.third__header}>Facilities</h4>

                    <div className={styles.elem__container}>
                        <label htmlFor="elevator" className={styles.label}>Elevalor</label>
                        <input type="checkbox" name="elevator" className={styles.checkbox}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="storage" className={styles.label}>Storage</label>
                        <input type="checkbox" name="storage" className={styles.checkbox}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="bathTub" className={styles.label}>Bath tub</label>
                        <input type="checkbox" name="bathTub" className={styles.checkbox}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="separateShower" className={styles.label}>Separate shower</label>
                        <input type="checkbox" name="separateShower" className={styles.checkbox}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="fireplace" className={styles.label}>Fireplace</label>
                        <input type="checkbox" name="elevator" className={styles.checkbox}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="swimmingPool" className={styles.label}>Swimming pool</label>
                        <input type="checkbox" name="swimmingPool" className={styles.checkbox}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;