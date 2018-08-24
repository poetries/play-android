import $http from './fetch'
const Y = {}

Y.cgiHome = {
      /**
   * 获取首页banner列表
   */
    getBanner (params) {
        return $http.GET('/banner/json', null);
    },
     /**
   * 获取首页文章列表
   */
   getArticle(params) {
        return $http.GET('/article/list/'+params.page+'json', null, {
            withAuth: true,
            canSkip: true
          });
    }
}

Y.cgiClassify = {
     /**
   * 获取体系分类
   */
    getClassifyList () {
        return $http.GET('/tree/json', null);
    },
      /**
   * 根据分类获取文章列表
   */
     getArticleByClassify (params) {
        return $http.GET('article/list/' + params.page + '/json?cid=' + params.cid, null, {
            withAuth: true,
            canSkip: true
          })
    }
}

Y.cgiLogin = {
    post(params){
        return $http.POST('/user/login', params);
    }
}

Y.cgiRegister = {
    post(params){
        return $http.POST('/user/login', params);
    }
}

// 收藏相关
Y.cgiCollect = {
        /**
     * 获取收藏文章列表
     */
    getCollectArticle (params) {
        return  $http.GET('lg/collect/list/' + params.page + '/json', null, { withAuth: true })
    },
        /**
     * 收藏站内文章
     */
    collectArticle (params) {
            return $http.POST('/lg/collect/'+params.id + '/json', null, { withAuth: true });
    },
      /**
   * 收藏站外文章
   */
    collectArticleAdd(params) {
        return $http.POST('/lg/collect/add/json', params, { withAuth: true })
    },
    /**
     * 从文章列表取消收藏
     */
    uncollectArticle(id) {
        return $http.POST('/lg/uncollect_originId/' + id + '/json', null, { withAuth: true })
    },
    /**
     * 从收藏列表取消收藏
     */
    uncollect(params) {
        return $http.POST('/lg/uncollect/' + params.id + '/json', { originId: params.originId }, { withAuth: true })
    },
    /**
     * 获取收藏网站列表
     */
    getCollectWeb() {
        return $http.GET('/lg/collect/usertools/json', null, { withAuth: true })
    },
    /**
     * 收藏网站
     */
    collectWeb(params) {
        return $http.POST('/lg/collect/addtool/json', params, { withAuth: true })
    },
    /**
     * 编辑收藏的网址
     */
    editCollectWeb(params) {
        return $http.POST('/lg/collect/updatetool/json', params, { withAuth: true })
    },
    /**
     * 删除收藏的网址
     */
    deleteCollectWeb(params) {
        return $http.POST('/lg/collect/deletetool/json', { id: params.id }, { withAuth: true })
    }
}

export default Y