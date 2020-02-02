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

class App extends React.Component {


  state = {
    showModal: true,
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


  render(){

  
    return (
      <div className={` ${styles.app} App`}>

        <Header showModal={this.showModal}/>


        <Switch >
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path="/listings" exact component={Main} />
          {/* <Route path="/auth" exact component={Register} /> */}


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
