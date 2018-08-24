#### 玩安卓-快应用

> http://www.wanandroid.com/blog/show/2 网站提供的api开发的快应用

### 功能

* 首页
  * banner展示
  * 最新文章展示(可收藏)
* 体系
  * 一级分类
  * 二级分类
  * 根据分类展示文章(可收藏)
* 我
  * 登录
  * 注册
  * 查看、添加收藏的文章
  * 查看、编辑、添加收藏网站
* 查看文章内容
* 分享文章

### 环境搭建

#### 安装NodeJS

> 需安装`6.0`以上版本的`NodeJS`

#### 安装hap-toolkit

```shell
// hap -V // 会显示安装版本信息
npm install -g hap-toolkit
```
####  创建项目工程

```npm
hap init projectName

// 增加编译支持
hap update --force

cd projectName && npm i
```

生成的目录结构

```javascript
├── sign rpk //包签名模块
│ └── debug //调试环境
│ ├── certificate.pem //证书文件
│ └── private.pem //私钥文件
├── src
│ ├── Common //公用的资源和组件文件
│ │ └── logo.png //应用图标
│ ├── Demo //页面目录
│ | └── index.ux //页面文件，可自定义页面名称
│ ├── app.ux //APP文件，可引入公共脚本，暴露公共数据和方法等
│ └── manifest.json //项目配置文件，配置应用图标、页面路由等
└── package.json //定义项目需要的各种模块及配置信息
```

- `src`：项目源文件夹
- `sign`：签名模块，当前仅有`debug`签名，如果内测上线，请添加`release`文件夹，增加线上签名；签名生成方法详见文档编译工具


**编译项目**

- `npm run release`     # 发布程序包，在 `/dist/.signed.rpk`，注意需要使用 `release` 签名模块
- `npm run build `      # 生成 `build` 和 `dist` 两个目录。前者是临时产出，后者是最终产出
- `npm run watch `      # 文件保存时自动编译和调试

手动编译项目

> 在项目的根目录下，运行如下命令进行编译打包，生成rpk包

```
npm run build
```

- 编译打包成功后，项目根目录下会生成文件夹：`build`、`dist`
- `build`：临时产出，包含编译后的页面js，图片等
- `dist`：最终产出，包含`rpk`文件。其实是将`build`目录下的资源打包压缩为一个文件，后缀名为`rpk`，这个`rpk`文件就是项目编译后的最终产出

自动编译项目

- 每次修改源代码文件后，都自动编译项目

```
npm run watch
```

**在安卓手机上安装调试工具**

> https://www.quickapp.cn/docCenter/post/69

![image.png](https://upload-images.jianshu.io/upload_images/1480597-5b4e639317894e37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###  连接手机进行调试

> 注意：一定要注意手机连接的wifi与电脑所连接的网络需要在同一局域网和网段，需要能够相互访问。

- 在项目根目录下执行如下命令，启动HTTP调试服务器：（`server`前需要先`npm run build`）

```
npm run server
```

- 开发者可以通过命令行终端或者调试服务器主页看到提供扫描的二维码
- 开发者通过快应用调试器扫码安装按钮，扫码安装待调试的`rpk`文件
- 开发者点击快应用调试器中的开始调试按钮，开始调试

> 打开之前安装的快应用调试助手扫描即可预览

![image.png](https://upload-images.jianshu.io/upload_images/1480597-32579fff42fb9530.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 扫描二维码之后点击开始调试，会调出devtool工具本地调试

![image.png](https://upload-images.jianshu.io/upload_images/1480597-3cd020c83fd15543.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/1480597-afd1d41337c7a3a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 安装Hap Extension

> 启动Visual Studio Code，打开项目，点击左上侧扩展，搜索hap，点击安装Hap Extension

- 更多详情 https://doc.quickapp.cn/tutorial/getting-started/code-edit-conf.html

### 入门

> http://blog.poetries.top/2018/08/21/quick-app-summary/