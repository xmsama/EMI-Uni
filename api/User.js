import service from '@/utils/request'


export const Login = (data) => {
    return service({
        url: '/customerUser/user/login',
        method: 'post',
        data:data
    })
}
export const LoginAdmin = (data) => {
    return service({
        url: '/admin/adminUser/login',
        method: 'post',
        data:data
    })
}

export const GetEmi = (data) => {
    return service({
        url: '/customerUser/user/userGetById',
        method: 'post',
        data:data
    })
}

export const Send = (data) => {
    return service({
        url: 'customerUser/user/submit',
        method: 'post',
        data:data
    })
}



export const GetSite = () => {
    return service({
        url: 'admin/adminStation/list',
        method: 'get'
    })
}


export const AddSite = (data) => {
    return service({
        url: 'admin/adminStation/save',
        method: 'post',
        data:data
    })
}

export const DelSite = (data) => {
    return service({
        url: 'admin/adminStation/del/'+data,
        method: 'delete',
    })
}
export const UpdateSite = (data) => {
    return service({
        url: 'admin/adminStation/update',
        method: 'put',
        data:data
    })
}



// initdata