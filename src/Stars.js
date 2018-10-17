import React, { Component } from 'react';

class Stars extends Component {



    renderStars() {
                let stars = [];
                for (let i = 0; i < this.props.rating; i++) {
                    stars.push(<i style={{color:"yellow"}}class="fas fa-star"></i>)
                }
             return stars;
    }

    render(){
         return (
                <div>{this.renderStars()}</div>
        )
    }
}

export default Stars