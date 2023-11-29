import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrestaurant } from '../redux/restaurantSlice';

function RestView() {
    const [show, setShow] = useState(false);

    const {id} = useParams()
    console.log(id);

    const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
    console.log(allrestaurant);
    
    const selectedResturant = allrestaurant.find((item) => item.id==id);
    console.log(selectedResturant);
 
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(fetchrestaurant())
    }, [])



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
    <Row className=' ms-5 mt-4 mb-5'>
        <Col md={1}></Col>
        <Col md={3}>
        <img height={'450px'} src={selectedResturant?.photograph} alt="" />
        </Col>
        <Col md={7}>
        <div>
            <hr />
            <h4 className='text-center'><span className='text-warning'>RESTAURANT</span>  DETAILS</h4>
            <hr />
            
            <ListGroup>
               
      <ListGroup.Item className='p-4 text-center'><h5>{selectedResturant?.name}</h5></ListGroup.Item>
     
      <ListGroup.Item>Neighborhood: {selectedResturant?.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type: {selectedResturant?.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address: {selectedResturant?.address}</ListGroup.Item>
      <ListGroup.Item className='p-4 text-center  '>
        <button onClick={handleShow} className='btn btn-warning me-4'>Operating Hours</button>
        {/* <button className='ms-5 btn btn-warning'>Click Here to See Reviews</button> */}

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday : {selectedResturant?.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {selectedResturant?.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {selectedResturant?.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {selectedResturant?.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {selectedResturant?.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {selectedResturant?.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {selectedResturant?.operating_hours.Sunday}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>    
      </Modal>

      <RestReview reviews={selectedResturant?.reviews}/>
      </ListGroup.Item>
    </ListGroup>
        </div>
        </Col>
        <Col md={1}></Col>
    </Row>
    </>
  )
}

export default RestView
