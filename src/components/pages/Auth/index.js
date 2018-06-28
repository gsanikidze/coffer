import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components'

// my comp
import {firebase, firebaseDB} from '../../../CONFIG';
import {checkAuth} from './checkAuth';
import {logIn as logInAction, logOut as logOutAction} from '../../../actions';
import './style.css';
import { MAIN_GRADIENT } from '../../UI_VARS'
import { Title, ActiveButton } from '../../UI_ATOMS'
import backgroundImage from '../../../img/log-in.jpeg'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: undefined,
            displayName: undefined,
            photoURL: undefined,
            token: undefined,
            userAuthorized: false
        };
        this.logIn = this
            .logIn
            .bind(this);
    }

    logIn() {
        const provider = new firebase
            .auth
            .GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {

                this.setState({uid: result.user.uid, displayName: result.user.displayName, photoURL: result.user.photoURL, token: result.credential.accessToken, userAuthorized: true})

                const user = this.state;

                firebaseDB
                    .ref(`users/${user.uid}`)
                    .set({displayName: user.displayName, photoURL: user.photoURL, token: user.token})

                sessionStorage.setItem('uid', JSON.stringify(this.state.uid));
                sessionStorage.setItem('displayName', JSON.stringify(this.state.displayName));
                sessionStorage.setItem('photoURL', JSON.stringify(this.state.photoURL));
                sessionStorage.setItem('token', JSON.stringify(this.state.token));

                this
                    .props
                    .logInAction(this.state);
            })
    }

    getContent(){
        window.location.reload(true)   
    }

    componentDidMount() {
        checkAuth().then((value) => {
            this.setState({userAuthorized: value})
        })
    }

    render() {

        const Container = styled.div`
            background-image: url(${backgroundImage});
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
        `
        const GradientDiv = styled.div`
            background: ${MAIN_GRADIENT};
            height: 100vh;
            opacity: 0.32;
        `
        const ActionDiv = styled.div`
            position: absolute;
            height: 100vh;
            z-index: 99;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
    `

        return (
            <div>
                {this.state.userAuthorized
                    ? this.getContent()
                    : 
                    <Container>
                        <ActionDiv>
                            <div id='dialog'>
                                <Title>Log In</Title>
                                <ActiveButton onClick={this.logIn} id="log_in_btn">
                                    With Google
                                </ActiveButton>
                            </div>
                        </ActionDiv>
                        <GradientDiv/>
                    </Container>
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({reduxData: state})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logInAction,
        logOutAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);