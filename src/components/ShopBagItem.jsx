import React,{useContext} from 'react'
import './shopBagItem.css'
import { AppContext } from '../App';

const ShopBagItem = ({index , game}) => {
    const{bag , setBag} = useContext(AppContext)
    console.log(game);
    const handleRemoveFromBag=()=>{
        setBag(bag.filter(item => item._id !== game._id ))
    }
  return (
    <>
        <tr className='shopBagItem'>
        <th scope='row'>{index + 1}</th>
        <td>
            <img src={game.img} className='img-fluid'></img>
        </td>
        <td>{game.title}</td>
        <td>{game.price.toFixed(2)}</td>
        <td>{game.discount * 100}%</td>
        <td>${(game.price * (1- game.discount)).toFixed(2)}</td>
        <td><a  href='#' onClick={()=>{handleRemoveFromBag(game)}} ><i className ="bi bi-trash"></i></a></td>
        </tr>
    </>
  )
}

export default ShopBagItem