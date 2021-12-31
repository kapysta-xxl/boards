import React from 'react';
import Form from '../components/Form/Form';

function CreatePage() {
    
    const submitHandler = (data) => {
        console.log(data)
    }

    return (
        <Form submitHandler={submitHandler}/>
    );
}

export default CreatePage;