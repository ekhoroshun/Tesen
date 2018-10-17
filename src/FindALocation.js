import React, { Component } from 'react';

class FindALocation extends Component {

    render(){
        return (
            <div class="search-location-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col location">
                        <h4>Find a Location</h4>
                        <div class="form-group search-wrapper position-relative">
                            <i class="fas fa-search"></i>
                            <input type="text" class="form-control searching" placeholder="Search cities and countries"/>
                        </div>
                        <p>Trending searches: Engineering Manager, Lead Software Engineer, San Francisco</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default FindALocation