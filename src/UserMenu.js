import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class UserMenu extends Component{
constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            dropdownOpen: false
          };
        }
      
        toggle() {
          this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
          }));
        }
      
        render() {
          return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle tag="a" className="nav-link" caret>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Subscription</DropdownItem>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Order History</DropdownItem>
                <DropdownItem>Email/Notification</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
        }
      
}

export default UserMenu