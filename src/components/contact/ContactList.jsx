import React from "react";
import "./contact.css";
import { connect } from "react-redux";
import {
  removeContact,
  addFavourite
} from "../../store/actions/contactActions";
import { Link } from "react-router-dom";

class ContactList extends React.Component {
  state = {};

  handleFavourite = bool => {
    if (bool) return { color: "red" };

    return { color: "gray" };
  };

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
              <th>Add to favourite</th>
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
              const fav = item.favourite;
              return (
                <tr key={item.id} id={item.id}>
                  <td>
                    <Link
                      to={`/contact-list/${item.id}`}
                    >{`${item.fname} ${item.lname}`}</Link>{" "}
                  </td>
                  <td>{item.workplace}</td>
                  <td>
                    <span
                      role="img"
                      aria-label="1"
                      style={this.handleFavourite(fav)}
                      onClick={() =>
                        this.props.addFavourite({ id: item.id, fav })
                      }
                    >
                      ❤️
                    </span>
                  </td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/group-list/${item.gname}`}>
                      {groupName ? groupName.gname : ""}
                    </Link>
                  </td>
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

export default connect(mapStateToProps, { removeContact, addFavourite })(
  ContactList
);
