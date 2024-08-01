import axios from "axios";

const apiClient = axios.create ({
    baseURL:'https://my-json-server.typicode.com/Shadow-Capibara/652115006',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getEvents(perPage: Number, page: Number) {
        return apiClient.get('/events?_limit='+perPage+'&_page='+page)
    }
}