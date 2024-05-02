import React, { useEffect } from 'react'
import './myBag.css'
import ShopBagItem from '../components/ShopBagItem'
import { useState } from 'react'

const MyBag = ({ games, reference }) => {
  const [total, setTotal] = useState(0);

  const handleTotalpayment = () => {
    return games
        .map(game => game.price * (1 - game.discount))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2);
}  
  useEffect(()=>{
   setTotal( handleTotalpayment())
  },[games])
  return (
    <>
      <section id='bag' className='bag' ref={reference}>
        <div className='container-fluid'>
          <div className='row mb-3'>
            <h1>My Bag</h1>
          </div>
          <div>
            {games.length === 0 ? (<h2>Your bag is empty</h2>) : (
              <>
                <div className='row'>
                  <div className='table-responsive'>
                    <table className='shopBagTable table table-borderless align-middle'>
                      <thead>
                        <tr>
                          <th scope='col'>No.</th>
                          <th scope='col'>Preview</th>
                          <th scope='col'>Game</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Discount</th>
                          <th scope='col'>Payment</th>
                          <th scope='col'>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {games.map((game, index) => {
                         return <ShopBagItem index={index} key={game.id} game={game} />
                        })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='row d-flex justify-content-between mt-5'>
                  <div className='col-lg-2 d-flex align-items-center'>
                  <p className='itemCounts'>Total Items:{games.length}</p>

                  </div>
                  <div className='col-lg-10 d-flex justify-content-end' >
                    <div className='payment'>
                      Total:{total}
                      <a href='#' >Check out   <i className="bi bi-wallet"></i></a>
                    </div>
                  </div>
                </div>
              </>
            )

            }
          </div>
        </div>
      </section>
    </>
  )
}

export default MyBag