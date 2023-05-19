import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-full-stack-68510.cloudfunctions.net/api'
    //'http://127.0.0.1:5001/full-stack-68510/us-central1/api' //The API url (cloud function)
});

export default instance;