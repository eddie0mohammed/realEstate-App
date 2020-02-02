import React from 'react';

import styles from './About.module.css';


class About extends React.Component{


    render(){

        return (
            <div className={styles.about}>
                
                <div className={styles.overlay}></div>
                <h2 className={styles.about__header}>About Us</h2>
                <p className={styles.border}>&nbsp;</p>

                <div className={styles.about__container}>
                    <p className={styles.about__text}>
                        Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.
                    </p>
                    <p className={styles.about__text}>
                        Zillow serves the full lifecycle of owning and living in a home: buying, selling, renting, financing, remodeling and more. It starts with Zillow's living database of more than 110 million U.S. homes - including homes for sale, homes for rent and homes not currently on the market, as well as Zestimate home values, Rent Zestimates and other home-related information. Zillow operates the most popular suite of mobile real estate apps, with more than two dozen apps across all major platforms.
                    </p>
                    <p className={styles.about__text}>
                        Zillow launched in 2006 and is headquartered in Seattle.
                    </p>
                    
                </div>


                <div className={styles.btn__container}>
                    <button className={styles.about__btn}>Check Out Our Properties</button>
                </div>
            </div>
        )
    }
}


export default About;