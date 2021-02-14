import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoApp } from './components/TodoApp';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

localStorage.setItem('user', 'andres');
localStorage.setItem('pas', 'sotelo');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        //localStorage.setItem("com", "com"); //alamcenamiento local
    }
    


  

    render() {
        const LoginView = () => (
            <Login />
            //this.state.isLoggedIn === false ? <Login/> : <TodoApp/>
        );

        const TodoAppView = () => (
            <TodoApp />
            //this.state.isLoggedIn === true ? <TodoApp/> : <Login/>
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />

                    <ul>
                        {localStorage.getItem('isLoggedIn') === 'false' ? <li><Link to="/">Login</Link></li> :
                            <li><Link to="/todo">Todo</Link></li>}
                    </ul>

                    <div>
                        {localStorage.getItem('isLoggedIn') === 'false' ? <Route exact path="/" component={LoginView} /> :
                            <Route path="/todo" component={TodoAppView} />}
                    </div>
                </div>
            </Router>
        );
    }



}

export default App;
