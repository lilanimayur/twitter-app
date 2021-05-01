import React from 'react'
import './sidebarOptions.css'

function SidebarOptions({active, text, Icon}) {
    return (
        <div className={`sidebaroption ${active && 'sidebaroption--active'}`} >
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
