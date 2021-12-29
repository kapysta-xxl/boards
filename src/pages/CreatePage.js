import React from 'react';
import '../scss/createForm.scss';
import api from '../api/api';
import { useForm } from "react-hook-form";

function CreatePage() {
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
    
    const submitHandler = (data) => {
        console.log(data)
        reset()
        // e.preventDefault()
        // let linkPoints = Number.isInteger(+points) ? +points : 1;

        // let newTodo = {
        //     id: Math.random().toString().slice(14),
        //     title: title,
        //     descr: descr,
        //     priority: {
        //       status: prior.value,
        //       points: linkPoints
        //     },
        //     status: status.value
        //   }
        
        // console.log(newTodo)

        // api.post('/todos/', newTodo)
        // .then(res => console.log(res))
        // .catch(e => console.log(e))

    }

    return (
        <form className='createForm' onSubmit={handleSubmit(submitHandler)}>
            <input 
            className='createForm__title' 
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
            <div className='createForm__options'>
                <select 
                className='createForm__priority'
                {...register("priority")}
                >
                    <option value="">Priority</option>
                    { priority.map(option => 
                        <option key={ option.value } value={ option.value }>{ option.label }</option>
                    )}
                </select> 
                <input 
                type="number"
                className='createForm__points'
                {...register("number", {
                    maxLength: 2,
                    min: 1,
                    max: 10,
                })}
                />
                <select 
                className='createForm__status'
                {...register("status")}
                >
                    <option value="">Status</option>
                    { statuses.map(option => 
                        <option key={ option.value } value={ option.value }>{ option.label }</option>
                    )}
                </select> 
            </div>
            <textarea 
            className='createForm__decsr'
            {...register("description", {
                maxLength: 300
            })}
            />
            <button className='createForm__button' type='submit'>Create</button>
        </form>
    );
}

export default CreatePage;