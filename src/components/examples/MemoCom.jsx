import React from 'react'

const MemoCom = ({name}) => {

    console.log("Rendering Memo Component")

    return (
        //in the method memo to block the unwanted api requests (only refreshing the nessesary data in the component)
        <div>{name}</div>
    )
}

export default React.memo(MemoCom)