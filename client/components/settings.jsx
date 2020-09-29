import React from 'react';
import Navbar from './navbar';
import AddModal from './addModal';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {};
  }

  logout() {
    fetch('/api/logout');
    this.props.setView('welcome');
  }

  render() {
    let addModal = null;
    if (this.props.addModal) {
      addModal = <AddModal addModalToggle={this.props.addModalToggle} setView={this.props.setView} />;
    }
    return (
      <div className="container active5">
        <div className="row d-flex justify-content-center">
          <div className="col-11 d-flex justify-content-center">
            <h2 className="mt-3 mb-3">Settings</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
            <div>Email</div>
            <div>
              <div className="blueColor">&gt;</div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
            <div>Password</div>
            <div>
              <div className="blueColor">&gt;</div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
            <div>Privacy Policy</div>
            <div>
              <div className="blueColor">&gt;</div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
            <div>Help</div>
            <div>
              <div className="blueColor">&gt;</div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div onClick={this.logout} className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
            <div>Log Out</div>
            <div>
              <div className="blueColor">&gt;</div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navbar addModalToggle={this.props.addModalToggle} setView={this.props.setView} />
          </div>
        </div>
        {addModal}
      </div>
    );
  }

}
export default Settings;
