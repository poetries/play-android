import $http from './fetch/index'

  /**
   * 获取首页banner列表
   */
export const getBanner =  (params) =>{
    return $http.GET('/banner/json', null).then(res=>{
       return  Promise.resolve(res)
    }).catch(error=>{
       return  Promise.reject(error)
    })
}

 /**
* 获取首页文章列表
*/
export const getArticle = (params) => {
    return $http.GET('/article/list/'+params.page+'json', null, {
        withAuth: true,
        canSkip: true
    }).then(res=>{
        return  Promise.resolve(res)
     }).catch(error=>{
        return  Promise.reject(error)
     })
}