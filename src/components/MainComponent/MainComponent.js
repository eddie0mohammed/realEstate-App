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

    renderRows = () => {
        const {data} = this.props;


        return data.map((elem, i) => {

        
        return <div key={i} className={styles.rows}>

            <div className={styles.rows__img} style={{backgroundImage: `url(${elem.placeImg})`}} ></div>

            <div className={styles.rows__content}>

                <h4 className={styles.content__placeName}>{elem.placeName}</h4>

                <div className={styles.second}>

                    <div className={styles.second__left}>
                        <p className={styles.content__price}>${elem.price} / month</p>
                        <p className={styles.content__location}><ion-icon name="pin"></ion-icon>{elem.city}</p>
                    </div>

                    <div className={styles.second__right}>

                        <div className={styles.second__rightFirst}>
                            <p className={styles.details__text}><ion-icon name="bed"></ion-icon>  {elem.bedrooms} BR</p>
                            <p className={styles.details__text}><ion-icon name="square-outline"></ion-icon> {elem.floorSpace} sqm</p>
                        </div>

                        <div className={styles.second__rightSecond}>
                            <p className={styles.details__text}><ion-icon name="pricetags"></ion-icon> {elem.furnished}</p>
                            <p className={styles.details__link}>viewmap</p>
                        </div>
                    </div>
                </div>

                <div className={styles.third}>
                    
                    <div className={styles.person__image} style={{backgroundImage: `url(${elem.personImg})`}}></div>

                    <div className={styles.posted__details}>
                        <p className={styles.details__name}>{elem.postedBy}</p>
                        <p className={styles.details__date}>{elem.postedDate}</p>
                    </div> 

                </div>

            </div>
            
        </div>

        })
        

        
    }

    handleNumberClick = (e) => {
        
        e.target.parentElement.childNodes.forEach(elem => {
            elem.classList.remove('pagination__active');
        })

        e.target.classList.add('pagination__active');

        this.props.paginate(parseInt(e.target.textContent));
        
    }

    renderPageNumbers = () => {
        const {totalPosts, postsPerPage} = this.props;
        const pageNumbers = [];

        for (let i = 2; i <= Math.ceil(totalPosts / postsPerPage); i++){
            pageNumbers.push(i);
        }
        
        return pageNumbers.map((elem, i) => {
            return (
                <p key={i} className={styles.number} onClick={this.handleNumberClick}>{elem}</p>
            )
        })
    }

    nextClicked = (e) => {
        const {paginate, currentPage, totalPosts, postsPerPage} = this.props;
        const lastPage = Math.ceil(totalPosts / postsPerPage);
        
        if (currentPage === lastPage){
            return ;
        }else{
            e.target.previousElementSibling.childNodes.forEach(elem => {
                elem.classList.remove('pagination__active');
            })
            let newPageNumber = currentPage + 1;
            paginate(newPageNumber); 
            // console.log(newPageNumber);
            let currentPageElement = Array.from(e.target.previousElementSibling.childNodes).find(elem => elem.textContent === newPageNumber.toString());
            currentPageElement.classList.add('pagination__active');
        }
        // console.log(e.target.previousElementSibling.childNodes);

    }

    prevClicked = (e) => {
        const {paginate, currentPage} = this.props;

        if (currentPage === 1){
            return ;
        }else{
            e.target.nextElementSibling.childNodes.forEach(elem => {
                elem.classList.remove('pagination__active');
            })
            let newPageNumber = currentPage - 1;
            paginate(newPageNumber); 
            // console.log(newPageNumber);
            let currentPageElement = Array.from(e.target.nextElementSibling.childNodes).find(elem => elem.textContent === newPageNumber.toString());
            currentPageElement.classList.add('pagination__active');
        }



    }

    icon1Clicked = (e) => {
        e.target.parentElement.nextElementSibling.classList.remove('active1');
        e.target.parentElement.classList.add('active1')
        // console.log(e.target.parentElement);
        this.props.displayChange(e);
    }

    icon2Clicked = (e) => {
        e.target.parentElement.previousElementSibling.classList.remove('active1');
        e.target.parentElement.classList.add('active1');
        this.props.displayChange(e);

    }

    renderCityOptions = () => {
        const {originalData} = this.props;
        let cities = [];
        originalData.forEach(elem => {
            if (!cities.includes(elem.city)){
                cities.push(elem.city);
            }
        })
        return cities.map((elem => {
            return <option key={elem} value={elem} className={styles.option}>{elem}</option>
        }))
    }

    render(){

        // const {data} = this.props;
        

        return (
            <div className={styles.mainComponent}>

                <div className={styles.row}>

                    <div className={styles.left}>
                        <input type="text" name="placeName" placeholder="Place Name" className={styles.left__input} onChange={this.props.handleChange}/>

                        {/* <p className={styles.left__results}><span className={styles.left__number}>3298</span> results found</p> */}
                    </div>

                    <div className={styles.right}>

                        <select name="city" className={styles.right__city} onChange={this.props.handleChange} defaultValue={this.props.val}>
                            <option value="City" hidden className={styles.option}>City</option>
                            <option value="All" className={styles.option}>All</option>
                            
                            {this.renderCityOptions()}
                            
                        </select>

                        <div className={styles.right__second}>
                            <select name="order" className={styles.right__order} onChange={this.props.sort}>
                                <option value="ascending" className={styles.orderType}>Date Ascending</option>
                                <option value="descending" className={styles.orderType}>Date Descending</option>
                            </select>

                            <p className={styles.icon} ><ion-icon name="reorder"  onClick={this.icon1Clicked}></ion-icon></p>
                            <p className={`${styles.icon} active1`}  onClick={this.icon2Clicked}><ion-icon  name="apps" ></ion-icon></p>

                        </div>
                    </div>
                </div>


                <div className={styles.mainContent}>

                    { this.props.display === '1' ? this.renderCards() : this.renderRows()} 
                    
                    

                </div>
                
                <div className={styles.paginationArea}>
                    <div className={styles.bar}>
                        <p className={styles.prev} onClick={this.prevClicked}>prev</p>

                        <div className={styles.bar__numbers}>
                            <p className={`${styles.number} pagination__active`} onClick={this.handleNumberClick}>1</p>
                            {this.renderPageNumbers()}
                            
                        </div>

                        <p className={styles.next} onClick={this.nextClicked}>next</p>
                    
                    </div>

                </div>

            </div>
        )
    }
}

export default MainComponent;