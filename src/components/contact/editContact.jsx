import React, { Component } from "react";
import { connect } from "react-redux";
import { editContact } from "../../store/actions/contactActions";

class EditContact extends Component {
  state = {
    id: "",
    fname: "",
    lname: "",
    workplace: "",
    phone: "",
    email: "",
    group: "",
    favourite: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { contact } = this.props.contact;
    const { group } = this.props.group;
    const {
      fname,
      lname,
      workplace,
      phone,
      email,
      gname,
      favourite
    } = contact.find(item => item.id === id);

    const contactGroup = group.find(item => item.id === gname);
    this.setState({
      id,
      fname,
      lname,
      workplace,
      phone,
      email,
      favourite,
      group: contactGroup ? contactGroup.id : ""
    });
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const {
      id,
      fname,
      lname,
      workplace,
      phone,
      email,
      group,
      favourite
    } = this.state;
    const contact = {
      id,
      fname,
      lname,
      workplace,
      phone,
      email,
      favourite,
      gname: group || ""
    };
    this.props.editContact(contact);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      fname: "",
      lname: "",
      workplace: "",
      phone: "",
      email: "",
      group: ""
    });
  };

  render() {
    const { fname, lname, workplace, phone, email, group } = this.state;
    const { group: groups } = this.props.group;
    return (
      <div className="contact">
        <h5>Edit Contact</h5>
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
            name="group"
            className="u-full-width"
            onChange={this.handleOnChange}
          >
            <option>Select a group</option>
            {groups
              .filter(g => g.id !== "fabourite-group-id-i-am-arya")
              .map(item => {
                return (
                  <option
                    key={item.id}
                    value={item.id}
                    defaultValue={item.id === group || ""}
                  >
                    {item.gname}
                  </option>
                );
              })}
          </select>
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contact: state.contact,
  group: state.group
});
export default connect(mapStateToProps, { editContact })(EditContact);
