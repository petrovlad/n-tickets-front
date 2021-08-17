import axios from "axios";
import {getConfig} from "../../jwt/request-config";
import config from '../../config/config.json'

export const getTickets = () => {
  const apiUrl = config.backendServer + '/tickets';
  return axios.get(apiUrl, getConfig())
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    });
}

export const putTicket = (ticket) => {
  const apiUrl = config.backendServer + "/tickets/" + ticket.uniqueHash;
  return axios.put(apiUrl, ticket, getConfig())
    .then(response => {
      return response;
    })
    .catch(err => {console.log(err)});
}

export const postTicket = (ticket) => {
  const apiUrl = config.backendServer + "/tickets/";
  return axios.post(apiUrl, ticket, getConfig())
    .then(response => {
      return response;
    })
    .catch(err => {console.log(err)})
}

export const deleteTicket = (ticket) => {
  const apiUrl = config.backendServer + "/tickets/" + ticket.uniqueHash;
  return axios.delete(apiUrl, getConfig())
    .then(response => {
      return response;
    })
    .catch(err => {console.log(err)})
}
