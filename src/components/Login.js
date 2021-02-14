import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { TodoApp } from './TodoApp';


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: '', pas: '' };
        localStorage.setItem('isLoggedIn', 'false');
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasChange = this.handlePasChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

    
   
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleUserChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleLoginChange}
                                {...localStorage.getItem('isLoggedIn')?<TodoApp />:<Login />}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
 
    handleUserChange(e) {
        this.setState({
            user: e.target.value
        });
    }

    handlePasChange(e) {
        this.setState({
            pas: e.target.value
        });
    }
    handleLoginChange(e) {
        if (this.state.user === localStorage.getItem('user') && this.state.pas === localStorage.getItem('pas')) {
            localStorage.setItem('isLoggedIn', 'true');
            
        }
    }

 


}