import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleGroup extends Component {
  render() {
    const { id } = this.props.match.params;
    const { group } = this.props.group;
    const { contact } = this.props.contact;
    const allGroupContact = contact.filter(item => item.gname === id);
    const groupName = group.find(item => item.id === id);
    return (
      <ul>
        <Link to="/create-contact">
          <button className="contact-create">+</button>
        </Link>
        <li>
          {groupName.gname}
          <ul>
            {allGroupContact.length > 0
              ? allGroupContact.map(item => (
                  <li key={item.id}>
                    {item.fname} {item.lname}
                  </li>
                ))
              : "No contact found"}
          </ul>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  group: state.group,
  contact: state.contact
});
export default connect(mapStateToProps, null)(SingleGroup);
