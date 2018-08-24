import $http from './fetch/index'

// 登录 注册接口@TODO完善
export const login = (params)=>{
    return $http.POST('/user/login', params);
}

export const register = (params)=>{
        return $http.POST('/user/login', params);
}
