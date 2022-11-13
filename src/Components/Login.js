import React from "react";

const Login = (props) => {

    return(
        <div>
            <div className="Login">
                <select>
                    {props.users.map((user) =>{
                        return(
                            <option>{user.name}</option>
                        )
                    })}
                </select>
                <input></input>
                <button>Войти</button>
            </div>
            <div className="Reg"></div>
        </div>
    )
}

export default Login