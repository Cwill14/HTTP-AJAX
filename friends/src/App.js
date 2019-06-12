import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';
import axios from 'axios';

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
        <FriendsList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
