import React from 'react';
import { Link } from 'react-router-dom';

const FriendForm = props => {
    return (
        <div className="form-container">
            <h3>Add Friend</h3>
            <Link to="/"><button>Back to List</button></Link>
            <form onSubmit={props.addNewFriend}>
                <input 
                    type="text" 
                    value={props.friend.name} 
                    onChange={props.handleChanges} 
                    name="name" 
                    placeholder="name here"
                    required
                />
                <input 
                    type="number" 
                    value={props.friend.age} 
                    onChange={props.handleChanges} 
                    name="age" 
                    placeholder="age here"
                    required
                />
                <input 
                    type="email" 
                    value={props.friend.email} 
                    onChange={props.handleChanges} 
                    name="email" 
                    placeholder="email here"
                    required
                />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    );
};

export default FriendForm;