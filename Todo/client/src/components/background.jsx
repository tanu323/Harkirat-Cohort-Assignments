import React from 'react'

// Background component renders a fixed-position div that covers the entire screen 
// and includes a centered h1 element with the text "Daily Tracker."

const Background = () => {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <h1 className='absolute top-1/2 left-1/3 -translate-x-[50%] -translate-y-[50%] text-[8vw] leading-none tacking-tighter font-Roboto font-semibold text-zinc-300'>Daily Tracker.</h1>
                {/* Elements with higher z-index values appear closer to the viewer or on top of elements with lower z-index values
                    within the same stacking context. */}
            </div >
        </>
    )
}

export default Background;
