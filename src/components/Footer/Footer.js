
import React from 'react';

import styles from './Footer.module.css';


class Footer extends React.Component{

    
    render(){


        return (
            <div className={styles.footer}>

                <div className={styles.footer__left}>

                </div>

                <div className={styles.footer__center}>
                    
                    <h2 className={styles.center__header}>Download Pararius App</h2>

                    <p className={styles.center__text}>Use our app to have 11,279 rental <br/>properties at hand</p>

                    <div className={styles.button__container}>
                        <button className={styles.button}><ion-icon name="logo-android"></ion-icon>Playstore</button>
                        <button className={styles.button}><ion-icon name="logo-apple"></ion-icon>Appstore</button>
                    </div>

                    <div className={styles.link__container}>
                        <div className={styles.link}><ion-icon name="logo-facebook"></ion-icon></div>
                        <div className={styles.link}><ion-icon name="logo-twitter"></ion-icon></div>
                    </div>

                    <p className={styles.copyright}>&copy; 2019 Pararius Inc</p>

                </div>

                <div className={styles.footer__right}>

                    <div className={styles.footer__right_header}>
                        <p className={styles.footer__heading}>For Tenants</p>
                        <p className={styles.footer__heading}>For Advertisers</p>
                    </div>

                    <div className={styles.footer__right_first}>
                        <p className={styles.text}>About Pararius</p>
                        <p className={styles.text}>Ads Policies</p>
                    </div>

                    <p className={styles.text}>Sign Up for free</p>
                    <p className={styles.text}>This is us</p>
                    <p className={styles.text}>Legal</p>
                    <p className={styles.text}>Pararius App</p>
                    


                </div>

                
            </div>
        )
    }
}

export default Footer;