import React from 'react'

const NavListItem = ({ item , navOnClick }) => {
    // console.log(item);
        return (
        <>
            <li>
                <a href='#' className={`${item.active ? 'active' :undefined}`} onClick={()=>{navOnClick(item.id , item.target)}} >
                    <i className={`bi ${item.icon}`}></i>
                    <span className='navName'>{item.name}</span>
                </a>
            </li>
        </>
    )
}

export default NavListItem