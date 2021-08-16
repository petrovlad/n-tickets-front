import axios from "axios";
import {getConfig} from "../../jwt/request-config";
import config from '../../config/config.json'

export const getTicket = (hash) => {
  const apiUrl = config.server + '/ticket-' + hash;
  // maybe make util file with code below?
  return axios.get(apiUrl, getConfig())
    .then(response => {
      return response.data
    })
  // don't catch it, we'll catch it in component
}

