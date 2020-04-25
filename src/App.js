import React from 'react';
import { GoogleLogin } from 'react-google-login';

import './App.css';

function App() {
  
  const clientId = "Your clientId";

  const responseGoogle = response => console.log(response);

  return (
    <div className="container">
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default App;