import React, {Component} from 'react'
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import User from './Components/User';

class App extends Component {
  state = {
    activeUser: {},
    login: false,
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

  logIn = (user) => {
    this.setState({
      ...this.state,
      activeUser: user,
      login: true
    })
  }
  
  logOut = () => {
    this.setState({
      ...this.state,
      activeUser: {},
      login: false
    })
  }

  register = (user) => {
    const userList = this.state.users;
    userList.push(user);
    this.setState({
      ...this.state,
      users: userList,
      activeUser: user,
      login: true
    })
  }

  render() {
    return(
      <div className='App'>
        {
          this.state.login
            ? <div>
                <User user={this.state.activeUser}/>
                <button onClick={this.logOut}>Выход</button> 
            </div>
            : <div>
                <Login users={this.state.users} logIn={this.logIn}/>
                <Register register={this.register}/>
            </div>
        }
      </div>
    )
  }
}

export default App;
