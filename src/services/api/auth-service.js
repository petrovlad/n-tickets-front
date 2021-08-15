import axios from "axios";
import config from '../../config/config.json'

export const trySignIn = (username, password) => {
  const apiUrl = config.server + '/auth/signin';
  const payload = {username, password};
  return axios.post(apiUrl, payload)
    .then(response => {
      localStorage.setItem('jwt', response.data.access_token);
      return true;
    })
    .catch(err => {
      console.log(err)
    });
}

export const trySignUp = (email, username, password) => {
  const apiUrl = config.server + '/auth/signup';
  const payload = {email, username, password, roles:['user']};
  console.log(payload);
  return axios.post(apiUrl, payload)
    .then(response => {
      localStorage.setItem('jwt', response.data.access_token);
      return true;
    })
    .catch(err => {
      console.log(err)
    });
}

export const trySignOut = () => localStorage.removeItem('jwt');

export const checkSignedIn = () => localStorage.getItem('jwt');