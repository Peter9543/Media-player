import React from 'react'
import landingimage from '../assets/mediaplayer.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import settingimiage from '../assets/setting-image.webp'
import manageimage from'../assets/manage-image.jpg'
import historyimage from '../assets/history-image.jpg'

function Landing() {
  return (
    <>
    <div className='row'>
    <div className='col'>
        <h1>Welcome to <span className='text-danger'>Media Player</span></h1>
        <p className='d-flex justify-content-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat accusamus iste voluptatibus rerum deserunt voluptatem aliquid. Qui aut numquam suscipit quo, deleniti saepe illo incidunt id a facere iusto corporis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, sed voluptas veritatis praesentium quia dolore facilis voluptate, nostrum magni sequi dolores placeat non eveniet numquam aliquam eligendi delectus illo perferendis?

        </p>
        <button type="button" class="btn btn-success">Success</button>
    </div>
    <div className='col'>
      <img src={landingimage} alt="" />

    </div>
   <div className='row'>
    <span className='text-warning font ' style={{fontSize:'35px'}}>Features </span>
     <div className='col'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={settingimiage} />
          <Card.Body>
            <Card.Title>Managing videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        
        
     </div>
     <div className='col'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={manageimage} />
          <Card.Body>
            <Card.Title>Categorize videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
        
        
     </div>
     <div className='col'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={historyimage} />
          <Card.Body>
            <Card.Title>Manage History</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        
        
     </div>
   </div>
   <div className="row mt-5" style={{ border: "2px solid white" }}>
  <div className="col-md-6 col-sm-12">
    <h3 style={{ color: "orange" , fontWeight:"bold"}}>Simple, Fast, and Powerful</h3>
    <h6 style={{ fontWeight: "bold" }}>
      Play Everything: 
      <span style={{ fontWeight: "normal", color:"GrayText" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam accusamus tempore ratione et vitae cumque, doloremque ullam hic illum neque debitis a, nobis possimus pariatur tenetur voluptate quod ad!
      </span>
    </h6>
    <h6 style={{ fontWeight: "bold" }}>
      Categorize Videos: 
      <span style={{ fontWeight: "normal",color:"GrayText"  }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam accusamus tempore ratione et vitae cumque, doloremque ullam hic illum neque debitis a, nobis possimus pariatur tenetur voluptate quod ad!
      </span>
    </h6>
    <h6 style={{ fontWeight: "bold" }}>
      Managing History: 
      <span style={{ fontWeight: "normal" , color:"GrayText" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam accusamus tempore ratione et vitae cumque, doloremque ullam hic illum neque debitis a, nobis possimus pariatur tenetur voluptate quod ad!
      </span>
    </h6>
  </div>
  
  <div className="col-md-6 col-sm-12 p-3 d-flex justify-content-center align-items-center">
    <iframe 
      width="100%" 
      height="315" 
      src="https://www.youtube.com/embed/7h4FhEePjuU?si=E4jFHN0FkdF5bwIW" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
    ></iframe>
  </div>
</div>

    </div>
    </>
  )
}

export default Landing