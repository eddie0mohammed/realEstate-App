
import React from 'react';

import styles from './Register.module.css';


class Register extends React.Component{

    state = {
        signIn: true
        
    }


    showSignIn = (e) => {

        e.target.nextElementSibling.classList.remove('activelink');
        if (!e.target.classList.contains('activelink')){
            e.target.classList.add('activelink')
        }
        // console.log(e.target);
        this.setState({
            signIn: true
        })
    }

    showSignUp = (e) => {
        e.target.previousElementSibling.classList.remove('activelink');
        if (!e.target.classList.contains('activelink')){
            e.target.classList.add('activelink')
        }
        this.setState({
            signIn: false
        })
    }



    render(){

        return (
            <div className={styles.container}>

                <div className={styles.icon} onClick={this.props.hide}>&times;</div>
                
                <div className={styles.content}>
                    
                    <h2 className={styles.header}>Welcome to Zillow</h2>

                    <div className={styles.links}>
                        <button className={`${styles.link} activelink`} onClick={this.showSignIn}>Sign In</button>
                        <button className={styles.link} onClick={this.showSignUp}>New Account</button>
                    </div>

                    <div className={styles.signIn} style={{display:`${this.state.signIn ? 'flex' : 'none'}`}}>
                        <input className={styles.input} type="text" placeholder='Enter email'/>
                        <input className={styles.input} type="text" placeholder='Enter password'/>
                        <button className={styles.btn}>Sign In</button>
                        <p className={styles.forget}>Forgot your password?</p>
                    </div>

                    <div className={styles.register} style={{display:`${this.state.signIn ? 'none' : 'flex'}`}}>
                        <input className={styles.input} type="text" placeholder='Enter email'/>
                        <input className={styles.input} type="text" placeholder='Create password'/>
                        <button className={styles.btn}>Submit</button>

                        <p className={styles.disclaimer}>By submitting, I accept Zillow's terms of use.</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Register;