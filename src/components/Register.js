import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      password: '',
      mobile: '',
      error: false
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log('You have successfully registered');
    console.log(this.state);
    const { fullname, email, mobile } = this.state;
    const newUser = { fullname, email, mobile };
    localStorage.setItem('user', JSON.stringify(newUser));

    this.props.history.push('/');
    this.setState({
      fullname: '',
      email: '',
      password: '',
      mobile: ''
    });
  }

  render() {
    return (
      <div className='register'>
        <form onSubmit={this.displayLogin}>
          <h2>Register</h2>

          <div className='name'>
            <input
              type='text'
              placeholder='Full Name'
              name='fullname'
              value={this.state.fullname}
              onChange={this.update}
            />
          </div>

          <div className='email'>
            <input
              type='text'
              placeholder='Enter your email'
              name='email'
              value={this.state.email}
              onChange={this.update}
            />
          </div>

          <div className='email'>
            <input
              type='text'
              placeholder='Enter your mobile'
              name='mobile'
              value={this.state.mobile}
              onChange={this.update}
            />
          </div>

          <div className='pasword'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.update}
            />
          </div>

          <input type='submit' value='Register' />
        </form>
      </div>
    );
  }
}

export default Register;
