import React from 'react';

import styles from './MainComponent.module.css';


class MainComponent extends React.Component{


    render(){

        return (
            <div className={styles.mainComponent}>

                <div className={styles.row}>

                    <div className={styles.left}>
                        <input type="text" placeholder="Short stay" className={styles.left__input}/>

                        <p className={styles.left__results}><span className={styles.left__number}>3298</span> results found</p>
                    </div>

                    <div className={styles.right}>

                        <select name="city" className={styles.right__city}>
                            <option value="City" className={styles.option}>City</option>
                            <option value="City" className={styles.option}>Roterdam</option>
                            <option value="City" className={styles.option}>Amsterdam</option>
                            <option value="City" className={styles.option}>Frankfurt</option>
                        </select>

                        <div className={styles.right__second}>
                            <select name="order" className={styles.right__order}>
                                <option value="ascending" className={styles.orderType}>Date Ascending</option>
                                <option value="ascending" className={styles.orderType}>Date Descending</option>
                            </select>
                            <ion-icon name="reorder" ></ion-icon>
                            <ion-icon name="apps" ></ion-icon>

                        </div>
                    </div>
                </div>


                <div className={styles.mainContent}>

                    <div className={styles.card}>

                        <div className={styles.card__top}>

                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>Marina Crevation</p>
                                        <p className={styles.date}>Posted on 05/02/17</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> 288 sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> unfurnished</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> 288 sqm</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>Apartment Havenstraat</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>$700 / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>Rotterdam</p>
                            </div>
                        </div>

                    </div>


                    <div className={styles.card}>

                        <div className={styles.card__top}>

                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>Marina Crevation</p>
                                        <p className={styles.date}>Posted on 05/02/17</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> 288 sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> unfurnished</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> 288 sqm</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>Apartment Havenstraat</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>$700 / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>Rotterdam</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.card}>

                        <div className={styles.card__top}>

                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>Marina Crevation</p>
                                        <p className={styles.date}>Posted on 05/02/17</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> 288 sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> unfurnished</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> 288 sqm</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>Apartment Havenstraat</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>$700 / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>Rotterdam</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.card}>

                        <div className={styles.card__top}>

                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>Marina Crevation</p>
                                        <p className={styles.date}>Posted on 05/02/17</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> 288 sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> unfurnished</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> 288 sqm</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>Apartment Havenstraat</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>$700 / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>Rotterdam</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.card}>

                        <div className={styles.card__top}>

                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>Marina Crevation</p>
                                        <p className={styles.date}>Posted on 05/02/17</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> 288 sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> unfurnished</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> 288 sqm</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>Apartment Havenstraat</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>$700 / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>Rotterdam</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.card}>

                        <div className={styles.card__top}>

                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>Marina Crevation</p>
                                        <p className={styles.date}>Posted on 05/02/17</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> 288 sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> unfurnished</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> 288 sqm</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>Apartment Havenstraat</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>$700 / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>Rotterdam</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={styles.paginationArea}>
                    <div className={styles.bar}>
                        <p className={styles.prev}>prev</p>

                        <div className={styles.bar__numbers}>
                            <p className={`${styles.number} ${styles.active}`}>1</p>
                            <p className={styles.number}>2</p>
                            <p className={styles.number}>3</p>
                            <p className={styles.number}>4</p>
                            <p className={styles.number}>5</p>
                        </div>

                        <p className={styles.next}>next</p>
                    
                    </div>

                </div>

            </div>
        )
    }
}

export default MainComponent;