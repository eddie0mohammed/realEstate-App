import React from 'react';

import styles from './Main.module.css';

import Filter from '../Filter/Filter';
import MainComponent from '../MainComponent/MainComponent';

import {data} from  '../../Data/data';


class Main extends React.Component{

    state = {
        data: data,
        filters: {},

        currentPage: 1,
        postsPerPage: 6,
        display: '1',
        
    }

    componentDidMount(){
        if (this.props.match.params.hasOwnProperty('location')){
            this.setState({
                ...this.state,
                filters: {
                    ...this.state.filters,
                    city: this.props.match.params.location
                }
            })
        }
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

                }else if (key === 'placeName'){
                    newData = newData.filter(elem => {
                        return elem[key].startsWith(filters[key]);
                    })


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

     //change page
        paginate = (number) => {
            this.setState({
            currentPage: number
            });

        }

    displayChange = (e) => {
        
        let display = e.target.name === 'reorder' ? '0' : '1';
        this.setState({
            display: display
        });
    }

    render(){

        let filteredData = this.filterData(this.state.data, this.state.filters);
        // console.log(this.state.filters);
        // console.log(filteredData);

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

        // console.log(indexOfFirstPost);
        // console.log(indexOfLastPost);
        // console.log(currentPosts);


        let val = 'City';
        if (this.props.match.params.hasOwnProperty('location')){
            val = this.props.match.params.location;
        }
        
        

        return (
            <div className={styles.main}>

                <div className={styles.filter}>
                    <Filter originalData={this.state.data} handleChange={this.handleChange}/>
                </div>

                <div className={styles.main__content}>
                    <MainComponent val={val} display={this.state.display} displayChange={this.displayChange} originalData={this.state.data} data={currentPosts} handleChange={this.handleChange} sort={this.handleSort} paginate={this.paginate} totalPosts={filteredData.length} postsPerPage={this.state.postsPerPage} currentPage={this.state.currentPage}/>
                </div>
            </div>
        )
    }
}

export default Main;