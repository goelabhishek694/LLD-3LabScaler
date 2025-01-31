import React from 'react'
import './ProgressBar.css'

function ProgressBar({text, width}) {
  return (
    <div className='progressBar'>
        <div className='progressHolder' style={{width:`${width}%`}}>
            {text}
        </div>
    </div>
  )
}

export default ProgressBar
