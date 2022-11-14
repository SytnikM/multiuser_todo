import React from "react";

export default class Login extends React.Component {
    state = {
        activeUserName: "",
        activeUserPass: "",
        error: "",
        users: this.props.users
    }

    onChangeUser = (event) => {
        this.setState({
            ...this.state,
            activeUserName: event.target.value
        })
    }
    onChangePass = (event) => {
        this.setState({
            ...this.state,
            activeUserPass: event.target.value
        })
    }

    login = () => {
        this.state.users.map((user)=>{
            if(user.name === this.state.activeUserName){
                if(user.password === this.state.activeUserPass){
                    console.log("Access");
                    this.props.logIn(user)
                }
                else{
                    console.error("Password is not correct")
                }
            }
        })
        console.log(this.state.activeUserName+"---"+this.state.activeUserPass)
    }

    render() {
        return(
            <div>
                <div className="Login">
                    <h3>{this.state.error}</h3>
                    <select 
                        className="username"
                        placeholder="Выберите пользователя"
                        onChange={this.onChangeUser}
                    >
                        {this.props.users.map((user) =>{
                            return(
                                <option>{user.name}</option>
                            )
                        })}
                    </select>
                    <textarea
                        type="text"
                        placeholder="Пароль"
                        onChange={this.onChangePass}
                    />
                    <button onClick={this.login}>Войти</button>
                </div>
        </div>
        )
    }
}