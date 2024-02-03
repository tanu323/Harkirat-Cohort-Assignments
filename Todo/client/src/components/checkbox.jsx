import React from 'react'

const Checkbox = ({ isChecked, setIsChecked }) => {

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="appearance-none w-3 h-3 bg-transparent border-2 border-zinc-200 rounded-full checked:bg-indigo-600 checked:border-transparent shadow-md transition duration-150 ease-in-out"
        />
    )
}

export default Checkbox;
