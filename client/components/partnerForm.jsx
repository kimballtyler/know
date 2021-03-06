import React from 'react';

class PartnerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      date: '',
      city: '',
      state: '',
      name: ''
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPartner = {
      date: this.state.date,
      city: this.state.city,
      state: this.state.state,
      name: this.state.name
    };
    fetch('/api/partners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPartner)
    });
    this.handleReset();
    this.props.setView('partners');
  }

  handleReset() {
    this.setState({
      date: '',
      city: '',
      state: '',
      name: ''
    });
    document.getElementById('partnerForm').reset();
  }

  render() {
    const date = this.state.date;
    const city = this.state.city;
    const state = this.state.state;
    const name = this.state.name;
    const header = {
      height: '8vh',
      backgroundColor: '#62B3F5',
      color: 'rgb(255, 255, 255'
    };
    const dateWidth = {
      maxWidth: '60%'
    };
    const locationWidth = {
      maxWidth: '60%'
    };
    const cityWidth = {
      maxWidth: '65%'
    };
    const stateWidth = {
      maxWidth: '45%'
    };
    const nameWidth = {
      maxWidth: '60%'
    };
    return (
      <div className="container">
        <div className="row">
          <form id="partnerForm" onSubmit={this.handleSubmit} onReset={this.handleReset} className="col-12">
            <div className="row" style={header}>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <button onClick={() => this.props.setView('partners')} type="reset" className="btn"><h6 className="whiteColor mt-1 mb-0">Cancel</h6></button>
                <h4 className="mb-0">New Partner</h4>
                <button type="submit" className="btn"><h6 className="whiteColor mt-1 mb-0">Add</h6></button>
              </div>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between border-bottom mt-3 pb-3">
              <label htmlFor="date" className="mb-0"><h5 className="mb-0">Date</h5></label>
              <input type="date" id="date" className="form-control" name="date" aria-label="date"
                aria-describedby="basic-addon1" style={dateWidth} value={date} onChange={this.handleChange} />
            </div>
            <div className="input-group d-flex align-items-center justify-content-between border-bottom pt-3 pb-3">
              <label htmlFor="location" className="mb-0"><h5 className="mb-0">Location</h5></label>
              <div className="d-flex" style={locationWidth}>
                <input type="text" id="location" className="form-control mr-2" name="city" placeholder="City" style={cityWidth} value={city} onChange={this.handleChange} />
                <select className="form-control" name="state" aria-label="location"
                  aria-describedby="basic-addon1" style={stateWidth} value={state} onChange={this.handleChange}>
                  <option defaultValue>State</option>
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </select>
              </div>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-3 pb-3">
              <label htmlFor="chlamydia" className="mb-0"><h5 className="mb-0">Name</h5></label>
              <input type="text" id="name" className="form-control" name="name" placeholder="Name" style={nameWidth} value={name} onChange={this.handleChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PartnerForm;
