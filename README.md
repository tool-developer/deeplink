# @tool-developer/deeplink
该方案为整合解决方案，支持微信标签方式，Universal link，Scheme URL，itunes URL等方式。




## DeepLink

```
import {DeepLink,setUniversalJumpLinks} from '@tool-developer/deeplink'
//
setUniversalJumpLinks([
  //
])
// ...
const el = DeepLink({

})
//...


```

1.微信标签方式
```
  wx >= 7.0.12
  ios >= 10.3
  android >= 5.0 
```
<br/>
相关参数说明：

```
  {
    wxConfig,
    wxConfigError,
    launchOptions:{
      appid,// app必填
      username,// 小程序必填
    }
  }
```

2. ios支持universal link方式

```
  非微信环境(safari浏览器)：
    ios >= 9.0
  微信环境：
    wx >= 7.0.7
    ios >= 12.0
```

相关参数说明：
```
  {
    universalURL,// 必填，不填写也不会进入该流程
    universalOptions,// universal参数
    supportUniversal,// 默认未true，设置为false时，不仅如此该流程
    supportLaunch:'universal', // 调试时候使用，直接进入该流程
  }
```

3. scheme url方式

相关参数说明：
```
  {
    schemeURL,// itunes url
    schemeOptions,// scheme 参数处理
    iosSchemeURL,// 针对ios的scheme url
    androidSchemeURL,// 针对android的scheme url
    supportScheme,// 默认未true，设置为false时，不仅如此该流程
    supportLaunch:'scheme', // 调试时候使用，直接进入该流程
  }
```

4. ios支持itunes url方式

相关参数说明：
```
  {
    itunesURL,// itunes url
    iphoneItunesURL,// 针对iphone的itunes url
    ipadItunesURL,// 针对ipad的itunes url
    supportItunes,// 默认未true，设置为false时，不仅如此该流程
    supportLaunch:'itunes', // 调试时候使用，直接进入该流程
  }
```

5. 自定义页面提示浏览器打开(跳出微信)


综上所述：
<br/>
如果要求在微信环境打开APP的话，需要：
```
  ios >= 10.3 && wx >= 7.0.12 (微信标签方式)
  ios >= 12.0 && wx >= 7.0.7 (universal link方式)
  或者
  android >= 5.0 && wx >= 7.0.12 (微信标签方式)
```


### 举例说明：
参考example目录


### wxConfig 微信配置参数
```
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名
    jsApiList: [] // 必填，需要使用的JS接口列表
  });
```
文档参考：[JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#4)


### launchButtonView
```
  {
    onClick:({e.detail})=>{},// 自定义点击，返回true可阻止内部默认行为
    text:'打开',// 按钮文字或者内容
    style:{},//自定义样式
    cls:'launch-btn-view',//按钮class
  }
```
### launchTipsView
```
  {
    style:{},//自定义背景遮罩样式
    cls:'launch-tips-view',//按钮class
  }
```
### launchOptions, wx-open-launch-*选项
相关参数说明文档：[开放标签说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html)
1. wx-open-launch-weapp,打开小程序
```
  {
    id:'',//id，必填，需要具有唯一性，否则不能接收回调
    username:'',//所需跳转的小程序原始id，即小程序对应的以gh_开头的id
    path:''//所需跳转的小程序内页面路径及参数
  }
```
`备注`：对于path属性，所声明的页面路径必须添加.html后缀，如pages/home/index.html。

2. wx-open-launch-app,打开APP
获得该接口权限，需同时满足如下条件：
```    
  服务号已认证
  开放平台账号已认证
  服务号与开放平台账号同主体
```    
相关参考：[微信内网页跳转APP功能](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_H5_Launch_APP.html)
```
  {
    id:'',//id，必填，需要具有唯一性，否则不能接收回调
    appid:'',
    extinfo:`${JSON.stringify(data)}`    
  }
```

### launchSuccess?, 标签方式打开成功回调
可选
### launchError?, 标签方式打开失败回调，返回true，可阻止内部默认行为
可选
### launchErrorToDownload?,launch启动失败后直接进入下载流程，默认true
可选
### wxConfigError?, 配置错误回调
可选

### packageName?, 应用包名
可选
### iosPackageName?, ios应用包名
可选
<br/>
优先级比packageName高
### androidPackageName?, android应用包名
可选
<br/>
优先级比packageName高

### downloadURL?, 下载地址
可选，建议提供应用包下载地址:http://a.app.qq.com/o/simple.jsp

已引入静默唤起scheme url方式，可不使用应用宝下载地址，可接入一个我们自己的带有下载APP功能的中间页地址

不配置downloadURL，且autoSchemeURL为true时，点击操作会走scheme url(静默唤起的方式在某些设备上交互体验不是很好)



### universalURL?, Universal link 地址
可选
<br/>
Universal link 地址，也可以作为引导提示链接地址

### universalOptions
由于APP对于Universal link方式，通过参数schemeUrl使用了scheme url的处理流程，
所以，对于universal options的设置可以直接使用scheme的配置，不需要额外进行配置。
```
// 方式一，默认
universalOptions:true,// 使用scheme配置生成schemeUrl
// 方式二
universalOptions:false,// 不使用scheme配置参数
// 方式三，自定义参数，不传递schemeUrl，会使用scheme配置生成schemeUrl
universalOptions:{
  schemeUrl:'',
  //...
}
```

`注意`:内部已对universalOptions中的value值进行了decodeURIComponent编码处理，外部不要进行编码处理。


### errorPageURL?, 错误引导页地址
可选
<br/>
打开错误时引导提示链接地址，优先级比universalURL高


### schemeURL?, Scheme url
可选
### androidSchemeURL?,android Scheme url
可选
<br/>
优先级比schemeURL高
### iosSchemeURL?,ios Scheme url
可选
<br/>
优先级比schemeURL高

### schemeOptions

```
// 方式一,默认
schemeOptions:true,// 微信环境中点击，会提示浏览器打开
// 方式二
schemeOptions:false,// 微信环境中点击，不提示，走应用宝下载/打开流程
// 方式三，传递参数
schemeOptions:{
  url:'',
  //...
}
```
### autoSchemeURL
默认接入后满足条件，会自动进入scheme url流程，默认是true。可设置为false，手动操作。


不需要外部进行完整scheme url地址拼接，参数部分可以设置到schemeOptions上。


### 通过scheme url方式唤起小程序

wxAppSchemeURL:小程序scheme url，具体参考文档

autoWxAppSchemeURL:是否自动唤起小程序，默认为false


`注意`：微信版本要满足>=8.0.6，才会有效
`参考文档`：[获取小程序Scheme Url](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)




### itunesURL?, itunes url
可选

### ipadItunesURL?, ipad itunes url
可选
<br/>
优先级比itunesURL高
### iphoneItunesURL?, iphone itunes url
可选
<br/>
优先级比itunesURL高


### supportLaunch?, 手动配置进入方案
可选值,false|true|universal|scheme|itunes，默认false
```
  // false: 默认值，包含标签流程在内的正常流程
  // true: 非universal|scheme|itunes字符串，进入非标签流程之外的正常流程。故进入错误流程时会添加该参数值。
  // universal:进入Universal link方案，调试使用
  // scheme: 进入scheme方案，调试使用
  // itunes: 进入itunes方案，调试使用
  // wxscheme: 进入小程序scheme方案，调试使用
```
`注意`：其中false和true，非数据类型上的布尔值
<br/>
因Universal link链接可作为公共提示页，故进入错误流程时会添加该参数

### supportScheme?, 支持Scheme url方案
可选，默认true

### supportItunes?, 支持itunes url方案
可选，默认true

### supportUniversal?, 支持Universal kink方案
可选，默认true




### wxAuthRequired 当前业务页面是否需要微信授权
默认false，需要微信授权的页面设置为true，否则以当前页面进入中转页，又会进入微信授权流程。

设置为true，原来的应用宝下载流程，会走universalURL的流程(提示微信打开，静默唤起APP)。



### supportDeepLinkJumpQuery，是否支持中间页跳转流程处理
默认为true，中转流程处理会在下载和universal流程页面添加`deepLinkJumpQuery`参数




### handle**Url
针对url地址参数，额外添加自定义处理，只需将处理结果返回即可
```
  handleDownloadSchemeUrl(url,params,os){
    //
    return url;
  }
```