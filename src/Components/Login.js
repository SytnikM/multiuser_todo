import React from "react";

export default class Login extends React.Component {
    state = {
        activeUserName: "",
        activeUserPass: "",
        error: "",
        users: this.props.users,
        pass: ""
    }

    // Запись введеного имени пользователя для входа
    onChangeUser = (event) => {
        this.setState({
            ...this.state,
            activeUserName: event.target.value
        })
    }
    // Запись введеного пароля для входа
    onChangePass = (event) => {
        let regexp = /[^a-zа-яё,._\-\/=\!\?0-9\s]/gi;
        let value =event.target.value;
        value = value.replace(/^\s/,'');
        value = value.replace(/ /,'');
        value = value.replace(regexp,'');
        this.setState({
            ...this.state,
            activeUserPass: event.target.value,
            pass: value
        });
    }
    // Проверка введенных данных
    login = () => {
        this.state.users.map((user)=>{
            if(user.name === this.state.activeUserName){
                if(user.password === this.state.activeUserPass){
                    console.log("Access");
                    this.props.logIn(user)
                }
                else{
                    console.error("Password is not correct")
                    this.setState({
                        ...this.state,
                        error: "Введен не верный пароль"
                    })
                }
            }
        })
        console.log(this.state.activeUserName+"---"+this.state.activeUserPass)
    }
    // Добавление возможности входа по нажатию Enter на input'e
    keyPress = (event) =>{
        if(event.keyCode === 13){
            this.login()
        }
    }

    render() {
        return(
            <div>
                <div className="Login">
                    {
                        this.state.error
                            ? <h3>{this.state.error}</h3>
                            : null
                    }
                    <select 
                        className="username"
                        placeholder="Выберите пользователя"
                        onChange={this.onChangeUser}
                    >
                        <option disabled selected>Выберите пользователя</option>
                        {this.props.users.map((user) =>{
                            return(
                                <option>{user.name}</option>
                            )
                        })}
                    </select>
                    <input 
                        value={this.state.pass}
                        type="password"
                        placeholder="Пароль"
                        onChange={this.onChangePass}
                        // onChange={this.inputCheck}
                        onInput={this.inputCheck}
                        maxLength={20}
                        onKeyDown={this.keyPress}
                    />
                    <button onClick={this.login}>Войти</button>
                </div>
        </div>
        )
    }
}