import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './form.scss';
import Select from 'react-select';

function Form ({ submitHandler }) {
    const {  
        register, 
        formState: { errors },
        handleSubmit,
        reset,
        control
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
    
    const customStyles = {
        option: (styles, { isFocused, isSelected }) => {
            return {
                ...styles,
                background: isSelected ? '#ffe6e6' : 'none',
                color: '#9AA6AC',
                cursor: 'pointer'
            }
        },
        control: styles => ({ 
            width: 100 + '%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: '10px',
            paddingLeft: '10px',
            cursor: 'pointer'
         }),
         indicatorSeparator: styles => ({ display: 'none' }),
         dropdownIndicator: styles => ({ 
            display: 'flex',
            alignItems: 'center',
            width: '10px',
            height: '10px',
            background: "url('../images/select-arrow.svg') 50% 50% no-repeat",
          }),
          singleValue: styles => ({
              ...styles,
              color: '#9AA6AC'
           }),
           placeholder: styles => ({
            ...styles,
            color: '#9AA6AC'
         }),
      }

    const submit = (data) => {
        submitHandler(data)
        reset()
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
        <input 
        className='form__title' 
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
        <Controller
                control={control}
                defaultValue=""
                name="priority"
                render={({field: { onChange, value, ref }}) => (
                    <Select
                        styles={customStyles}
                        inputRef={ref}
                        options={priority}
                        value={priority.find(n => n.value === value) || ""}
                        onChange={val => onChange(val.value)}
                        placeholder="Priority"
                        isSearchable={false}
                    />
                )}
            />
            <input 
            className='form__points'
            placeholder='Points'
            {...register("points", {
                valueAsNumber: true,
                min: 1,
                max: 10,
            })}
            />
            <Controller
                control={control}
                defaultValue=""
                name="status"
                render={({field: { onChange, value, ref }}) => (
                    <Select
                        styles={customStyles}
                        inputRef={ref}
                        options={statuses}
                        value={statuses.find(n => n.value === value) || ""}
                        onChange={val => onChange(val.value)}
                        placeholder="Status"
                        isSearchable={false}
                    />
                )}
            />
        </div>
        <textarea 
        className='form__decsr'
        spellCheck="false"
        {...register("description", {
            required: true,
            maxLength: 300
        })}
        />
        <button className='form__button' type='submit'>Save</button>
    </form>
    );
}

export default Form;