import React from 'react';

function Welcome() {
  const user = localStorage.getItem('user');
  let fullname = '';
  let mobile = '';
  let email = '';

  if (user) {
    const newUser = JSON.parse(user);
    fullname = newUser.fullname;
    mobile = newUser.mobile;
    email = newUser.email;
  }
  let message = '';

  if (fullname || email || mobile) {
    message = (
      <div>
        Fullname: {fullname} Email: {email} Mobile:{mobile}
      </div>
    );
  } else {
    message = <div>No User Registered</div>;
  }

  return <div>{message}</div>;
}

export default Welcome;
