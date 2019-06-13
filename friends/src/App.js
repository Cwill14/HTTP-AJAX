import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';
import FriendForm from './components/FriendForm.js';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends React.Component {
  
  state ={
    list: [],
    name: "",
    age: "",
    email: ""
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({list : response.data })})
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState(
      // ...this.state.friend
      {[e.target.name]: e.target.value}
    )
  }

  addNewFriend = e => {
    e.preventDefault();    
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({list: res.data})
        this.props.history.push('/')
      })
      .catch(err => console.log(err))

    this.setState({
      name: "",
      age: "",
      email: ""
    })
  }

  updateFriend = (e, id, friend) => {
    e.preventDefault();    
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // deleteFriend = e => {
  //   e.preventDefault();    
  //   axios
  // }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Route exact path="/" render={props => 
          <FriendsList 
            {...props} 
            list={this.state.list}
            />} 
        />
        <Route path="/form" render={props => 
          <FriendForm 
            {...props} 
            handleChanges={this.handleChanges}
            addNewFriend={this.addNewFriend}
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
          />} 
        />
      </div>
    );
  }
}

export default App;
