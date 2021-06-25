import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            errorMessage: '',
            userList: []
        }
    }
    async componentDidMount() {
        try {
            const RESULT = await fetch("https://jsonplaceholder.typicode.com/users");
            const RESULT_JSON = await RESULT.json();
            RESULT_JSON.map(user =>
                this.setState({

                    userList: [...this.state.userList, { username: user.username, password: user.address.city }]

                })

            )
            console.log(this.state.userList);
        } catch (error) {
            console.error(error);
        }
    }

    updateUserName = (event) => {
        this.setState({ userName: event.target.value })
        // console.log(this.state.userName)
    }
    updatePassWord = (event) => {
        this.setState({ passWord: event.target.value })
        // console.log(this.state.passWord)
    }

    userSubmit = () => {
        let userName = this.state.userName;
        let passWord = this.state.passWord;
        let hasUserName = this.state.userList.find(v => v.username === userName);
        let hasPassWord = this.state.userList.find(v => v.password === passWord);
        let hasCredential = this.state.userList.find(v => v.username === userName && v.password === passWord);

        if (hasUserName === undefined) {
            console.log('user not found');
        }

        if (hasPassWord === undefined) {
            console.log('it is not valid password');
        }
        if (hasCredential) {
            console.log('login success');
        }
        else {
            console.log('user password doesnot match');
        }

    }

    render() {
        return (
            <div>

                <Form>
                    <Form.Group className="mb-3"
                        controlId="formBasicEmail">
                        <Form.Label>
                            Email address
                        </Form.Label>
                        <Form.Control type="text"
                            placeholder="Username"
                            onChange={this.updateUserName} />

                    </Form.Group>

                    <Form.Group className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={this.updatePassWord} />
                    </Form.Group>

                    <Button variant="primary"
                        onClick={this.userSubmit}>
                        Valider
                    </Button>
                </Form>
            </div >

        );
    }

}
export default Login