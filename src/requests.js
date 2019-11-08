import store from './stores'
import axios from 'axios'

const instance = axios.create()

instance.interceptors.response.use(res => res, error => {
        if (error.response.status === 401) {
            store.commit('logout')
            document.location.href = '/'
        }

        return Promise.reject(error)
    }
)

export default {
    auth: {
        register(data) {
            return instance.post('/api/register', data)
        },
        login(data) {
            return instance.post('/api/login', data)
        },
        logout() {
            return instance.get('/api/logout')
        }
    },
}
