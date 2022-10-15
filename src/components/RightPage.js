import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'

function RightPage() {
    const text = useSelector(state => state.text.item);
    const helpActive = useSelector(state => state.text.helpActive)
    const helpText = useSelector(state => state.text.helpText)
    return (
        <div className='col d-flex    justify-content-center'>
            <div className='pt-4 ps-2  boxside right'>
                <ReactMarkdown>{helpActive ? helpText : text}</ReactMarkdown>
            </div>
        </div>
    )
}

export default RightPage