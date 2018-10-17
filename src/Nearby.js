import React, { Component } from "react";
import {  Row, Col} from 'reactstrap';
import Card from './Card';

class Nearby extends Component{

    render(){
        return(
           <div>
           <Row>
                  <Col sm="12">
                  <h4 className="main-text-style">Near by</h4>
                  <div class="card-group">
                  <Card image={"image/d4.jpg"} text={"Lorem Ipsum is simply dummy text"} rating={false} />
                  <Card image={"image/d5.jpg"} text={"Lorem Ipsum is simply dummy text"} rating={false} />
                  <Card image={"image/d6.jpg"} text={"Lorem Ipsum is simply dummy text"} rating={false} />
                  <Card image={"image/d7.jpg"} text={"Lorem Ipsum is simply dummy text"} rating={false} />
                 </div>
                  </Col>
                </Row>
                </div>
        )
    }

}

export default Nearby