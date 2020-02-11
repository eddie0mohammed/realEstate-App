import React from 'react';

import styles from './Home.module.css';


class Home extends React.Component{


    state = {
        location: ''
    }

    renderLocations = () => {
        return this.props.location.map(elem => {
            return <option key={elem} value={elem} >{elem}</option>
        })
    }

    handleSelectChange = (e) => {
        this.setState({
            location: e.target.value
        },() => {
            this.props.history.push(`/listings/${this.state.location}`);
        })
    }

    render(){


        
        return (
            <div className={styles.home}>


                <div className={styles.home__topSection}>

                    <div className={styles.overlay}></div>

                    <div className={styles.home__container}>

                        <h1 className={styles.home__header}>Reimagine Home</h1>

                        <p className={styles.home__subheader}>We'll help you find a place you'll love.</p>

                        <select name="location" className={styles.header__select} onChange={this.handleSelectChange}>
                            <option value="choose location" hidden>Choose a location</option>
                            <option value="All" >All</option>
                            {this.renderLocations()}
                        </select>

                    </div>
                </div>

                <div className={styles.home__secondSection}>

                    <h2 className={styles.secondSection__heading}>We have the most listings and constant updates. <br/>So you'll never miss out.</h2>

                    <p className={styles.border}>&nbsp;</p>

                    <div className={styles.secondSection__cardContainer}>

                        <div className={styles.card}>

                            <div className={styles.card__img} style={{backgroundImage: `url("https://source.unsplash.com/koH7IVuwRLw")`}}></div>

                            <h4 className={styles.card__heading}>Buy a home</h4>

                            <p className={styles.card__text}>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</p>

                            <button className={styles.card__btn} onClick={() => this.props.history.push('/listings')}>Search homes</button>

                        </div>

                        <div className={styles.card}>

                            <div className={styles.card__img} style={{backgroundImage: `url("https://source.unsplash.com/_TPTXZd9mOo")`}}></div>

                            <h4 className={styles.card__heading}>Sell a home</h4>

                            <p className={styles.card__text}>Whether you sell with our new offers or take another approach, we'll help you navigate the path to a successful sale.</p>

                            <button className={styles.card__btn} onClick={() => this.props.history.push('/listings')}>Search homes</button>

                        </div>

                        <div className={styles.card}>

                            <div className={styles.card__img} style={{backgroundImage: `url("https://source.unsplash.com/gREquCUXQLI")`}}></div>

                            <h4 className={styles.card__heading}>Rent a home</h4>

                            <p className={styles.card__text}>We're creating a seamless online experience - from shopping on the largest rental network, to applying and playing rent.</p>

                            <button className={styles.card__btn} onClick={() => this.props.history.push('/listings')}>Search homes</button>

                        </div>
                    </div>
                </div>
                

                
            </div>
        )
    }
}

export default Home;