import $http from './fetch/index'

 /**
   * 获取体系分类
   */
export const getClassifyList  = ()=> {
    return $http.GET('/tree/json', null);
}

  /**
* 根据分类获取文章列表
*/
 export const getArticleByClassify = (params) =>{
    return $http.GET('article/list/' + params.page + '/json?cid=' + params.cid, null, {
        withAuth: true,
        canSkip: true
      })
}