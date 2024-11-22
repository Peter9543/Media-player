import React from 'react'
import { Link } from 'react-router-dom'


function Footer1() {
  return (
    <>
        <footer>
      <div className="row " >
        <div className="col">
          <i class="fa-solid fa-music"></i>
        MediaPlayer
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non itaque labore tempora id atque optio perferendis aspernatur neque magni. Maxime qui aut eos ad, quis voluptate eius nulla! Nihil!</p></div>
      <div className="col"><h4>Links</h4>
      <Link to={'/'} style={{textDecoration:'none'}}><h5>Landing</h5></Link>
      <Link to={'/home'}style={{textDecoration:'none'}}><h5>Home</h5></Link>
      <Link to={'/history'} style={{textDecoration:'none'}}><h5>History</h5></Link>
      </div>
      <div className="col"><h4>Guides</h4>
      <h5>react</h5>
      <h5>react bootstrap</h5>
      <h5>watch router</h5>
      </div>
      <div className="col"><h5>Contact Us</h5>
      <input type="text " placeholder='enter your Email' />
      <div className='d-flex mt-3'>
        <i class="fa-brands fa-facebook ms-5"></i>
        <i class="fa-brands fa-instagram ms-2"></i>
        <i class="fa-brands fa-x-twitter ms-2"></i>
        <i class="fa-brands fa-github ms-2"></i>
      </div>
      </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'><p>copyright &copy; Peter Tomy</p></div>
    </footer>
    </>
  )
}

export default Footer1