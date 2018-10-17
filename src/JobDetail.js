import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobDetail extends Component {

    constructor(props) {

        super(props);
        
        this.state = {}

    } 

    componentDidMount() {}

    render() {
        
        return (
            <div className="job-detail-wrapper h-100">
               
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Library</li>
                    </ol>
                </nav>
                    
                <div className="row mx-0 h-100">
                    <div className="col-md-2 left-sidebar-wrapper ">
                        
                        <div className="header text-center">
                            <img src={"image/company-profile.png"} alt="img"/>
                            <h4>Company Name</h4>
                            <button class="btn-apply btn">Apply Now</button>
                        </div>
                        <div className="body">
                            <div class="job-description-wrapper">

                                <ul className="list-unstyled">
                                    <li>
                                        <h6>Role</h6>
                                        <p>Associate UX Designer</p>
                                    </li>
                                    <li>
                                        <h6>Industry</h6>
                                        <p>IT / Computers - Software</p>
                                    </li>
                                    <li>
                                        <h6>Posted On</h6>
                                        <p>3 hours ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
      
                    </div>
                    <div className="col-md-10 h-100">
                        <div className="content-wrapper p-3">
                           
                                <h5>Job Description</h5> 
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                 <h5 class="mt30">Responsibilities</h5> 
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                 <h5 class="mt30">Requirements</h5> 
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
             
                          
                        </div>
                    </div>
                </div>
    
            </div>
        )
        
    }

}

export default JobDetail;