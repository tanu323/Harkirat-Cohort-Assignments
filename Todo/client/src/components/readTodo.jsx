import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Checkbox from './checkbox';

const TodoCard = ({ todoTobeRendered }) => {

    return (
        <motion.div
            drag                  // Enables the drag behavior
            // dragConstraints={reference}  // Defines the constraints for dragging, where `reference` is a variable holding the reference element
            whileDrag={{ scale: 1.5 }}   // Scales the element while it's being dragged
            dragElastic={0.1}           // Defines the elasticity of the drag behavior
            dragTransition={{ bounceStiffness: 100, bounceDamping: 200 }}  // Specifies the transition behavior after releasing the drag
            className='relative flex-shrink-0 text-[14px] h-60 w-48 rounded-[30px] bg-zinc-600/90 text-white px-6 py-8 overflow-hidden'
        >

            <div className='footer absolute inset-x-0 bottom-0 h-20'>
                {todoTobeRendered.title}
            </div>
            {todoTobeRendered.tasks.map((eachTask, index) => (
                <>
                    <Checkbox />
                    <div>{eachTask}</div>
                </>
            ))}
            <div>

            </div>
        </motion.div>
    )
}

export default TodoCard;
