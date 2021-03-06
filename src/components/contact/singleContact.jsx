import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {FcEditImage} from 'react-icons/fc';

class SingleContact extends Component {
  state = {
    id: "",
    contact: "",
    groupName: {}
  };

  componentDidMount() {
    const contact = this.props.contact.contact.find(
      item => item.id === this.props.match.params.id
    );
    const groupName = this.props.group.group.find(
      item => item.id === contact.gname
    );
    this.setState({
      id: this.props.match.params.id,
      contact,
      groupName
    });
  }

  render() {
    const { fname, lname, email, phone, workplace } = this.state.contact;
    const { id, groupName } = this.state;
    return (
      <div className="single-contact">
        <div className="row">
          <div className="four columns">
            <div className="img-file">
              <span>
                <img
                  src={
                    "https://cdn.jsdelivr.net/gh/hrrarya/react-tac4dl@master/src/img/avater.jpg"
                  }
                  alt="contact-avater"
                />
              </span>
              <input name="Select File" type="file" />
            </div>
          </div>
          <div className="eight columns contact-data">
            <h5>
              {fname} {lname}{" "}
              <Link to={`/contact-edit/${id}`}>
                <FcEditImage style={{marginLeft: '20px'}}/>
              </Link>
            </h5>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{workplace}</p>
            <p>{groupName ? groupName.gname : ""}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contact: state.contact,
  group: state.group
});
export default connect(mapStateToProps, null)(SingleContact);
