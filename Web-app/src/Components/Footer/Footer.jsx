import './Footer.css';
import fi from '../../assets/foot.jpg';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-image">
                <img src={fi} alt="Footer Background" />
                <ul className="social-icons">
                    <li><a href="" className='me-4'><i className="ri-facebook-fill"></i></a></li>
                    <li><a href="" className='me-4'><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="" className='me-4'><i className="ri-behance-fill"></i></a></li>
                    <li><a href="" className='me-4'><i className="ri-earth-fill"></i></a></li>
                    <li><a href=""><i className="ri-github-fill"></i></a></li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
