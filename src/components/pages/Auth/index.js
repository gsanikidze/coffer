import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

// my comp
import { firebase, firebaseDB } from '../../../CONFIG';
import { checkAuth } from './checkAuth';
import { logIn as logInAction, logOut as logOutAction } from '../../../actions';
import './style.css';
import { logOut } from './logOut'
 

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: undefined,
            displayName: undefined,
            photoURL: undefined,
            token: undefined,
            userAuthorized: false,
        };
        this.logIn = this.logIn.bind(this);
    }

    logIn(){
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then((result) => {
            
        this.setState({
            uid: result.user.uid,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            token: result.credential.accessToken,
            userAuthorized: true
        })
        
        const user = this.state;

        firebaseDB.ref(`users/${user.uid}`).set({
            displayName: user.displayName,
            photoURL: user.photoURL,
            token: user.token
        })

        sessionStorage.setItem('uid', JSON.stringify(this.state.uid));
        sessionStorage.setItem('displayName', JSON.stringify(this.state.displayName));
        sessionStorage.setItem('photoURL', JSON.stringify(this.state.photoURL));
        sessionStorage.setItem('token', JSON.stringify(this.state.token));

        this.props.logInAction(this.state);
        }); 
    }

    componentDidMount(){
        checkAuth().then((value) => {
            this.setState({
                userAuthorized: value
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.userAuthorized ? <Redirect to="/" /> : <button onClick={this.logIn} id="log_in_page"> Log In </button>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxData: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logInAction,
        logOutAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);