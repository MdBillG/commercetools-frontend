import { ChevronDown, ChevronUp, CircleChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const Accordion = ({ name, children }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    return (
        <div>
            <div className='flex justify-between w-1/4'>
                <h1>{name}</h1>
                {!isAccordionOpen && (
                    <button onClick={() => setIsAccordionOpen(true)}>
                        <ChevronDown />
                    </button>
                )}
                {isAccordionOpen && (
                    <button onClick={() => setIsAccordionOpen(false)}>
                        <ChevronUp />
                    </button>
                )}
            </div>
            {isAccordionOpen && (
                <div>{children}</div>
            )}

        </div >
    )
}

export default Accordion
