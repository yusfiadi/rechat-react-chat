import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import 'firebase/app'
import { auth } from '../firebase'
import firebase from 'firebase/app'

const Login = () => {

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to ReChat!</h2>

        <button className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined /> Sign in With Google
        </button>
      </div>
    </div>
  )
}

export default Login