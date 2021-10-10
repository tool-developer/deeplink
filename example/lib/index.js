import {DeepLink,setUniversalJumpLinks} from '../../esm/index.js';

//
setUniversalJumpLinks([
  'jump0.xxxx.com',
  'jump1.xxxx.com',
  'jump2.xxxx.com',
  'jump3.xxxx.com',
  'jump4.xxxx.com'
])

//
const el = DeepLink({
  //el:document.querySelector('#wp'),
  //supportLaunch:'universal',
  text:'点击',
  wxConfig:{
    // 参考https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#4
  },
  // 微信配置失败回调
  wxConfigError:(err)=>{
    console.log(err)
  },
  // 开发标签配置
  launchOptions: {
    // 参考https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#21
  },
  launchTipsView:{
    style:{
      zIndex:2000
    }
  },
  launchButtonView:{
    style:{
      color:'red'
    }
  },
  // 自定义处理url
  handleDownloadSchemeUrl:(url)=>{

    return url;
  },
  handleUniversalUrl:(url)=>{

    return url;
  },
  handleCurrentUrl:(url)=>{

    return url;
  },
  itunesURL: '',
  schemeURL: '',
  universalURL: '',
  packageName: '',
  downloadURL: 'http://a.app.qq.com/o/simple.jsp',
})
//
export default el;