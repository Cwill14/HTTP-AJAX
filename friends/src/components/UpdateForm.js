import React, { Component } from 'react';

class UpdateForm extends Component {
    render() {
        return (
            <div className="update-container">
                <Link to="/"><button>Back to List</button></Link>                
                <form className="update-form">
                    <input
                        type="text"
                        value={}
                        name="name"
                        placeholder="name"
                        required
                    />
                    <input
                        type="text"
                        value={}
                        name="age"
                        placeholder="age"
                        required
                    />
                    <input
                        type="email"
                        value={}
                        name="email"
                        placeholder="email"
                        required
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        );
    }
}

export default UpdateForm;