import React, {Component} from 'react'
import './App.css';
import Login from './Components/Login';
import User from './Components/User';

class App extends Component {
  state = {
    users: [
      {
        name: "Max",
        accessRights: 'admin',
        password: "QweRty"
      },
      {
        name: "Alena",
        accessRights: 'user',
        password: "AsdFgh"
      },
    ],
  }

  auth = (userName,pass) => {
    this.state.users.map((index,user) => {
      if(user === userName) {
        if(pass === this.state.users[index].password){
         //Login 
          console.log("Авторизация успешна!!!")
        } else {
          //Error
          console.error("Пароль не верный!!!")
        }
      } else {
        //Error
        console.error("Пользователь не найден!!!")
      }
    })
  }
  
  qwe= () =>{
    const  users = [...this.state.users]
    users[0].name = "Maxim"
    this.setState({
        ...this.state,
        users
    })
  }



  render() {
    return(
      <div className='App'>
      <Login 
        users={this.state.users}
      />
      {
        this.state.users.map((user, index) => {
          return(
            <div>
              <User 
                key={index}
                name={user.name}
                accessRights={user.accessRights}
                qwe={this.qwe}
              />
            </div>
          )
        })
      }
      </div>
    )
  }
}


export default App;
