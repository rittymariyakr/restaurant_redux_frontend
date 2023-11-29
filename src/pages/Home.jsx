import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import {fetchrestaurant} from '../redux/restaurantSlice'

function Home() {
  //accessing the state
  const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);

  const dispatch = useDispatch()

    useEffect(()=>{
      //to update the value in state by using thunk api call
      dispatch(fetchrestaurant())
        
    },[])
  return (

    
    <>
    <Row >
        {allrestaurant?.length>0?
        allrestaurant.map((restaurant)=>(<Col className='p-3 py-5' sm={6} md={4}>
        <RestCard restaurant={restaurant}/>

    </Col>))
          
        :
        <p>Nothing to display</p>}
        
    </Row>
    </>
  )
}

export default Home
