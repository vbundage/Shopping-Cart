import React from 'react';

const Input = ({
    title = "",
    type = "product",
    value = "",
    label = "",
    setState = (_) => null
}) => {
    if (label === "") {
        label = type.concat("-", title.toLowerCase())
    }

    const handleChange = (ev) => setState(ev.target.value);

    /**
     * htmlFor is required during build for React to recognize
     * that the for attribute is the special attribute for labels
     * 
     * defaultValue will set the value without making it readonly
     */
    return (
        <div className="input-group">
            <label htmlFor={label}>{title}</label>
            <input type="text" id={label} defaultValue={value} onKeyUp={handleChange} />
        </div>
    );
};

export default Input;