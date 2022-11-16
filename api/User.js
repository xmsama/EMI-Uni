import service from '@/utils/request'


export const Login = () => {
    return service({
        url: '/getMenu',
        method: 'post'
    })
}
