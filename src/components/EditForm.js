import React, { useState } from 'react';

function EditForm({ saveHandler}) {

    const [newValue, setNewValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        saveHandler(newValue)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Write new title.
                <input 
                type="text" 
                value={newValue} 
                onChange={e => setNewValue(e.target.value)}
                />
            </label>
            <button type='submit'>SAVE</button>
        </form>
    );
}

export default EditForm;