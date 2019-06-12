import React from 'react';
import { Link } from 'react-router-dom';

const FriendForm = () => {
    return (
        <div>
            <Link to="/">Back to List</Link>
            <form>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="age"/>
                <input type="text" placeholder="email"/>
                <button type="submit">Add Friend</button>
            </form>
        </div>
    );
};

export default FriendForm;