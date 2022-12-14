/**Aquí se recupera el token api del back-end mediante una peticion get que ya existe en el back
este archivo va en el Front-End
para hacer peticiones al back ahora solo debe exportar este archivo y utilizar el axiosPublic.get o post por ejemplo.
lo mismo si desea crear axiosPrivate*/
import axios from 'axios'

const axiosPublic = axios.create();
axiosPublic.defaults.baseURL = 'http://localhost:3001/api'

axiosPublic.get('/authapi/security').then((response) => {
    axiosPublic.defaults.headers.common['apikey'] = response.data
});

axiosPublic.defaults.headers.common['Content-Type'] = 'application/json'

axiosPublic.defaults.headers.common['cache-control'] = 'no-cache'

export {
    axiosPublic
}

/**esta parte de codigo va en otro archivo, pertece al login lo agrego aqui solo como ejemplo de que al tener el apitopken incluido en el axiosPublic
no es necesario agregar el apitoken en la peticion*/
import { axiosPublic } from './axios';

const postLogin = (user, password) => {
  console.log("loginapi: successfull");
  return axiosPublic.post(
    '/auth/login',
    {
      user,
      password
    }
  )

};

export default postLogin;
