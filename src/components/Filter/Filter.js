import React from 'react';

import styles from './Filter.module.css';


class Filter extends React.Component{

    state = {
        // minPrice: 0,
        maxPrice: 3000,
        price: 0,
        // minSqm: 0,
        maxSqm: 2000,
        floorSpace: 0,
        // minRadius: 0,
        maxRadius: 1000,
        radius: 0

    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.handleChange(e);
    } 

    renderNeighbouhood = () => {
        const {originalData} = this.props;

        let neighbourhoods = [];
        originalData.forEach(elem => {
            if (!neighbourhoods.includes(elem.neighbourhood)){
                neighbourhoods.push(elem.neighbourhood);
            }
        });

        return neighbourhoods.map(elem => {
            return <option key={elem} value={elem}>{elem}</option>
        })
        
    }

    renderHouseType = () => {
        const {originalData} = this.props;

        let houseTypes = [];
        originalData.forEach(elem => {
            if (!houseTypes.includes(elem.houseType)){
                houseTypes.push(elem.houseType);
            }
        });

        return houseTypes.map(elem => {
            return <option key={elem} value={elem}>{elem}</option>
        })
        
    }

    renderBedrooms = () => {
        const {originalData} = this.props;

        let bedrooms = [];
        originalData.forEach(elem => {
            if (!bedrooms.includes(elem.bedrooms)){
                bedrooms.push(elem.bedrooms);
            }
        });

        return bedrooms.map(elem => {
            return <option key={elem} value={elem}>{elem}</option>
        })
        
    }



    render(){

        // console.log(this.state.value)
        

        return (
            <div className={styles.filter__container}>


                <div className={styles.first}>
                    
                    <h4 className={styles.first__header}>Filter</h4>

                    <select name="neighbourhood" className={styles.first__neighbourhood} onChange={this.props.handleChange} >
                        <option value="neighbourhood"  hidden>Neighbourhood</option>
                        <option value="All">Show all</option>
                        
                        {this.renderNeighbouhood()}
                        
                    </select>

                    <select name="houseType" className={styles.first__neighbourhood} onChange={this.props.handleChange}>
                        <option value="Type of House" hidden>Type of place</option>
                        <option value="All">Show all</option>

                        {this.renderHouseType()}
                        
                    </select>

                    <select name="bedrooms" className={styles.first__neighbourhood} onChange={this.props.handleChange}>
                        <option value="bedrooms" hidden># Bedrooms</option>
                        <option value="All">Show all</option>

                        {this.renderBedrooms()}
                        
                    </select>


                </div>


                <div className={styles.second}>
                    
                    <h4 className={styles.second__header}>Price</h4>  
                    <input type="range" name='price' className={styles.second__input} min='0' max={this.state.maxPrice} value={this.state.price} onChange={this.handleChange}/>
                    <div className={styles.number__container}>
                        <p className={styles.price__start}>$0</p>
                        <p className={styles.price__end}>${this.state.price}</p>
                    </div>

                    <h4 className={styles.second__header}>Floor Space</h4>
                    <input type="range" name="floorSpace" className={styles.second__input} min='0' max={this.state.maxSqm} value={this.state.floorSpace} onChange={this.handleChange}/>
                    <div className={styles.number__container}>
                        <p className={styles.price__start}>0 sqm</p>
                        <p className={styles.price__end}>{this.state.floorSpace} sqm</p>
                    </div>

                    <h4 className={styles.second__header}>Radius</h4>
                    <input type="range" name="radius" className={styles.second__input} min='0' max={this.state.maxSqm} value={this.state.radius} onChange={this.handleChange}/>
                    <div className={styles.number__container}>
                        <p className={styles.price__start}>0 Km</p>
                        <p className={styles.price__end}>{this.state.radius} Km</p>
                    </div>
                </div>


                <div className={styles.third}>

                    <h4 className={styles.third__header}>Facilities</h4>

                    <div className={styles.elem__container}>
                        <label htmlFor="elevator" className={styles.label}>Elevalor</label>
                        <input type="checkbox" name="elevator" className={styles.checkbox} onChange={this.props.handleChange}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="storage" className={styles.label}>Storage</label>
                        <input type="checkbox" name="storage" className={styles.checkbox} onChange={this.props.handleChange}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="bathTub" className={styles.label}>Bath tub</label>
                        <input type="checkbox" name="bathTub" className={styles.checkbox} onChange={this.props.handleChange}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="separateShower" className={styles.label}>Separate shower</label>
                        <input type="checkbox" name="separateShower" className={styles.checkbox} onChange={this.props.handleChange}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="fireplace" className={styles.label}>Fireplace</label>
                        <input type="checkbox" name="fireplace" className={styles.checkbox} onChange={this.props.handleChange}/>
                    </div>

                    <div className={styles.elem__container}>
                        <label htmlFor="swimmingPool" className={styles.label}>Swimming pool</label>
                        <input type="checkbox" name="swimmingPool" className={styles.checkbox} onChange={this.props.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;