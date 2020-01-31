import React from 'react';

import styles from './Main.module.css';

import Filter from '../Filter/Filter';
import MainComponent from '../MainComponent/MainComponent';

import {data} from  '../../Data/data';


class Main extends React.Component{

    state = {
        data: data,
        filters: {}
        
    }

    handleChange = (e) => {
    
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        // console.log(name, value);
        
        this.setState({
            filters:{
                ...this.state.filters,
                [name]: value
            }
        }, () => {
            // console.log(this.state);
        });
    }

    filterData = (data, filters) => {

        let newData = [...data];

        if (filters.neighbourhood === 'All'){
            delete filters.neighbourhood;
        }
        if (filters.houseType === 'All'){
            delete filters.houseType;
        }
        if (filters.bedrooms === 'All'){
            delete filters.bedrooms;
        }
        if (filters.city === 'All'){
            delete filters.city
        }
  
        if (Object.keys(filters).length > 0){
            for (let key in filters){
                if (filters[key] === false || filters[key] === '0'){
                    delete filters[key]
                }
            } 
        }
        if (Object.keys(filters).length !== 0){

            for (let key in filters){
                if (key === 'price' || key === 'floorSpace' || key === 'radius'){
                    newData = newData.filter(elem => {
                        return parseInt(elem[key]) <= parseInt(filters[key])
                    });
                    // console.log(elem[key]);

                }else{
                    newData = newData.filter(elem => {
                        return elem[key] === filters[key]
                    });
                }
                
            }
        }

        if (Object.keys(filters).length === 0){
            return data;
        }

        
        return newData;

    }

    handleSort = (e) => {
        let data = this.state.data;

        if (e.target.value === 'descending'){
            data.sort((a, b) => {
                let dateA = new Date(a.postedDate);
                let dateB = new Date(b.postedDate);

                return dateB - dateA;
            })
        }else{
            data.sort((a, b) => {
                let dateA = new Date(a.postedDate);
                let dateB = new Date(b.postedDate);

                return dateA - dateB;
            })
        }
        this.setState({
            data: data
        })

    }

    render(){

        let filteredData = this.filterData(this.state.data, this.state.filters);
        // console.log(this.state.filters);
        // console.log(filteredData);

        return (
            <div className={styles.main}>

                <div className={styles.filter}>
                    <Filter handleChange={this.handleChange}/>
                </div>

                <div className={styles.main__content}>
                    <MainComponent data={filteredData} handleChange={this.handleChange} sort={this.handleSort}/>
                </div>
            </div>
        )
    }
}

export default Main;