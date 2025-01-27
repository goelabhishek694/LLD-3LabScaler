import React, { isValidElement } from 'react'
import useVisibility from '../usevisibility'

function Modal({isVisible, hide}) {
    if(!isVisible) return null;
  return (
    <div className="modal-overlay">
        <div className="modal">
            <h2>Modal Title</h2>
            <p>This is a modal</p>
            <button onClick={hide}>Close</button>
        </div>
    </div>
  )
}

export default Modal