import axios from "axios"
const baseUrl = ''

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {}
        }
        return config
    }

    interceptors(instance) {
        instance.interceptors.request.use(config => {
            // 在发送请求之前做些什么
            return config
        }, error => {
            // 对请求错误做些什么
            return Promise.reject(error)
        })

        // 响应拦截器
        instance.interceptors.response.use(response => {
            const { data, code } = response.data
            if (code === 200) {
                return data
            } else {
                // 
            }
            // return response
        }, error => {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error)
        })
    }

    request(options) {
        const instance = axios.create()
        options = {...this.getInsideConfig(), ...options}
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)