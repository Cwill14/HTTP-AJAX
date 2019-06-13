import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateForm extends Component {
    
    // componentDidMount() {
    //     const id = this.props.match.params.id;
    // }

    render() {
        console.log(this.props);

        return (
            <div className="update-container">
                <Link to="/"><button>Back to List</button></Link>                
                <form className="update-form" onSubmit={e => this.props.updateFriend(e, this.props.match.params.id, this.props.updatedFriend)}>
                    <input
                        type="text"
                        value={this.props.updatedFriend.name}
                        name="name"
                        placeholder="name"
                        required
                        onChange={this.props.handleChanges}
                    />
                    <input
                        type="number"
                        value={this.props.updatedFriend.age}
                        name="age"
                        placeholder="age"
                        required
                        onChange={this.props.handleChanges}
                    />
                    <input
                        type="email"
                        value={this.props.updatedFriend.email}
                        name="email"
                        placeholder="email"
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