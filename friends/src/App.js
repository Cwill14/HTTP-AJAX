import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';
import FriendForm from './components/FriendForm.js';
import UpdateForm from './components/UpdateForm';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends React.Component {
  
  state ={
    list: [],
    friend: {
      name: "",
      age: "",
      email: ""
    },
    updatedFriend: {
      name: "",
      age: "",
      email: ""
    }
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
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      },
      updatedFriend: {
        ...this.state.updatedFriend,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewFriend = e => {
    e.preventDefault();    
    const newFriend = {
      name: this.state.friend.name,
      age: this.state.friend.age,
      email: this.state.friend.email
    }
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({list: res.data})
        this.props.history.push('/')
      })
      .catch(err => console.log(err))

    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    })
  }

  updateFriend = (e, id, friend) => {
    e.preventDefault();    
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        this.setState({list: res.data})
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
    this.setState({
      updatedFriend: {
        name: "",
        age: "",
        email: ""
      }
    })
  }

  deleteFriend = (e, id) => {
    e.preventDefault();    
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({list: res.data})
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Route exact path="/" render={props => 
          <FriendsList 
            {...props} 
            list={this.state.list}
            deleteFriend={this.deleteFriend}
            />} 
        />
        <Route path="/form" render={props => 
          <FriendForm 
            {...props} 
            handleChanges={this.handleChanges}
            addNewFriend={this.addNewFriend}
            friend={this.state.friend}
          />}
        />
        <Route path={`/update/:id`} render={props =>
          <UpdateForm 
            {...props}
            handleChanges={this.handleChanges}
            updateFriend={this.updateFriend}
            updatedFriend={this.state.updatedFriend}
          />
        }/>
      </div>
    );
  }
}

export default App;
