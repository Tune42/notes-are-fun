import React, {useState} from 'react';

const InputField = (props) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCategory(value);
        setValue('');
    }

    return(
        <div className='my-menu-input-field'>
            <form onSubmit={handleSubmit}>
                <label className='has-text-white'>Add a Category:</label>
                <input type="text" onChange={(e) => setValue(e.target.value)} value={value}
                className="input is-primary" />
            </form>
        </div>
    )
}

export default InputField