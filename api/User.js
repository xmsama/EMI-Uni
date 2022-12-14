import service from '@/utils/request'


export const Login = (data) => {
    return service({
        url: '/customerUser/user/login',
        method: 'post',
        data:data
    })
}
