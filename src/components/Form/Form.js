import React from 'react';
import { useForm } from "react-hook-form";
import './form.scss';

function Form ({ submitHandler }) {
    const {  
        register, 
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm();


    const priority = [
        {
            value: 'major',
            label: 'Major'
        },
        {
            value: 'critical',
            label: 'Critical'
        },
        {
            value: 'minor',
            label: 'Minor'
        },
        {
            value: 'normal',
            label: 'Normal'
        }
    ]
    
    const statuses = [
        {
            value: 'to do',
            label: 'To do'
        },
        {
            value: 'in progress',
            label: 'In progress'
        },
        {
            value: 'test',
            label: 'Test'
        },
        {
            value: 'done',
            label: 'Done'
        }
    ]
    
    const submit = (data) => {
        submitHandler(data)
        reset()
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
        <input 
        className='form' 
        type="text" 
        placeholder="Title *"
        {...register("title", {
            required: 'Required field.',
            maxLength: 100
        })}
        />
        <span className='error'>
            { errors.title && errors.title.message}
        </span>
        <div className='form__options'>
            <select 
            className='form__priority'
            {...register("priority")}
            >
                <option value="">Priority</option>
                { priority.map(option => 
                    <option key={ option.value } value={ option.value }>{ option.label }</option>
                )}
            </select> 
            <input 
            type="number"
            className='form__points'
            {...register("number", {
                maxLength: 2,
                min: 1,
                max: 10,
            })}
            />
            <select 
            className='form__status'
            {...register("status")}
            >
                <option value="">Status</option>
                { statuses.map(option => 
                    <option key={ option.value } value={ option.value }>{ option.label }</option>
                )}
            </select> 
        </div>
        <textarea 
        className='form__decsr'
        {...register("description", {
            maxLength: 300
        })}
        />
        <button className='form__button' type='submit'>Create</button>
    </form>
    );
}

export default Form;