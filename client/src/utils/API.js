import axios from 'axios';


const API =  {

    login: function (loginData) {
        return axios.post(`/api/auth/login`, loginData, { withCredentials: true })
    },


    signup: function (signUpData) {
        return axios.post(`/api/auth/register`, signUpData, { withCredentials: true })
    }
    
}

export default API;