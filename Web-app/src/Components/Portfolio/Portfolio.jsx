import { useState } from 'react';
import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import img1 from '../../assets/p-1.jpg';
import img2 from '../../assets/p-2.jpg';
import img3 from '../../assets/p-3.jpg';
import img4 from '../../assets/p-4.jpg';
import img5 from '../../assets/p-5.jpg';
import img6 from '../../assets/p-6.jpg';
import img7 from '../../assets/p-7.jpg';
import img8 from '../../assets/p-8.jpg';
import img9 from '../../assets/p-9.jpg';

const Portfolio = () => { 
  const [active, setactive] = useState('all');
 
  const images = [
    { src: img1, category: 'html' },
    { src: img2, category: 'photoshop' },
    { src: img3, category: 'wordpress' },
    { src: img4, category: 'mobile' },
    { src: img5, category: 'html' },
    { src: img6, category: 'photoshop' },
    { src: img7, category: 'wordpress' },
    { src: img8, category: 'mobile' },
    { src: img9, category: 'html' },
  ];
 
  const filtered = active === 'all' ? images : images.filter((img) => img.category === active);

  return (
    <section className="portfolio py-5">
      <div className="container">
        <div className="port-title text-center mb-5">
          <h1>PORTFOLIO</h1>
          <h6>MOBILE, WEB AND BRAND IDENTITY</h6>
        </div>
 
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
          <Container fluid className="justify-content-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="port-nav mx-auto text-center">
                <Nav.Link
                  onClick={() => setactive('all')}
                  className={active === 'all' ? 'active mx-2' : 'mx-2'}
                >
                  ALL
                </Nav.Link>
                <Nav.Link
                  onClick={() => setactive('html')}
                  className={active === 'html' ? 'active mx-2' : 'mx-2'}
                >
                  HTML
                </Nav.Link>
                <Nav.Link
                  onClick={() => setactive('photoshop')}
                  className={active === 'photoshop' ? 'active mx-2' : 'mx-2'}
                >
                  PHOTOSHOP
                </Nav.Link>
                <Nav.Link
                  onClick={() => setactive('wordpress')}
                  className={active === 'wordpress' ? 'active mx-2' : 'mx-2'}
                >
                  WORDPRESS
                </Nav.Link>
                <Nav.Link
                  onClick={() => setactive('mobile')}
                  className={active === 'mobile' ? 'active mx-2' : 'mx-2'}
                >
                  MOBILE
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
 
        <div className="row mt-4 g-4">
          {filtered.map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <div className="portfolio-item">
                <img
                  src={img.src}
                  alt={`Portfolio ${index + 1}`}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
