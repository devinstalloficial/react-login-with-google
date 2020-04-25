# react-login-with-google

## ReactJS - Login with Google

**You will need to generate a clientId in order to implement login with google on your project.**

## Creating project on Google Developers

https://developers.google.com/identity/sign-in/web/sign-in

## Installing react-google-login

**Run the following command on the terminal within the React project**

npm install react-google-login

**When you created the project on Google Developers, a clientId is generated.**

**With this clientId, we will pass it on GoogleLogin.**

```JS
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
```

**To leave with basic centralized style.**

```JS
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```
