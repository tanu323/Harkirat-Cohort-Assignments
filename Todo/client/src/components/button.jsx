import React from 'react'

const Mybutton = ({ buttonText, onClickHandler, buttonWidth, buttonHeight }) => {
    return (
        <button
            type="button"
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            onClick={onClickHandler}
        >
            <svg width={buttonWidth} height={buttonHeight} fill="currentColor" class="mr-2" aria-hidden="true">
                {/* path element is used inside an SVG (<svg>) element to define the shape or path of the vector graphic. */}
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            {buttonText}
        </button>
    )
}

export default Mybutton;
