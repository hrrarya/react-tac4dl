import React from "react";
import "./contact.css";
import { connect } from "react-redux";
import { removeContact } from "../../store/actions/contactActions";
import { getGroup } from "../../store/actions/groupActions";
import { Link } from "react-router-dom";

class ContactList extends React.Component {
  render() {
    const { contact } = this.props.contact;
    const { group } = this.props.group;
    return (
      <div className="row">
        <Link to="/create-contact">
          <button className="contact-create">+</button>
        </Link>
        <table className="contact-list u-full-width">
          <thead>
            <tr>
              <th>Name</th>
              <th>Workplace</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Group</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact.map(item => {
              const groupName = group.filter(
                group => group.id === item.gname
              )[0];
              console.log(groupName);
              return (
                <tr key={item.id} id={item.id}>
                  <td>{`${item.fname} ${item.lname}`}</td>
                  <td>{item.workplace}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{groupName?.gname}</td>
                  <td>
                    <button onClick={() => this.props.removeContact(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
  group: state.group
});

export default connect(mapStateToProps, { removeContact })(ContactList);
