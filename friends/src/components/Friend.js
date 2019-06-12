import React from 'react';

const Friend = props => {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button>Update</button>
            <button>Delete</button>
        </div>
    );
};

export default Friend;