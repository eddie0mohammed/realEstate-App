import React from 'react';
import './App.css';
import styles from './App.module.css'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';

import Backdrop from './UI/Backdrop/Backdrop';
import Modal from './UI/Modal/Modal';

import {data} from './Data/data';

class App extends React.Component {


  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  retrieveData = () => {
    let locations = [];

    data.forEach(elem => {
      if (!locations.includes(elem.city)){
        locations.push(elem.city);
      }
    });
    return locations;
  }


  render(){

    let locations = this.retrieveData();
  
    return (
      <div className={` ${styles.app} App`}>

        <Header showModal={this.showModal}/>


        <Switch >
          <Route path='/' exact render={(props) => <Home {...props} location={locations}/>} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path="/listings" exact component={Main} />
          <Route path="/listings/:location" exact component={Main} />


          <Route component={NotFound} />

        </Switch>


        

        <Footer />

        <Modal show={this.state.showModal} hide={this.hideModal}>
          <Register hide={this.hideModal}/>
        </Modal>
        <Backdrop show={this.state.showModal} hide={this.hideModal}/>
        
      </div>
    );
  }
}

export default App;
