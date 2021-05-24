import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username : "bishal",
            password : "Hello1",
            hasLoginFailed : false,
            showSuccessMsg : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked(){
        if(this.state.username==='bishal' && this.state.password==='Hello1'){
            this.props.history.push(`/welcome/${this.state.username}`)
            console.log(this.props.history)
            // console.log(this.state.username)
            sessionStorage.setItem("User",this.state.username);
            // this.setState({
            //     showSuccessMsg : true,
            //     hasLoginFailed : false})
        }else{
            this.setState({
                showSuccessMsg : false,
                hasLoginFailed : true})
        }
    }

    render() { 
        return ( 
            <div> 
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMsg && <div>Login Success</div>}
                <div className='container float-left'>
                    <div className="form-group">
                        User Name :
                        <input type="text" className="form-control" id="username" name='username' placeholder="Enter Username" onChange={this.handleChange}/>  
                    </div>
                    <div className="form-group">
                        Password
                        <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
         );
    }
}

export default Login;