import axios from "axios";
import {getConfig} from "../../jwt/request-config";
import config from '../../config/config.json'

export const getTickets = () => {
  const apiUrl = config.server + '/tickets';
  return axios.get(apiUrl, getConfig())
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    });
}

