import React from 'react'
import { useState } from 'react'
import './sideMenu.css'
import { navListData } from '../data/NavListData'
import { socialIcon } from '../data/Social-icon.json'
import NavListItem from './NavListItem'
import SocialIcon from './SocialIcon'


const SideMenu = ({ active ,sectionActive }) => {
    const [navData, setNavData] = useState(navListData);

    const handleNavOnClick = (id , target) => {
        console.log(id);

        const newNavData = navData.map((nav) => {
            nav.active = false;
            if (nav.id === id) {
                nav.active = true;
            }
            return nav;
            
        });
        setNavData(newNavData);
        sectionActive(target);
        
    }
    return (
        <div className={`sideMenu ${active ? "active" : undefined}`}>
            <a href='#' className='logo'>
                <span className='brand'>
                    <i className="bi bi-controller"></i>
                    Play</span>
            </a>
            <ul className='nav'>
                {
                    navData.map(item => {
                        return <NavListItem key={item.id} item={item} navOnClick={handleNavOnClick} />
                    })
                }
            </ul>
            <ul className='social'>
                {
                    socialIcon.map(item => {
                        return <SocialIcon key={item.id} item={item} />
                    })
                }
            </ul>
        </div>
    )
}

export default SideMenu