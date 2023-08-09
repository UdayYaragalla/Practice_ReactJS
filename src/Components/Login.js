import React, { Component } from 'react'

class LogIn extends Component{
    constructor(){
        super()
        this.state = {
            userId : '',
            password : ''
        }
    }
    handleUserId = (event) => {
        this.setState({
            userId : event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleSubmit = (event) => {
            alert("form submitted")
            // event.preventDefault();
        }

    render(){
        return(
            <div id='logInContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>UserId</label>
                            <input type='text' value={this.state.userId} onChange={this.handleUserId}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' value={this.state.password} onChange={this.handlePassword}/>
                        </div>
                        <button type='submit'>submit</button>
                    </form>

            </div>
        )
    }
}

export default LogIn