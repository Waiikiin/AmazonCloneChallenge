import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'https://us-central1-clone-93721.cloudfunctions.net/api/' // API URL
})

export default instance;;