import React from 'react';
import Friend from './Friend';

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
        </div>
    );
};

export default FriendsList;