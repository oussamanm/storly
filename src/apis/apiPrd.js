import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.storely.mediaplus.ma/api/v1/'
})