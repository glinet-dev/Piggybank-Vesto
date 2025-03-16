import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import LogoImg from './LogoImg';
import '../../styles/auth.scss';

const Signin = () => {
    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
        // Handle successful login here
    };

    const handleLoginFailure = (error) => {
        console.log('Login Failed:', error);
        // Handle login failure here
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="auth-signup-wrap">
                
                <LogoImg/>
                <p>Piggybank Vesto</p>
                <p>Sigin</p>
                <input type='email'/><br/>
                <input type='password'/><br/>
                <input type='submit' value="Sign In"/><br/>

                <p>or</p>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onFailure={handleLoginFailure}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Signin;