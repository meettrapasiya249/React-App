import './Team.css';
import team1 from '../../assets/t1.jpg';
import team2 from '../../assets/t2.jpg';
import team3 from '../../assets/t3.jpg';

const Team = () => {
  return (
    <section className="team-section py-5">
      <div className="container">
        <div className="team-title text-center mb-5">
          <h2>Our Team</h2>
          <h6>CREATIVE TALENTS FROM WEST COAST</h6>
        </div>

        <div className="team-content">
          <div className="row justify-content-center g-4"> 
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <div className="team-member">
                <img src={team1}   className="img-fluid rounded-circle mb-3" />
                <h5>Tracy</h5>
                <h6>Designer</h6>
              </div>
            </div>
 
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <div className="team-member">
                <img src={team2}   className="img-fluid rounded-circle mb-3" />
                <h5>Linda</h5>
                <h6>Manager</h6>
              </div>
            </div>
 
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <div className="team-member">
                <img src={team3}   className="img-fluid rounded-circle mb-3" />
                <h5>Mary</h5>
                <h6>Developer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
