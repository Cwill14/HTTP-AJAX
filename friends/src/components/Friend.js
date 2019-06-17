import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <Link to={`/update/${props.friend.id}`}>
                <button>Update</button>
            </Link>
            <button 
                onClick={e => props.deleteFriend(e, props.friend.id)}>Delete
            </button>
        </div>
    );
};

export default Friend;