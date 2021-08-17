import axios from "axios";
import config from '../../config/config.json'

export const trySignIn = (username, password) => {
  const apiUrl = config.backendServer + '/auth/signin';
  const payload = {username, password};
  return axios.post(apiUrl, payload)
    .then(response => {
      localStorage.setItem('jwt', response.data.token);
      return true;
    });
}

export const trySignUp = (email, username, password) => {
  const apiUrl = config.backendServer + '/auth/signup';
  const payload = {email, username, password, roles:['user']};
  return axios.post(apiUrl, payload)
    .then(response => {
      localStorage.setItem('jwt', response.data.token);
      return true;
    });
}

export const trySignOut = () => localStorage.removeItem('jwt');

export const checkSignedIn = () => localStorage.getItem('jwt');