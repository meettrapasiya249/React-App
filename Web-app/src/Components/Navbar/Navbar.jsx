import './Navbar.css'
import home from '../../assets/home-bg.jpg'   

const Navbar = () => {
  return (
    <header
      className='pt-3'
      style={{
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <h2>Blaster</h2>
          </div>
          <nav className='navbar navbar-expand-lg'>
            <ul className='navbar-nav d-flex flex-row'>
              <li>
                <a href="#" className='nav-link text-black'>HOME</a>
              </li>
              <li>
                <a href="#" className='nav-link text-black'>ABOUT</a>
              </li>
              <li>
                <a href="#" className='nav-link text-black'>PORTFOLIO</a>
              </li>
              <li>
                <a href="#" className='nav-link text-black'>TEAM</a>
              </li>
              <li>
                <a href="#" className='nav-link text-black'>CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hero">
          <hr/>
            <h2>WE ARE a DIGITAL STUDIO</h2>
            <h1>from California</h1>
            <a href=''>our process</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
