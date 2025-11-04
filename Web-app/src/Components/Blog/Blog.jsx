import blog from '../../assets/blog.png'

const Blog = () => {

    return (
        <>
            <section className="blog py-5">
            <div className="container">
                <div className="row align-items-center"> 
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="blog-img me-5">
                            <img src={blog} alt="Blog" style={{ width: '100%' }} />
                        </div>
                    </div>
 
                    <div className="col-md-6">
                        <div className="blog-content">
                            <h3>Our Focus</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
 
                            <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div>
                                        <i className="ri-smartphone-line me-2 fs-2 "></i>
                                        <span>Mobile Apps</span>
                                    </div> 
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: '50%' }}
                                    ></div>
                                </div>
                            </div>

                             <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div>
                                        <i class="ri-link fs-2"></i>
                                        <span> Web Development</span>
                                    </div> 
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: '75%' }}
                                    ></div>
                                </div>
                            </div>

                             <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div>
                                        <i class="ri-cloud-line fs-2 me-2"></i>
                                        <span>Cloud Computing</span>
                                    </div>  
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: '35%' }}
                                    ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};


export default Blog;