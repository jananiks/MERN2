import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';  // Axios for making the token request

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract authorization code from the URL query string
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("https://www.fitbit.com/oauth2/authorize");
    
    if (authorizationCode) {
      // Exchange the authorization code for an access token
      fetchAccessToken(authorizationCode);
    } else {
      console.error("No authorization code found");
    }
  }, [location]);

  const fetchAccessToken = async (authorizationCode) => {
    const clientId = '23Q344';  // Replace with your Fitbit client ID
    const clientSecret = '308220f7116ea1e2a70bb579173155e3';  // Replace with your Fitbit client secret
    const redirectUri = 'http://localhost:3000/dietplan';  // Replace with your redirect URI

    // Make a POST request to the Fitbit API to exchange code for an access token
    const tokenUrl = "https://api.fitbit.com/oauth2/token";
    const body = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code: authorizationCode,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    });

    try {
      const response = await axios.post(tokenUrl, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      // Extract access token from the response
      const { access_token } = response.data;

      // Store the access token (e.g., in localStorage or context)
      localStorage.setItem('fitbit_access_token', access_token);

      // Redirect user to the DietPlan page
      navigate('/dietplan');
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  return  (
    <div style={styles.container}>
      <div style={styles.text}>Redirecting...</div>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
  },
  text: {
    fontSize: '50px',
    marginBottom: '20px',
  },
  loader: {
    border: '10px solid #f3f3f3',
    borderTop: '10px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  },
 
};

export default Callback;
