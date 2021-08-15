import axios from "axios";
import {getConfig} from "../../jwt/request-config";
import config from '../../config/config.json'

export const getTickets = () => {
  const apiUrl = config.server + '/tickets';
  return axios.get(apiUrl, getConfig())
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    });
}

export const putTicket = (ticket) => {
  const apiUrl = config.server + "/tickets/" + ticket.uniqueHash;
  console.log(ticket);
  return axios.put(apiUrl, ticket, getConfig())
    .then(response => {
      console.log(response)
      return response
    })
    .catch(err => {console.log(err)})
}