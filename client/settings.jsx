import React from 'react';
import Navbar from './navbar';
function Settings() {
  return (
    <div className="visit d-flex justify-content-between align-items-center mt-4 mb-4">
      <div className="col-11">
        <div>Email</div>
        <div>
          <div className="blueColor">&gt;</div>
        </div>
      </div>
      <div className="col-11">
        <div>Password</div>
        <div>
          <div className="blueColor">&gt;</div>
        </div>
      </div>
      <div className="col-11">
        <div>Log Out</div>
        <div>
          <div className="blueColor">&gt;</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
export default Settings;
