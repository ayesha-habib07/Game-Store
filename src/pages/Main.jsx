import React, { useState, useEffect, useRef , useContext } from 'react'
import './main.css'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import Home from './Home'
import Categories from './Categories'
import MyLibrary from './MyLibrary'
import MyBag from './MyBag'
import { AppContext } from '../App'



const Main = () => {
  const [active, setActive] = useState(false)
  const [games, setGames] = useState([])

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const {library, bag} = useContext(AppContext)

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,
    },
    {
      name: 'bag',
      ref: bagRef,
      active: false,
    }
  ]

  const handleSectionActive = (target) => {
    sections.map((section) => {
      // console.log(section.ref.current);
      section.ref.current.classList.remove('active')
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active')
      }
      return section
    })

  }
  const handleToggleActive = () => {
    setActive(!active)

  }


  const fetchData = () => {
    fetch(`http://localhost:5173/api/gamesData.json`)
      .then(res => res.json())
      .then(data => {
        setGames(data);
        // console.log(data);
      })
      .catch(e => console.log(e.message))
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className='container-fliud'>


          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <MyLibrary games={library} reference={libraryRef} />
              <MyBag games={bag} reference={bagRef} />
            </>
          )}


        </div>
      </div>
    </main>
  )
}
export default Main