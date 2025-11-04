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
    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <div className="port-title text-center mb-5">
                        <h1>PORTFOLIO</h1>
                        <h6>MOBILE, WEB AND BRAND IDENTITY</h6>
                    </div>

                    <Navbar className="bg-body-tertiary">
                        <Container>
                            <Navbar.Toggle />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto port-nav">
                                    <Nav.Link href="#home" className='ms-4'>ALL</Nav.Link>
                                    <Nav.Link href="#link" className='ms-4'>HTML</Nav.Link>
                                    <Nav.Link href="#link" className='ms-4'>PHOTOSHOP</Nav.Link>
                                    <Nav.Link href="#link" className='ms-4'>WORDPESS</Nav.Link>
                                    <Nav.Link href="#link" className='ms-4'>MOBILE</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div>
                    <div className='mt-4'>
                        <div className="row">
                            <div className="col-4">
                                <img src={img1} alt="Portfolio 1" width={"520px"} height={"337px"}/>
                            </div>
                            <div className="col-4">
                                <img src={img2} alt="Portfolio 2" width={"520px"} height={"337px"}/>
                            </div>
                            <div className="col-4">
                                <img src={img3} alt="Portfolio 3" width={"520px"} height={"337px"}/>
                            </div>
                        </div>
                    </div>

                     <div>
                        <div className="row">
                            <div className="col-4">
                                <img src={img4} alt="Portfolio 1" width={"520px"} height={"337px"}/>
                            </div>
                            <div className="col-4">
                                <img src={img5} alt="Portfolio 2" width={"520px"} height={"337px"}/>
                            </div>
                            <div className="col-4">
                                <img src={img6} alt="Portfolio 3" width={"520px"} height={"337px"}/>
                            </div>
                        </div>
                    </div>

                     <div>
                        <div className="row">
                            <div className="col-4">
                                <img src={img7} alt="Portfolio 1" width={"520px"} height={"337px"}/>
                            </div>
                            <div className="col-4">
                                <img src={img8} alt="Portfolio 2" width={"520px"} height={"337px"}/>
                            </div>
                            <div className="col-4">
                                <img src={img9} alt="Portfolio 3" width={"520px"} height={"337px"}/>
                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
};


export default Portfolio;