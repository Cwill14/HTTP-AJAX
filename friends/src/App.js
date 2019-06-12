import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';
import FriendForm from './components/FriendForm.js';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends React.Component {
  
  state ={
    list: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        // console.log(response)
        this.setState({list : response.data })})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {/* <FriendsList list={this.state.list}/> */}
        <Route exact path="/" render={props => <FriendsList {...props} list={this.state.list}/>} />
        {/* <FriendForm /> */}
        <Route path="/form" render={props => <FriendForm {...props} />} />
      </div>
    );
  }
}

export default App;
