import axios from 'axios' // 引入axios

// import { useUserStore } from '@/pinia/modules/user'
const Configuration=import.meta.env
console.log(Configuration)
//不做反代 直连后端
const service = axios.create({
    baseURL:Configuration.VITE_BASE_PATH+":"+Configuration.VITE_SERVER_PORT,
    timeout: 99999
})
//用户存储使用localstorge
// const userStore = useUserStore()

// 请求拦截器
service.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token'),
            ...config.headers
        }
        return config
    },
    error => {
        console.log("报错返回")
        return error
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // const userStore = useUserStore()
        // if (response.headers['new-token']) {
        //     userStore.setToken(response.headers['new-token'])
        // }
        if (response.data.code === 200 || response.headers.success === 'true') {
            if (response.headers.msg) {
                response.data.msg = decodeURI(response.headers.msg)
            }
            return response.data
        } else {

            if (response.data.data && response.data.data.reload) {
                userStore.token = ''
                localStorage.clear()
                router.push({ name: 'Login', replace: true })
            }
            return response.data.msg ? response.data : response
        }
    },
    error => {
        // closeLoading()


        switch (error.response.status) {
            case 500:
                alert("接口500！")
                break
            case 404:
                alert("接口404！")
                break
            case 401:
                localStorage.clear()
                uni.$u.route({
                    type:"reLaunch",
                    url: '/pages/login/login'
                })
                break
        }

        return error
    }
)





export default service
