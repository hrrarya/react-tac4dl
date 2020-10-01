import React from "react";
import "./contact.css";
import { connect } from "react-redux";
import { addContact } from "../../store/actions/contactActions";
import { getGroup } from "../../store/actions/groupActions";
import { v4 as uuidv4 } from "uuid";

class Contact extends React.Component {
  state = {
    fname: "",
    lname: "",
    workplace: "",
    phone: "",
    email: "",
    gname: "",
    favourite: false,
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    const {
      fname,
      lname,
      workplace,
      phone,
      email,
      gname,
      favourite,
    } = this.state;
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      fname,
      lname,
      workplace,
      phone,
      email,
      gname,
      favourite,
      checked: false,
    };
    this.props.addContact(contact);
    this.setState({
      fname: "",
      lname: "",
      workplace: "",
      phone: "",
      email: "",
    });
  };

  render() {
    let { fname, lname, workplace, phone, email } = this.state;
    const { group } = this.props.group;

    return (
      <div className="contact">
        <h5>Add Contact</h5>
        <form onSubmit={this.handleOnSubmit}>
          <input
            className="u-full-width"
            type="text"
            name="fname"
            value={fname}
            placeholder="First Name"
            onChange={this.handleOnChange}
          />
          <input
            className="u-full-width"
            type="text"
            name="lname"
            value={lname}
            placeholder="Last Name"
            onChange={this.handleOnChange}
          />
          <input
            className="u-full-width"
            type="text"
            name="workplace"
            value={workplace}
            placeholder="Workplace"
            onChange={this.handleOnChange}
          />
          <input
            className="u-full-width"
            type="number"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={this.handleOnChange}
          />
          <input
            className="u-full-width"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleOnChange}
          />
          <select
            name="gname"
            className="u-full-width"
            onChange={this.handleOnChange}
          >
            <option>Select a group</option>
            {group
              .filter((g) => g.id !== "fabourite-group-id-i-am-arya")
              .map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.gname}
                  </option>
                );
              })}
          </select>
          <input
            className="button-primary"
            type="submit"
            value="Submit"
            onClick={this.handleOnSubmit}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.group,
});

export default connect(mapStateToProps, { addContact, getGroup })(Contact);
