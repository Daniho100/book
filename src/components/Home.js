import React from 'react'
import Navbar from './Navbar'

const Home = (props) => {
  return (
<div>
    <Navbar name={props.name} bio={props.bio} profession={props.profession}/>
    <h4>This is Home Page. We are talking about {props.name}, who was {props.bio} and a {props.profession}.</h4>
   


    {/* <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Address</label>
    <input type="address" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div> */}


    </div>
  )
}

export default Home