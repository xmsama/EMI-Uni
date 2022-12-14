import axios from 'axios' // 引入axios

// import { useUserStore } from '@/pinia/modules/user'
const Configuration=import.meta.env
console.log(Configuration)
//不做反代 直连后端
const service = axios.create({
    baseURL:Configuration.VITE_BASE_PATH+":"+Configuration.VITE_SERVER_PORT+Configuration.VITE_BASE_API,
    timeout: 99999
})
//用户存储使用localstorge
// const userStore = useUserStore()

// 请求拦截器
service.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json',
            'x-token': localStorage.getItem('token'),
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
        const userStore = useUserStore()
        if (response.headers['new-token']) {
            userStore.setToken(response.headers['new-token'])
        }
        if (response.data.code === 200 || response.headers.success === 'true') {
            if (response.headers.msg) {
                response.data.msg = decodeURI(response.headers.msg)
            }
            return response.data
        } else {
            ElMessage({
                showClose: true,
                message: response.data.msg || decodeURI(response.headers.msg),
                type: 'error'
            })
            if (response.data.data && response.data.data.reload) {
                userStore.token = ''
                localStorage.clear()
                router.push({ name: 'Login', replace: true })
            }
            return response.data.msg ? response.data : response
        }
    },
    error => {
        closeLoading()

        if (!error.response) {
            ElMessageBox.confirm(`
        <p>检测到请求错误</p>
        <p>${error}</p>
        `, '请求报错', {
                dangerouslyUseHTMLString: true,
                distinguishCancelAndClose: true,
                confirmButtonText: '稍后重试',
                cancelButtonText: '取消'
            })
            return
        }

        switch (error.response.status) {
            case 500:
                ElMessageBox.confirm(`
        <p>检测到接口错误${error}</p>
        <p>错误码<span style="color:red"> 500 </span>：此类错误内容常见于后台panic，请先查看后台日志，如果影响您正常使用可强制登出清理缓存</p>
        `, '接口报错', {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: '清理缓存',
                    cancelButtonText: '取消'
                })
                    .then(() => {
                        const userStore = useUserStore()
                        userStore.token = ''
                        localStorage.clear()
                        router.push({ name: 'Login', replace: true })
                    })
                break
            case 404:
                ElMessageBox.confirm(`
          <p>检测到接口错误${error}</p>
          <p>错误码<span style="color:red"> 404 </span>：此类错误多为接口未注册（或未重启）或者请求路径（方法）与api路径（方法）不符--如果为自动化代码请检查是否存在空格</p>
          `, '接口报错', {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: '我知道了',
                    cancelButtonText: '取消'
                })
                break
            case 403:
                ElMessageBox.confirm(`
       
        <p>错误码<span style="color:red"> 403 </span> 登录已过期 请清理缓存重新登录</p>
        `, '接口报错', {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: '清理缓存',
                    cancelButtonText: '取消'
                })
                    .then(() => {
                        const userStore = useUserStore()
                        userStore.token = ''
                        localStorage.clear()
                        router.push({ name: 'Login', replace: true })
                    })
                break
        }

        return error
    }
)





export default service
