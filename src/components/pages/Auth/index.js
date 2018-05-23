import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// my comp
import { firebase } from '../../../CONFIG';
import { logIn as logInAction, logOut as logOutAction } from '../../../actions';
 

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn(){
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        this.props.logInAction(user);
        console.log(this.props);
        }); 
    }

    logOut(){
        firebase.auth().signOut().then(() => {
            this.props.logOutAction();
            console.log(this.props);
          }, function(error) {
            console.log(error);
        });
    }
    

    componentDidMount(){
        console.log('prop :', this.props);
    }

    render() {
        return (
            <div>
                {this.props.reduxData.user.user ? <button onClick={this.logOut}> Log Out </button> : <button onClick={this.logIn}> Log In </button>}
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