import React from 'react';

const FriendsList = props => {
    
    return (
        <div>
            {props.list.map(friend => (
                <div>
                    <h2>{friend.name}</h2>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    );
};

export default FriendsList;