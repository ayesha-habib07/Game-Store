import React, { useState } from 'react'
import './categories.css'
import { FilterListData } from '../data/FilterListData.json'
import GameCard from '../components/GameCard'
// console.log(FilterListData);

const Categories = ({ games, reference }) => {
  const [data, setData] = useState(games)
  // console.log(games);
  // console.log(data);

  const [filters, setFilters] = useState(FilterListData);
  const handleFilterGames = (category) => {
    const newFilter = filters.map((filter) => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true
      }
      return filter;
    });
    setFilters(newFilter);
    if (category === 'All') {
      setData(games)
      return
    }
    setData(games.filter(game => game.category === category))
  }
  const [text, setText] = useState('')
  const handleSearchGames = (e) => {
    console.log(e.target.value);
   
    setData(prevGames => {
      if (!Array.isArray(prevGames) || typeof e.target.value !== 'string') {
        // Handle error condition, e.g., return an empty array
        return [];
      }
      return prevGames.filter(game =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    
    setText(e.target.value)
  }
  return (
    <>
      <section id='categories' className='categories' ref={reference}>
        <div className='container-fluid mt-2'>
          <div className='row'>
            <div className='col-lg-8 d-flex align-items-center  justify-content-start'>
              <ul className='filters'>
                {filters.map((filter) => {
                  return <li key={filter._id} className={`${filter.active ? 'active' : undefined}`} onClick={() => { handleFilterGames(filter.name) }} >{filter.name}  </li>
                })}
              </ul>
            </div>
            <div className='col-lg-4 d-flex align-items-center  justify-content-end'>
              <div className='search'>
                <i className="bi bi-search"></i>
                <input type='text' name='search' placeholder='Search' value={text} onChange={handleSearchGames}></input>
              </div>
            </div>
          </div>
          <div className='row'>
            {data.map((game) => {
              return <GameCard key={game._id} game={game} />;
            })}
          </div>

        </div>



      </section>
    </>
  )
}

export default Categories