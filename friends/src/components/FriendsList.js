import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendsList = props => {
    
    return (
        <div className="friends-list">
            {props.list.map(friend => (
                // <div>
                //     <h2>{friend.name}</h2>
                //     <p>{friend.age}</p>
                //     <p>{friend.email}</p>
                // </div>
                <Friend key={friend.id} friend={friend} />
            ))}
            <Link to="/form">Add new Friend</Link>
        </div>
    );
};

export default FriendsList;