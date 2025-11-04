import './about.css'
import Card from 'react-bootstrap/Card';

const About = () => {

    return (
        <>
            <section className='about pt-5'>
  <div className="container">
    <div className="about-head text-center mb-5">
      <h2>ABOUT US</h2>
      <p>WE ARE TALENTED DESIGNERS & DEVELOPERS</p>
    </div>

    {/* Row wrapper for side-by-side layout */}
    <div className="row justify-content-center g-4">
      <div className="col-md-4">
        <Card style={{ border: 'none', backgroundColor: 'transparent', textAlign: 'start' }}>
          <Card.Body>
            <i className="ri-cloud-fill blog-icon"></i>
            <Card.Title className='about-title'>Planning</Card.Title>
            <Card.Text className='blog-content'>
              Blaster is free responsive layout from templatemo. Credit goes to Pixabay for images. You can change icons by looking at FontAwesome icons. Thank you for visiting our website.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card style={{ border: 'none', backgroundColor: 'transparent', textAlign: 'start' }}>
          <Card.Body>
            <i className="ri-cloud-fill blog-icon"></i>
            <Card.Title className='about-title'>Developing</Card.Title>
            <Card.Text className='blog-content'>
                Example: for phone icon. for mobile icon. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore te irure dolor in reprehenderit eu fugiat.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card style={{ border: 'none', backgroundColor: 'transparent', textAlign: 'start' }}>
          <Card.Body>
            <i className="ri-cloud-fill blog-icon"></i>
            <Card.Title className='about-title'>Launching</Card.Title>
            <Card.Text className='blog-content'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia deserunt mollit anim id.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</section>


        </>
    )
};


export default About;