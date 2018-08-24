import $http from './fetch/index'

   /**
     * 获取收藏文章列表
     */
    export const getCollectArticle =  (page)=> {
        return  $http.GET('lg/collect/list/' + page + '/json', null, { withAuth: true })
    }
        /**
     * 收藏站内文章
     */
    export const collectArticle = (id) =>{
            return $http.POST('/lg/collect/'+ id + '/json', null, { withAuth: true });
    }
      /**
   * 收藏站外文章
   */
    export const collectArticleAdd = (params) =>{
        return $http.POST('/lg/collect/add/json', params, { withAuth: true })
    }
    /**
     * 从文章列表取消收藏
     */
    export const uncollectArticle = (id) =>{
        return $http.POST('/lg/uncollect_originId/' + id + '/json', null, { withAuth: true })
    }
    /**
     * 从收藏列表取消收藏
     */
    export const uncollect = (id,originId)=> {
        return $http.POST('/lg/uncollect/' + id + '/json', { originId: originId }, { withAuth: true })
    }
    /**
     * 获取收藏网站列表
     */
    export const getCollectWeb = ()=> {
        return $http.GET('/lg/collect/usertools/json', null, { withAuth: true })
    }
    /**
     * 收藏网站
     */
    export const collectWeb = (params)=> {
        return $http.POST('/lg/collect/addtool/json', params, { withAuth: true })
    }
    /*
     * 编辑收藏的网址
     */
    export const editCollectWeb = (params)=> {
        return $http.POST('/lg/collect/updatetool/json', params, { withAuth: true })
    }
    /**
     * 删除收藏的网址
     */
    export const deleteCollectWeb = (id)=> {
        return $http.POST('/lg/collect/deletetool/json', { id: id }, { withAuth: true })
    }