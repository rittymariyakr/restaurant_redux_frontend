import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function RestReview({reviews}) {
  console.log(reviews);
  const [open, setOpen] = useState(false);
  return (
    <>
      <button  onClick={() => setOpen(!open)} className='btn btn-warning'>Click Here to View Reviews</button>
<Collapse in={open}>
      <div className='mt-5'>
      { 
            reviews?.map((item)=>(
               <>
                     <hr/>
                    <div className='mt-5'>
                        <h6>{item.name} : (<span>{item.date}</span>)</h6>
                        <p>Rating : {item.rating}</p>
                        <p>comments : {item.comments}</p>
                    </div>
               </>
            ))
          }
      </div>
      </Collapse>
    </>
  )
}

export default RestReview
