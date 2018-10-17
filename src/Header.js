import React, { Component } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            isMenuOpenned: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            isMenuOpenned: !this.state.isMenuOpenned
        });
    }

    render() {
        return [
            <div className={(this.state.isMenuOpenned) ? 'sidemenu-wrapper' : 'sidemenu-wrapper closed'} key="side-menu">
                <div class="w-100 sidemenu-header d-flex align-items-center justify-content-between">
                    <img src="/image/tesen-logo.png" alt="img" className="logo"/> <i className="fas fa-bars menu-toggle" onClick={() => this.toggleMenu()}></i>
                </div>
                <div className="sidemenu-body">
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="menu-icon icon-16"></i>
                            </div>
                            <div className="label-holder">Section 1</div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="menu-icon icon-17"></i>
                            </div>
                            <div className="label-holder">Section 2</div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="menu-icon icon-18"></i>
                            </div>
                            <div className="label-holder">Section 3</div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="menu-icon icon-19"></i>
                            </div>
                            <div className="label-holder">Section 4</div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="menu-icon icon-21"></i>
                            </div>
                            <div className="label-holder">Jobs</div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="menu-icon icon-22"></i>
                            </div>
                            <div className="label-holder">My World</div>
                        </li>

                        
                    </ul>
                </div>
            </div>,
            <nav class="navbar navbar-expand-md navbar-light fixed-top nav-styling" key="navbar">
                <i className="fas fa-bars menu-toggle" onClick={() => this.toggleMenu()}></i><img src="/image/tesen-logo.png"  alt="img" className="logo"/>
                <div class="navbar-nav ml-auto">
                    <div>
                        <div class="d-flex user-info-wrapper align-items-center">
                            <div class="data-holder">
                                Welcome<br/>Marie
                            </div>
                            <div class="avatar-holder"> <img style={{width: 35}} src={"/image/profile_img.png"}  alt="img"/></div>
                                <UncontrolledButtonDropdown>
                                  <DropdownToggle tag="a" className="nav-link" caret>
                                    </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Subsriptions</DropdownItem>
                                    <DropdownItem>Account</DropdownItem>
                                    <DropdownItem>Order History</DropdownItem>
                                    <DropdownItem>E-mail / Notifications</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledButtonDropdown>
                               
                        </div>
                
                    </div>  
                </div>
            </nav>
            ]
        }
    }

export default Header