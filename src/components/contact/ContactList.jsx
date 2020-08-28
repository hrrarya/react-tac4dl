import React from 'react';
import {connect} from 'react-redux';

class ContactList extends React.Component {
  render() {
    return (
      <table className="contact-list u-full-width">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Workplace</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contact.contact.map(item => <tr>
            <td>{`${item.fname} ${item.lname}`}</td>
            <td>{item.img && <img src={item.img} alt={item.fname}/>}</td>
            <td>{item.workplace}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact
})


export default connect(mapStateToProps)(ContactList);