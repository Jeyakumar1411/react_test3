import React from 'react'
import ReactDOM from 'react-dom'

const Portals = () => {
  return ReactDOM.createPortal(

    //in this method to create a new root "div" in the index.html.
    <div>
        This is a portal
    </div>,
    document.getElementById('custom-root')
  )
}

export default Portals