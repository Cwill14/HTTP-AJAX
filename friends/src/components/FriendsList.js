import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendsList = props => {
    
    return (
        <div className="friends-list">
            {props.list.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
            <Link to="/form"><button>Add new Friend</button></Link>
        </div>
    );
};

export default FriendsList;