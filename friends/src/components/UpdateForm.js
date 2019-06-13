import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateForm extends Component {
    
    render() {
        console.log(this.props);

        return (
            <div className="update-container">
                <h3>Update Friend</h3>
                <Link to="/"><button>Back to List</button></Link>                
                <form 
                    className="update-form" 
                    onSubmit={e => this.props.updateFriend(e, this.props.match.params.id, this.props.updatedFriend)}>
                    <input
                        type="text"
                        value={this.props.updatedFriend.name}
                        name="name"
                        placeholder="name here"
                        required
                        onChange={this.props.handleChanges}
                    />
                    <input
                        type="number"
                        value={this.props.updatedFriend.age}
                        name="age"
                        placeholder="age here"
                        required
                        onChange={this.props.handleChanges}
                    />
                    <input
                        type="email"
                        value={this.props.updatedFriend.email}
                        name="email"
                        placeholder="email here"
                        required
                        onChange={this.props.handleChanges}
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        );
    }
}

export default UpdateForm;