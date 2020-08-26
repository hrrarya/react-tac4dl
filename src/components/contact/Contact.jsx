import React from 'react';
import "./contact.css";
import {connect} from 'react-redux';
import {addContact} from '../../store/actions/contactActions';

class Contact extends React.Component {
  state = {
    fname: "",
    lname :"",
    workplace: "",
    phone: "",
    email: "",
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    
    this.props.addContact(this.state);

  }


  render() {
    let {fname,lname,workplace, phone,email} = this.state;
    return (
      <div className="contact">
        <form onSubmit={this.handleOnSubmit}>
            <input type="text" name="fname" value={fname} placeholder="First Name" onChange={this.handleOnChange}/>
            <input type="text" name="lname" value={lname} placeholder="Last Name" onChange={this.handleOnChange}/>
            <input type="text" name="workplace" value={workplace} placeholder="Workplace" onChange={this.handleOnChange}/>
            <input type="number" name="phone" value={phone} placeholder="Phone" onChange={this.handleOnChange}/>
            <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleOnChange}/>
            <input type="submit" value="Submit" onClick={this.handleOnSubmit}/>
        </form>

        <ul>
            {this.props.contact.contact.map((item,index) => <li key={index}>{item.fname}</li>)}
        </ul>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  contact:  state.contact
})

export default connect(mapStateToProps, {addContact})(Contact);