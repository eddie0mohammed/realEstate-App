import React from 'react';

import styles from './MainComponent.module.css';


class MainComponent extends React.Component{


    renderCards = () => {
        const {data} = this.props;

        return data.map((elem, i) => {
            return (
                <div key={i} className={styles.card}>
                        
                        <div className={styles.card__top} style={{backgroundImage: `url(${elem.placeImg})`}}>
                            <div className={styles.overlay}></div>
                            <div className={styles.content}>

                                <div className={styles.content__row}>
                                    
                                    <div className={styles.content__img} style={{backgroundImage: `url(${elem.personImg})`}}></div>
                                    
                                    <div className={styles.content__details}>
                                        <p className={styles.name}>{elem.postedBy}</p>
                                        <p className={styles.date}>Posted on {elem.postedDate}</p>
                                    </div>

                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="square-outline"></ion-icon> {elem.floorSpace} sqm</p>
                                    <p className={styles.text}><ion-icon name="pricetags"></ion-icon> {elem.furnished}</p>
                                </div>

                                <div className={styles.content__innerrow}>
                                    <p className={styles.text}><ion-icon name="bed"></ion-icon> {elem.bedrooms} BR</p>
                                    <p className={styles.link}>viewmap</p>
                                </div>

                            </div>

                            <p className={styles.apartment}>{elem.placeName}</p>

                        </div>

                        <div className={styles.card__bottom}>
                            <p className={styles.cardBottom__price}>${elem.price} / month</p>
                            <div className={styles.cardBottom__location}>
                                <ion-icon name="pin"></ion-icon>
                                <p className={styles.city}>{elem.city}</p>
                            </div>
                        </div>

                    </div>
            )
        })
    }

    render(){

        // const {data} = this.props;

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
                            <option value="Rotterdam" className={styles.option}>Rotterdam</option>
                            <option value="Amsterdam" className={styles.option}>Amsterdam</option>
                            <option value="Frankfurt" className={styles.option}>Frankfurt</option>
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

                    {this.renderCards()}

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