import React from 'react'

const Mybutton = ({ buttonText, onClickHandler, buttonWidth, buttonHeight }) => {
    console.log("At onclickhandler", onClickHandler);
    return (
        <button
            type="button"
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            onClick={onClickHandler}
        >
            {buttonText}
        </button>
    )
}

export default Mybutton;
