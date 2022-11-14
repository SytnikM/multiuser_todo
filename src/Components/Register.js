import React from "react";

export default class Register extends React.Component {
    state = {
        userName: "",
        userPass: "",
        error: "",
        pass: "",
        name: ""
    }

    register = () => {
        let user = {
            name: this.state.userName,
            accessRights: 'user',
            password: this.state.userPass
        }
        this.state.userName && this.state.userPass
        ?   this.props.register(user)
        :   this.setState({
                    ...this.state,
                    error: "Заполните все поля"
            })
    }

    keyPress = (event) =>{
        if(event.keyCode === 13){
            this.register(this.state.user)
        }
    }

    onChangePass = (event) => {
        // eslint-disable-next-line no-useless-escape
        let regexp = /[^a-zа-яё,._\-\/=\!\?0-9\s]/gi;
        let value =event.target.value;
        value = value.replace(/^\s/,'');
        value = value.replace(/ /,'');
        value = value.replace(regexp,'');
        this.setState({
            ...this.state,
            userPass: event.target.value,
            pass: value
        });
    }

    onChangeName = (event) => {
        // eslint-disable-next-line no-useless-escape
        let regexp = /[^a-zа-яё,._\-\/=\!\?0-9\s]/gi;
        let value =event.target.value;
        value = value.replace(/^\s/,'');
        value = value.replace(/ /,'');
        value = value.replace(regexp,'');
        this.setState({
            ...this.state,
            userName: event.target.value,
            name: value
        });
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.name}
                    type={"text"}
                    onChange={this.onChangeName}
                    placeholder={"Пользователь"}
                />
                <input 
                    value={this.state.pass}
                    type="password"
                    placeholder="Пароль"
                    onChange={this.onChangePass}
                    maxLength={20}
                    onKeyDown={this.keyPress}
                />
                <button onClick={this.register}>Зарегестрироваться</button>
                {
                        this.state.error
                            ? <h3>{this.state.error}</h3>
                            : null
                    }
            </div>
        )
    }
}