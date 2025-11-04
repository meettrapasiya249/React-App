import './Team.css';
import team1 from '../../assets/t1.jpg';
import team2 from '../../assets/t2.jpg';
import team3 from '../../assets/t3.jpg';

const Team = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="team-title text-center mt-3">
                        <h2>Our Team</h2>
                        <h6>CREATIVE TALENTS FROM WEST COAST</h6>
                    </div>

                    <div className="team-content mt-4">
                        <div className="row">
                            <div className="col-4 text-center team-content">
                                <img src={team1} alt="" className="img-fluid" />
                                <h5 className='mt-4'>Tracy</h5>
                                <h3>Designer</h3>
                            </div>

                            <div className="col-4 text-center team-content">
                                <img src={team2} alt="" className="img-fluid" />
                                <h5 className='mt-4'>Linda</h5>
                                <h3>Manager</h3>
                            </div>

                            <div className="col-4 text-center team-content">
                                <img src={team3} alt="" className="img-fluid" />
                                <h5 className='mt-4'>Mary</h5>
                                <h3>Developer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;