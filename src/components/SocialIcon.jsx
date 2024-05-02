import React from 'react'

const SocialIcon = ({ item }) => {
    return (
        <>
            <li>
                <a href='#'>
                    <i className={`bi ${item.icon}`}></i>
                </a>
            </li>
        </>
    )
}
export default SocialIcon