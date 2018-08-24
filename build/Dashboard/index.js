(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _index = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = {};
var $http = {};

var quickFetch = function quickFetch(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';

  return new Promise(function (resolve, reject) {
    _system2.default.fetch({
      url: _index.API_ROOT + url,
      data: data,
      header: headers,
      method: method,
      success: function success(data) {
        resolve(data && JSON.parse(data.data));
      },
      fail: function fail(data, code) {
        reject(data);
      }
    });
  });
};
var getAuth = function getAuth() {
  return new Promise(function (resolve, reject) {
    storage.get({
      key: 'auth',
      success: function success(data) {
        headers.Cookie = data;
        resolve(true);
      },
      fail: function fail(data, code) {
        resolve(false);
      }
    });
  });
};

var withAuth = function withAuth(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var canSkip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  return getAuth().then(function (auth) {
    if (auth || canSkip) {
      return quickFetch(url, data, method);
    } else {
      return new Promise(function (resolve, reject) {
        reject('请先登录！');
      });
    }
  });
};

$http.POST = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (config.withAuth) {
    return withAuth(url, data, 'post', config.canSkip);
  } else {
    return quickFetch(url, data, 'post');
  }
};

$http.GET = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (config.withAuth) {
    return withAuth(url, data, 'get', config.canSkip);
  } else {
    return quickFetch(url, data, 'get');
  }
};
$http.PUT = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return quickFetch(url, data, 'put');
};

exports.default = $http;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)
__webpack_require__(35)
__webpack_require__(39)
var $app_template$ = __webpack_require__(43)
var $app_style$ = __webpack_require__(44)
var $app_script$ = __webpack_require__(45)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(26)
var $app_style$ = __webpack_require__(27)
var $app_script$ = __webpack_require__(28)

$app_define$('@app-component/home', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "fetch数据"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "fetchBanner"
      }
    },
    {
      "type": "progress",
      "attr": {
        "type": "circular"
      },
      "shown": function () {return this.loading},
      "style": {
        "position": "fixed",
        "top": "400px",
        "left": "350px"
      }
    },
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.lists},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.title}
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.lists}
      }
    }
  ]
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  ".layout": {
    "flexDirection": "column"
  },
  ".list": {
    "flexDirection": "column"
  },
  ".list-item": {
    "borderTopWidth": "1px",
    "borderTopColor": "#eeeeee",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#dddddd",
    "height": "200px",
    "flexDirection": "column",
    "justifyContent": "center",
    "marginBottom": "10px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px"
  },
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".content": {
    "fontSize": "20px",
    "color": "#aaaaaa",
    "marginBottom": "40px"
  },
  ".time": {
    "fontSize": "20px",
    "color": "#dddddd"
  },
  ".fixed-btn": {
    "color": "#ffffff",
    "fontSize": "50px",
    "position": "fixed",
    "width": "100px",
    "height": "100px",
    "right": "40px",
    "bottom": "40px",
    "borderRadius": "50px",
    "backgroundColor": "#519650"
  },
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#09ba07",
    "fontSize": "30px",
    "color": "#ffffff"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(29);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    data: {
        lists: [],
        loading: false
    },
    fetchBanner: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            this.loading = true;
                            _context.prev = 1;
                            _context.next = 4;
                            return (0, _index.getBanner)();

                        case 4:
                            res = _context.sent;

                            this.lists = res.data;
                            this.loading = false;
                            this.$app.$def.prompt.showToast({ message: '加载完成' });
                            _context.next = 13;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](1);

                            console.log(_context.t0);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[1, 10]]);
        }));

        function fetchBanner() {
            return _ref.apply(this, arguments);
        }

        return fetchBanner;
    }(),
    onInit: function onInit() {
        console.log('onInit');
    }
};}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(30);

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _home[key];
    }
  });
});

var _user = __webpack_require__(32);

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _classify = __webpack_require__(33);

Object.keys(_classify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _classify[key];
    }
  });
});

var _collect = __webpack_require__(34);

Object.keys(_collect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collect[key];
    }
  });
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.getArticle = exports.getBanner = undefined;

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取首页banner列表
 */
var getBanner = exports.getBanner = function getBanner(params) {
   return _index2.default.GET('/banner/json', null).then(function (res) {
      return Promise.resolve(res);
   }).catch(function (error) {
      return Promise.reject(error);
   });
};

/**
* 获取首页文章列表
*/
var getArticle = exports.getArticle = function getArticle(params) {
   return _index2.default.GET('/article/list/' + params.page + 'json', null, {
      withAuth: true,
      canSkip: true
   }).then(function (res) {
      return Promise.resolve(res);
   }).catch(function (error) {
      return Promise.reject(error);
   });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_ROOT = exports.API_ROOT = 'http://www.wanandroid.com';

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = exports.login = undefined;

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 登录 注册接口@TODO完善
var login = exports.login = function login(params) {
    return _index2.default.POST('/user/login', params);
};

var register = exports.register = function register(params) {
    return _index2.default.POST('/user/login', params);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticleByClassify = exports.getClassifyList = undefined;

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * 获取体系分类
  */
var getClassifyList = exports.getClassifyList = function getClassifyList() {
  return _index2.default.GET('/tree/json', null);
};

/**
* 根据分类获取文章列表
*/
var getArticleByClassify = exports.getArticleByClassify = function getArticleByClassify(params) {
  return _index2.default.GET('article/list/' + params.page + '/json?cid=' + params.cid, null, {
    withAuth: true,
    canSkip: true
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteCollectWeb = exports.editCollectWeb = exports.collectWeb = exports.getCollectWeb = exports.uncollect = exports.uncollectArticle = exports.collectArticleAdd = exports.collectArticle = exports.getCollectArticle = undefined;

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * 获取收藏文章列表
  */
var getCollectArticle = exports.getCollectArticle = function getCollectArticle(page) {
    return _index2.default.GET('lg/collect/list/' + page + '/json', null, { withAuth: true });
};
/**
* 收藏站内文章
*/
var collectArticle = exports.collectArticle = function collectArticle(id) {
    return _index2.default.POST('/lg/collect/' + id + '/json', null, { withAuth: true });
};
/**
* 收藏站外文章
*/
var collectArticleAdd = exports.collectArticleAdd = function collectArticleAdd(params) {
    return _index2.default.POST('/lg/collect/add/json', params, { withAuth: true });
};
/**
 * 从文章列表取消收藏
 */
var uncollectArticle = exports.uncollectArticle = function uncollectArticle(id) {
    return _index2.default.POST('/lg/uncollect_originId/' + id + '/json', null, { withAuth: true });
};
/**
 * 从收藏列表取消收藏
 */
var uncollect = exports.uncollect = function uncollect(id, originId) {
    return _index2.default.POST('/lg/uncollect/' + id + '/json', { originId: originId }, { withAuth: true });
};
/**
 * 获取收藏网站列表
 */
var getCollectWeb = exports.getCollectWeb = function getCollectWeb() {
    return _index2.default.GET('/lg/collect/usertools/json', null, { withAuth: true });
};
/**
 * 收藏网站
 */
var collectWeb = exports.collectWeb = function collectWeb(params) {
    return _index2.default.POST('/lg/collect/addtool/json', params, { withAuth: true });
};
/*
 * 编辑收藏的网址
 */
var editCollectWeb = exports.editCollectWeb = function editCollectWeb(params) {
    return _index2.default.POST('/lg/collect/updatetool/json', params, { withAuth: true });
};
/**
 * 删除收藏的网址
 */
var deleteCollectWeb = exports.deleteCollectWeb = function deleteCollectWeb(id) {
    return _index2.default.POST('/lg/collect/deletetool/json', { id: id }, { withAuth: true });
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(36)
var $app_style$ = __webpack_require__(37)
var $app_script$ = __webpack_require__(38)

$app_define$('@app-component/classify', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "classify"
      }
    }
  ]
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: {
        loading: false
    },
    onInit: function onInit() {
        console.log('onInit');
    }
};}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(40)
var $app_style$ = __webpack_require__(41)
var $app_script$ = __webpack_require__(42)

$app_define$('@app-component/me', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "Me-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "Me"
      }
    }
  ]
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: {
        loading: false
    },
    onInit: function onInit() {
        console.log('onInit');
    }
};}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wanandroid-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "flexible-tabs"
      ],
      "children": [
        {
          "type": "tabs",
          "attr": {
            "index": function () {return this.currentIndex}
          },
          "events": {
            "change": "changeTabactive"
          },
          "children": [
            {
              "type": "tab-content",
              "attr": {},
              "classList": [
                "flexible-tab-content"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-content-section"
                  ],
                  "children": [
                    {
                      "type": "home",
                      "attr": {},
                      "shown": function () {return this.tabItems[0].show}
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-content-section"
                  ],
                  "children": [
                    {
                      "type": "classify",
                      "attr": {},
                      "shown": function () {return this.tabItems[1].show}
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-content-section"
                  ],
                  "children": [
                    {
                      "type": "me",
                      "attr": {},
                      "shown": function () {return this.tabItems[2].show}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "flexible-tabbar"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": {
                "exp": function () {return this.tabItems},
                "key": "index",
                "value": "item"
              },
              "classList": [
                "tab-item"
              ],
              "events": {
                "click": function (evt) {this.clickTabBar(this.index,evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.item.icon[this.currentIndex===this.index?1:0]}
                  },
                  "classList": [
                    "tab-icon"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.text}
                  },
                  "classList": function () {return [this.currentIndex===this.index?'active':'tab-text']}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  ".wanandroid-page .flexible-tabs": {
    "display": "flex",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wanandroid-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        }
      ]
    }
  },
  ".flexible-tabs .flexible-tabbar": {
    "display": "flex",
    "borderTopWidth": "1px",
    "borderTopColor": "#eeeeee",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabbar"
        }
      ]
    }
  },
  ".flexible-tabbar .tab-item": {
    "flex": 1,
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "fontSize": "12px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        }
      ]
    }
  },
  ".tab-item .tab-icon": {
    "width": "56px",
    "height": "56px",
    "paddingTop": "5px",
    "paddingRight": "5px",
    "paddingBottom": "5px",
    "paddingLeft": "5px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-icon"
        }
      ]
    }
  },
  ".tab-item .tab-text": {
    "fontSize": "20px",
    "color": "#aaaaaa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-text"
        }
      ]
    }
  },
  ".tab-item .active": {
    "fontSize": "20px",
    "color": "#24b9ff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  data: function data() {
    return {
      currentIndex: 0,
      tabItems: [{
        text: '首页',
        icon: ['../Common/Image/icon_home.png', '../Common/Image/icon_home_select.png'],
        show: true
      }, {
        text: '体系',
        icon: ['../Common/Image/icon_classify.png', '../Common/Image/icon_classify_select.png'],
        show: false
      }, {
        text: '我',
        icon: ['../Common/Image/icon_me.png', '../Common/Image/icon_me_select.png'],
        show: false
      }]
    };
  },
  changeTabactive: function changeTabactive(evt) {
    this.changeCurrent(evt.index);
  },
  clickTabBar: function clickTabBar(index) {
    this.changeCurrent(index);
  },
  changeCurrent: function changeCurrent(index) {
    this.$page.setTitleBar({ text: this.tabItems[index].text });
    this.tabItems[index].show = true;
    this.currentIndex = index;
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map