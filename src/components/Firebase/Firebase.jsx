import React, {Component} from 'react';
import firebase from 'firebase';
import firebaseConfig from '../../config';

import './App.css';

import Form from '../Form';


firebase.initializeApp(firebaseConfig);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });
    }

    handleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
        console.log('handleSignIn');
        console.log(this.state.user);
    }

    handleLogOut() {
        firebase.auth().signOut();
        console.log('handleLogOut');
        console.log(this.state.user);
    }

    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <h2>
                        SIMPLE APP WITH REACT
                    </h2>
                    {!this.state.user ? (
                        <button
                            className="app__button"
                            onClick={this.handleSignIn.bind(this)}
                        >
                            Sign in
                        </button>
                    ) : (
                        <button
                            className="app__button"
                            onClick={this.handleLogOut.bind(this)}
                        >
                            Logout
                        </button>
                    )}
                </div>
                <div className="app__list">
                    <Form user={this.state.user}/>
                </div>
            </div>
        )
    }
}