import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Form = () => {
    const user = useContext(UserContext);

    function onNameChange(e) {
        user.setName(e.target.value)
    }
    function onLocationChange(e) {
        user.setLocation(e.target.value)
    }

    return (
        <div className="user-form">
            {/* Change user's name in context */}
            <div className="input-item">
                <label className="label">Update Name: </label>
                <input className="input" onChange={e => onNameChange(e)} />
            </div>

            {/* Change user's location in context */}
            <div className="input-item">
                <label className="label">Update Location: </label>
                <input className="input" onChange={e => onLocationChange(e)} />
            </div>
        </div>
    );
};

export default Form;
