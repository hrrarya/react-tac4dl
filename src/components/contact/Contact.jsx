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
    img: null
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value || URL.createObjectUrl(e.target.files[0])
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
  }


  render() {
    let {fname,lname,workplace, phone,email, img} = this.state;
    return (
      <div className="contact">
        <form onSubmit={this.handleOnSubmit}>
           <div className="row text-center">
             <div className="four columns img-file">
              {img ? <img src={img} alt={fname}/> : <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3.2"/>
                  <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  <path d="M0 0h24v24h-24z" fill="none"/>
                </svg>
              </span>}
              <input accept="image/*" className="u-full-width" type="file" name="img" onChange={this.handleOnChange}/>
             </div>
            <div className="eight columns">
                <input className="u-full-width" type="text" name="fname" value={fname} placeholder="First Name" onChange={this.handleOnChange}/>
                <input className="u-full-width" type="text" name="lname" value={lname} placeholder="Last Name" onChange={this.handleOnChange}/>
                <input className="u-full-width" type="text" name="workplace" value={workplace} placeholder="Workplace" onChange={this.handleOnChange}/>
              </div>
            </div>
              <input className="u-full-width" type="number" name="phone" value={phone} placeholder="Phone" onChange={this.handleOnChange}/>
              <input className="u-full-width" type="email" name="email" value={email} placeholder="Email" onChange={this.handleOnChange}/>
              <input className="button-primary" type="submit" value="Submit" onClick={this.handleOnSubmit}/>
           
        </form>
    </div>
    );
  }
}


export default connect(null, {addContact})(Contact);