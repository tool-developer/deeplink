import UserAgent from '@tool-developer/wo-useragent';
const {checkVersion} = UserAgent;
//
let universalJumpLinks = [];

const defaultLaunchButtonView = {
  cls:"launch-btn-view",
  style:{}
};
const defaultLaunchTipsView = {
  cls:"launch-tips-view",
  style:{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.2)',
    zIndex: 10000,
    textAlign: 'center',
  }
};

// url地址连接符处理
const getUrlSign = (url) => {
  if(!url){

    return '';
  }
  //
  if (url.indexOf('?') > -1) {
    //
    return '&';
  }

  return '?';
};
// 参数处理
const queryString = (params) => {
	if(!params || typeof params !== 'object'){

		return ''
  }
	//
	const keys = Object.keys(params);
	const res = [];
	keys.forEach(key => {
    if(params[key] !== undefined){
		  res.push(`${key}=${encodeURIComponent(params[key])}`);
    }
	});
	//
	return res.join('&');
}
//
const query = (name)=>{
  const reg = new RegExp(`${name}=([^&]+)`);
  const str = location.search;
  const res = str.match(reg);
  if(res && res.length > 1){

    return res[1];
  }

  return '';
}

const DP = function(el){
  //
  this.$el = document.createElement(el);
  //
  return this;
}
DP.prototype.attr = function(name,value){
  //
  if(typeof name === 'object'){
    const keys = Object.keys(name);
    keys.forEach(key => {
      //
      this.attr(key,name[key])
    })
  }else{
    //
    this.$el.setAttribute(name,value);
  }
  //
  return this;
}
DP.prototype.css = function(name,value){
  //
  if(typeof name === 'object'){
    const keys = Object.keys(name);
    keys.forEach(key => {
      //
      this.css(key,name[key])
    })
  }else{
    //
    this.$el.style[name] = value;
  }
  //
  return this;
}
DP.prototype.append = function(el){
  //
  this.$el.appendChild(el.$el ? el.$el : el)
  return this;
}

DP.prototype.text = function(text){
  if(text !== undefined){

    this.$el.innerText = text;
  }
  //
  return this;
}

DP.prototype.on = function(event,handle){
  this.$el.addEventListener(event,handle)
  //
  return this;
}

const $$ = function (el){
  //
  return new DP(el)
}

// 是否标记为提示
const iShowTipsView = ()=>{
  //
  if(location.search && /showTips=1/.test(location.search)){
    //
    return true;
  }
  //
  return false;
}
//
const LaunchButton = (props)=>{
  const {text,el,url,onClick,os,showTipsView,isUniversal,launchButtonView = {}} = props;
  const cls = launchButtonView.cls || defaultLaunchButtonView.cls;
  const style = {...defaultLaunchButtonView.style,...(launchButtonView.style || {})};
  const $btn = $$('div').text(text || '打开');
  //
  if(cls){
    $btn.attr('class',cls)
  }
  //
  if(style){
    $btn.css(style)
  }
  //
  if(el){
    const $el = typeof el === 'object' ? el : document.querySelector(el); 
    //
    $el.appendChild($btn.$el)
  }
  //
  $btn.on('click',(e)=>{
    //
    if(onClick && onClick(e)){

      return;
    }
    //
    if(os.micromessenger){
      //
      if(iShowTipsView() || showTipsView){
        //
        return TipsView.show({
          ...props
        });
      }
    }
    if(!url){

      return;
    }
    //
    if(isUniversal){
      //
      const {host} = window.location;
      if(universalJumpLinks){
        let index = universalJumpLinks.indexOf(host);
        if(index !== -1){
          index +=1;
          if(index >= universalJumpLinks.length){
            index = 0;
          }
          const currentJumpUrl = universalJumpLinks[index];
          url = url.replace(host,currentJumpUrl);
        }
      }
    }
    //
    let currentUrl = null;
    if(!iShowTipsView()){
      const sign = getUrlSign(url);
      currentUrl = `${url}${sign}showTips=1`;
    }else{
      // 已经在浏览器中，移除showTips参数
      currentUrl = url.replace('showTips=1','showTips=0');
    }
    //
    window.location.href = currentUrl;
  })
  //
  return $btn.$el;
}
//
const TipsView = (props)=>{
  const {launchTipsView={}} = props;
  const $el = $$('div')
  .on('click',()=>{
    //
    TipsView.hide();
  });
  //
  const cls = launchTipsView.cls || defaultLaunchTipsView.cls;
  const style = {...defaultLaunchTipsView.style,...(launchTipsView.style || {})};
  //
  if(cls){
    $el.attr('class',cls)
  }
  //
  if(style){
    $el.css(style)
  }
  //
  TipsView.$el = $el.$el;
  //
  document.body.appendChild($el.$el);
  //
  return $el;
}

TipsView.show = (props)=>{
  //
  if(!TipsView.$el){
    //
    return new TipsView(props);
  }
}

TipsView.hide = ()=>{
  //
  if(TipsView.$el){
    TipsView.$el.parentNode.removeChild(TipsView.$el);
    TipsView.$el = null;
  }
}
//
export const setUniversalJumpLinks = (links)=>{
  //
  universalJumpLinks = [...links];
}

//
export default (props)=>{
  const {
    wxConfig,
    wxConfigError,
    //
    launchOptions={}, // wx-open-launch-*选项
    launchSuccess, // 标签方式打开成功回调
    launchError, // 标签方式打开失败回调，返回true，可阻止内部默认行为
    launchErrorToDownload = true,// launch启动失败后直接进入下载流程
    //
    packageName, // 应用包名
    iosPackageName, // ios应用包名
    androidPackageName, //android应用包名
    downloadURL, // 下载地址
    universalURL, // Universal link 地址，也可以作为引导提示链接地址
    universalOptions={},// universal link options
    errorPageURL, // 打开错误时引导提示链接地址，优先级比universalURL高
    //
    schemeURL, // Scheme url
    androidSchemeURL, //android Scheme url
    iosSchemeURL, //ios Scheme url
    schemeOptions = {},// scheme url options,默认微信中会提示
    autoSchemeURL = true,// 是否自动唤起scheme url
    //
    wxAppSchemeURL,// 微信小程序scheme url
    autoWxAppSchemeURL = false,// 是否自动唤起小程序scheme url
    //
    itunesURL, // itunes url
    ipadItunesURL, // ipad itunes url
    iphoneItunesURL, // iphone itunes url

    //
    supportLaunch = '',
    supportScheme = true, // 支持Scheme url方案
    supportItunes = true, // 支持itunes url方案
    supportUniversal = true, // 支持Universal kink方案

    // 当前页如果需要微信授权，需要设置该参数，否则当前页跳转会有问题
    wxAuthRequired=false,
    // 支持中间页跳转
    supportDeepLinkJumpQuery = true,// 

    // 自定义处理url
    handleDownloadSchemeUrl,
    handleUniversalUrl,
    handleCurrentUrl
  } = props;

  //
  const os = new UserAgent(navigator.userAgent);
  console.log(os)

  const currentDeepLinkJumpQuery = query('deepLinkJumpQuery');
  //
  const currentItunesURL =
    (os.ipad ? ipadItunesURL : iphoneItunesURL) || itunesURL;
  const currentSchemeURL =
    (os.android ? androidSchemeURL : iosSchemeURL) || schemeURL;

  // 获取中间页跳转参数
  function getDeepLinkJumpUrl(url){
    // 不进行中转页跳转处理
    if(!supportDeepLinkJumpQuery){

      return url;
    }
    // 
    if(/(?:\?|\&)deepLinkJumpQuery\=/.test(url)){

      return url;
    }
    const sign = getUrlSign(url);
    // 添加跳转参数
    if(currentDeepLinkJumpQuery){
      //
      return `${url}${sign}deepLinkJumpQuery=${currentDeepLinkJumpQuery}`;
    }
    const schurl = getSchemeUrl();
    //
    if(schurl){
      //
      return `${url}${sign}deepLinkJumpQuery=${encodeURIComponent(schurl)}`;
    }
    //
    return url;
  }

  // 获取下载scheme url
  function getDownloadSchemeUrl(notOnly){
    // 需要微信授权，走universal中间页流程
    if(os.micromessager && wxAuthRequired && notOnly){
      //
      const url =  getUniversalUrl();
      if(url){

        return url;
      }
    }
    // 自动唤起时，点击不进入下载
    // 静默唤起的方式，某些设备上需要二次点击，而且操作体验不是很好
    if(autoSchemeURL && !downloadURL){
      //
      return getSchemeUrl();
    }
    // 
    if(!(downloadURL && currentSchemeURL)){

      return null;
    }
    const iosSchemeURLEncode = encodeURIComponent(
      iosSchemeURL || schemeURL || ''
    );
    const androidSchemeURLEncode = encodeURIComponent(
      androidSchemeURL || schemeURL || ''
    );
    const currentPackageName =
      (os.ios ? iosPackageName : androidPackageName) || packageName;
    const sign = getUrlSign(downloadURL);
    let url = `${downloadURL}${sign}pkgname=${currentPackageName}&ios_scheme=${iosSchemeURLEncode}&android_schema=${androidSchemeURLEncode}`;
    // 外部自定义处理参数
    if(handleDownloadSchemeUrl){
      //
      return handleDownloadSchemeUrl(url,{
        packageName:currentPackageName,
        ios_scheme_url:iosSchemeURLEncode,
        android_scheme_url:androidSchemeURLEncode
      },os);
    }
    //
    return url;
  }

  // 
  function getSchemeUrl(){
    //
    if(currentDeepLinkJumpQuery){

      return decodeURIComponent(currentDeepLinkJumpQuery);
    }
    if(!currentSchemeURL){

      return null;
    }
  	//
  	if(schemeOptions){
  		const sign = getUrlSign(currentSchemeURL);
			const str = queryString(schemeOptions);
			if(str){
				//
				return `${currentSchemeURL}${sign}${str}`;	
			}
  	}
  	//
  	return currentSchemeURL;
  }
  //
  function getUniversalUrl(){
    if(!universalURL){

      return null;
    }
    // 外部已处理参数
    // 不处理universalOptions参数
    if(/(?:\?|\&)schemeUrl\=/.test(universalURL) || !universalOptions){

      return universalURL;
    }
    // true => {}
    const currentUniversalOptions = typeof universalOptions === 'boolean' ? {} : universalOptions;
    // 使用scheme配置得到schemeUrl参数
    currentUniversalOptions.schemeUrl = currentUniversalOptions.schemeUrl || getSchemeUrl();
    // 添加跳转参数
    if(currentUniversalOptions){
      currentUniversalOptions.deepLinkJumpQuery = getSchemeUrl();
    }
    //
  	if(currentUniversalOptions){
  		const sign = getUrlSign(universalURL);
      const str = queryString(currentUniversalOptions);
      //
			if(str){
				//
				return `${universalURL}${sign}${str}`;	
			}
  	}
    //
    if(handleUniversalUrl){
      //
      return handleUniversalUrl(universalURL,{
        ...currentUniversalOptions
      },os)
    }
  	//
  	return universalURL;
  }
  // APP中打开，直接走scheme url的流程
  function getCurrentUrl(url){
    // 已经在APP中，直接使用scheme url
    if(handleCurrentUrl){
      //
      url = handleCurrentUrl(url,{
        schemeUrl:decodeURIComponent(getSchemeUrl())
      },os)
    }
    //
    return getDeepLinkJumpUrl(url);
  }

  // 获取错误跳转链接地址
  function getErrorPageUrl(){
    const url = errorPageURL || universalURL;
    const sign = getUrlSign(url);
    const currentUrl = `${url}${sign}supportLaunch=1`;// 标记为不支持
    //
    return currentUrl;
  }  

  //  
  if(os.micromessenger && wxConfig){
    //
    wx.config({
      openTagList: ['wx-open-launch-app', 'wx-open-launch-weapp'],
      ...wxConfig,
    })
    //
    wx.error((res)=>{
      //
      wxConfigError && wxConfigError(res);
    })
  }  
  // 1. wx-open-launch-*方案
  if(checkVersion(os['micromessenger-version'],[7,0,12])){
    // 系统版本检测，iOS 10.3及以上、Android 5.0及以上
    if(
      (os.ios && checkVersion(os['ios-version'],[10,3])) || 
      (os.android && checkVersion(os['android-version'],[5,0]))
    ){
      //
      const {appid,username} = launchOptions;
      let $wxbtn = null;
      // 打开APP
      if(appid){
        //
        $wxbtn = $$('wx-open-launch-app')
          .attr(launchOptions)
          .append(LaunchButton({
            ...props,
            el:null,
            os
          }));
      }
      // 打开小程序
      if(username){
        //
        $wxbtn = $$('wx-open-launch-weapp')
          .attr(launchOptions)
          .append(LaunchButton({
            ...props,
            el:null,
            os
          }));
      }
      //
      if($wxbtn){
        //
        const launchEventSuccess = (e)=>{
          //
          launchSuccess && launchSuccess(e);
        }
        //
        const launchEventError = (e)=>{
          //
          if(!(launchError && launchError(e))){
            //
            const currentUrl = getErrorPageUrl();
                    // 直接进入下载流程
            if(launchErrorToDownload && currentDownloadUrl){
              //
              return window.local.href = currentDownloadUrl;
            }
            //
            return (window.location.href = currentUrl);
          }
        }
        //
        $wxbtn.on('launch',launchEventSuccess)
        $wxbtn.on('error',launchEventError)
        //
        if(props.el){
          const {el} = props;
          const $el = typeof el === 'object' ? el : document.querySelector(el); 
          //
          return $el.appendChild($wxbtn.$el)
        }
        //
        return $wxbtn.$el;
      }
    }
  }
  // 在微信环境中，有标记的时候，直接显示提示信息
  if(iShowTipsView() && os.micromessenger){
    //
    const t = setTimeout(()=>{
      //
      TipsView.show({
        ...props
      });
      clearTimeout(t);
    },100)
  }
  // 2. Universal Link
  if(
    (supportUniversal && os.ios && universalURL && checkVersion(os['ios-version'],[9,0])) || 
    supportLaunch === 'universal'
    ){
      let url = getUniversalUrl();
      //
      url = getCurrentUrl(url);
    //
    return LaunchButton({
      ...props,
      isUniversal:true,
      url,
      os,
      onClick:()=>{
        const {onClick} = props;
        if(onClick && typeof onClick === 'function'){
          //
          onClick(e);
        }
        // 微信环境 wx >= 7.0.7,ios >= 12.0
        if(os.micromessenger){
          if(checkVersion(os['micromessenger-version'],[7,0,7]) && 
          checkVersion(os['ios-version'],[12, 0])){
            //
            return false;
          }
          // 微信环境 ios >=9.0 && ios< 12.0
          else if(checkVersion(os['ios-version'],[9, 0])){
            //
            TipsView.show({
              ...props
            })

            return true;
          }
        }
      }
    });
  }
  // 3. 应用宝地址+scheme
  if(supportScheme && (currentSchemeURL || supportLaunch === 'scheme')){
    // 非微信环境，静默唤起scheme url方式
    // 可通过autoSchemeURL控制首次进入不跳转，但是点击操作过进入，依然会唤起
    if(!os.micromessenger && (autoSchemeURL || iShowTipsView())){
      //
      const id = '_scheme_iframe';
      const url = getSchemeUrl();
      const $iframe = $$('iframe')
        .attr('id',id)
        .attr('src',url)
        .css({
          'position':'absolute',
          'zIndex':'-1',
          'opacity':0,
          'width':'1px',
          'height':'1px'
        })
        .on('load',()=>{

        })
        //
        document.body.appendChild($iframe.$el)
    }
    //
    const url = getCurrentUrl(getDownloadSchemeUrl(true));
    //
    return LaunchButton({
      ...props,
      url,
      os,
      showTipsView:!!schemeOptions && !wxAuthRequired
    })
  }

  // 4. 使用itunes地址，可以在微信环境中打开
  if(supportItunes && ((os.ios && currentItunesURL) || supportLaunch === 'itunes')){
    //
    const url = getCurrentUrl(currentItunesURL);
    return LaunchButton({
      ...props,
      url,
      os
    });
  }

  // 5. wxAppSchemeURL
  if(wxAppSchemeURL && (((autoWxAppSchemeURL || iShowTipsView()) && checkVersion(os['micromessenger-version'],[8,0,6])) || (supportLaunch === 'wxscheme'))){
    //
    return location.href = wxAppSchemeURL;
  }
  //
  return LaunchButton({
    ...props,
    url:errorPageURL || universalURL,
    os
  })
}