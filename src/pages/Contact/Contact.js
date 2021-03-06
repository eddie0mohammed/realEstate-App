
import React from 'react';

import styles from './Contact.module.css';

import img from '../../img/zillow.png';
import one from '../../img/1.png';
import two from '../../img/2.png';
import three from '../../img/3.png';
import four from '../../img/4.png';


class Contact extends React.Component{

    
    render(){


        return (
            <div className={styles.contact}>
                
                <div className={styles.header}>

                    <div className={styles.overlay}></div>
                    <p className={styles.text}>Contact Us</p>
                </div>


                <div className={styles.content}>
                    <div className={styles.left}>
                        <img className={styles.left__img} src={img} alt="img"/>
                    </div>

                    <div className={styles.right}>
                        <p className={styles.company}>Zillow Group HQ</p>
                        <p className={styles.address}>1301 Second Avenue</p>
                        <p className={styles.address}>Floor 31</p>
                        <p className={styles.address}>Seattle, WA 98101</p>

                        <p className={styles.email}>Email: info@zillow.com</p>
                        <p className={styles.phone}>Phone: +1 1234567890</p>

                    </div>
                </div>

                <p className={styles.border}>&nbsp;</p>


                <div className={styles.brandsContainer}>

                    <div className={styles.brand}>

                        <img className={styles.brand__img} src={one} alt="one"/>
                        <h4 className={styles.brand__header}>Zillow</h4>

                        <p className={styles.brand__add}>1301 Second Avenue <br/>Floor 31 <br/>Seattle, WA 98101</p>

                    </div>

                     <div className={styles.brand}>

                        <img className={styles.brand__img} src={two} alt="two"/>
                        <h4 className={styles.brand__header}>Trulia</h4>

                        <p className={styles.brand__add}>535 Mission Street <br/>Suite 700 <br/>San Francisco, CA 94105</p>
                        
                    </div>

                     <div className={styles.brand}>

                        <img className={styles.brand__img} src={three} alt="one"/>
                        <h4 className={styles.brand__header}>Outeast</h4>

                        <p className={styles.brand__add}>130 5th Avenue <br/>Floor 6 <br/>New York, NY 10011</p>
                        
                    </div>

                     <div className={styles.brand}>

                        <img className={styles.brand__img} src={four} alt="one"/>
                        <h4 className={styles.brand__header}>Naked Apartments</h4>

                        <p className={styles.brand__add}>535 Mission Street<br/>Floor 11 <br/>New York, NY 10011</p>
                        
                    </div>

                </div>

                <div className={styles.maps}>
                    <iframe title="maps" className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6306.6152358076715!2d-122.42965718154514!3d37.78283003729461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587390eb80c3b%3A0xe28c4482baad9163!2sRonny%20Budiutama!5e0!3m2!1sen!2smu!4v1581422069243!5m2!1sen!2smu" width="100%" height="100%" frameBorder="0"></iframe>
                </div>
            </div> 
        )
    }
}

export default Contact;