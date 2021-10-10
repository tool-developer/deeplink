import { _ as _defineProperty$1 } from './defineProperty-18999f8e.js';

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * 规则处理
 */


var DefaultRules = {
  //
  mobile: /mobile\/\d+/,
  //
  pad: /ipad|touchpad|tablet\sos/,
  //
  // maxthon:/maxthon/,
  // theword:/the\sword/,
  firefox: {
    alias: 'mozilla',
    regex: /firefox\/([\d.]+)/,
    browser: true
  },
  chrome: {
    regex: /(?:chrome|crios)\/([\d.]+)/,
    browser: true
  },
  safari: {
    regex: /version\/([\d.]+).*?\ssafari/,
    browser: true
  },
  opera: {
    regex: /(?:opera|opr)(?:.*version|)\/([\d.]+)/,
    browser: true
  },
  msie: {
    alias: 'ie',
    regex: /(?:msie\s|trident.*?\srv:)([\d.]+)/,
    browser: true
  },
  edge: {
    regex: /edge?\/([\d.]+)/
  },
  qq: {
    regex: /m?qq(?:browser)?\/([\d.]+)/,
    browser: /m?qq(?:browser)\/([\d.]+)/,
    filter: ['safari'],
    client: /qq\/([\d.]+)/
  },

  /*wos:{
    regex:/wosbrowser\/([\d.]+)/,
    browser:true,
    filter:['safari']
  },
  dolfin: {
    regex:/dolfin(?:.*version|)\/([\d.]+)/,
    browser:true
  }, //
  silk: {
    regex:/silk(?:.*version|)\/([\d.]+)/,
    browser:true
  }, //
  */
  uc: {
    regex: /(?:uc)(?:web|browser)(?:.*version|\/)?([\d.]+)/,
    browser: true,
    mobile: true
  },
  //

  /*taobao: {
    regex:/(?:tao|taobao)browser(?:.*version|)\/([\d.]+)/,
    browser:true
  },*/
  liebao: {
    regex: /(?:lb)browser(?:.*? rv:([\d.]+)|)/,
    browser: true
  },

  /*ng:{
    regex:/browserng\/([\d.]+)/,
    browser:true
  },*/
  //
  micromessenger: {
    regex: /micromessenger\/([\d.]+)/,
    alias: 'webchat',
    devtools: 'wechatdevtools',
    desktop: 'windowswechat'
  },
  //engine
  webkit: {
    regex: /webkit\/(?:[\d.]+)/,
    engine: true
  },
  gecko: {
    regex: /gecko\/(?:[\d.]+)/,
    engine: true
  },
  // opera
  presto: {
    regex: /presto\/(?:[\d.]+)/,
    engine: true
  },
  //
  trident: {
    regex: /trident\/(?:[\d.]+)/,
    engine: true
  },
  //
  mac: {
    regex: /(?:mac os x)\s+([\w.]+)/,
    device: true
  },
  //
  windows: {
    regex: /(?:windows\snt)\s+([\d.]+)/,
    device: true
  },
  //
  linux: {
    regex: /linux/,
    device: true
  },
  chromeos: {
    regex: /cromeos/,
    device: true
  },
  //
  ios: /(?:i(?:pad|phone|pod))(?:.*)cpu(?: i(?:pad|phone|pod))? os (\d+(?:[\.|_]\d+){1,})/,
  android: {
    regex: /(?:android)\s+([\d.]+)/,
    device: true,
    mobile: true
  },
  windowsphone: {
    regex: /windows\sphone\sos\s([\d.]+)/,
    device: true,
    mobile: true
  },
  //
  ipad: {
    regex: /(?:ipad).*os\s([\d_]+)/,
    device: true,
    mobile: true
  },
  iphone: {
    regex: /(?:iphone\sos)\s(\w+)/,
    device: true,
    major: true,
    mobile: true
  },
  ipod: {
    regex: /(?:ipod)(?:.*)cpu(?: iphone)?\sos\s(\w+)/,
    device: true,
    mobile: true
  },
  touchpad: {
    regex: /touchpad\/([\d.]+)/,
    device: true,
    mobile: true
  },
  blackberry: {
    regex: /(?:playbook|blackberry|bb).*?(?:tablet\sos)?\s?([\d.]+)/,
    device: true,
    mobile: true //filter:['safari']

  }
  /*rimtablet:{
    regex: /rimtablet/,
    device:true,
    mobile:true
  }, //
  bada: {
    regex:/bada/,
    device:true,
    mobile:true
  }, //
  hpw: {
    alias:'hp',
    regex:/(?:webos|hpwos)[\s\/]([\d.]+)/,
    device:true,
    mobile:true
  },*/

  /*symbian:{
    regex:/symbianos\/([\d.]+)/,
    device:true,
    mobile:true
  },*/

};

function UserAgent(ua) {
  //
  ua = (ua || navigator.userAgent).toLowerCase();
  var res = {}; //

  function handle(rule) {
    //
    if (rule instanceof RegExp) {
      if (rule.test(ua)) {
        //
        return true;
      }
    } else if (typeof rule === 'string') {
      //
      return ua.indexOf(rule) !== -1;
    } //


    return !!rule;
  } //


  function handleVersion(name, value) {
    //
    if (value) {
      var version = value.replace(/_/g, '.');

      var _version$split = version.split('.'),
          _version$split2 = _slicedToArray(_version$split, 3),
          major = _version$split2[0],
          minor = _version$split2[1],
          patch = _version$split2[2]; //


      return {
        name: name,
        version: version,
        major: parseInt(major),
        minor: minor !== undefined ? parseInt(minor) : minor,
        patch: patch !== undefined ? parseInt(patch) : patch
      };
    }

    return {
      name: name
    };
  }

  function handleRule(key, rule, r) {
    //
    r = rule instanceof RegExp ? rule.exec(ua) : r;

    if (r) {
      //
      return handleVersion(key, r[1]);
    }
  } //


  var keys = Object.keys(DefaultRules);
  var correction = [];
  keys.forEach(function (key) {
    //
    var rule = DefaultRules[key]; // [rule]:/regex/

    if (rule instanceof RegExp) {
      //
      rule = {
        regex: rule
      };
    } //


    var _rule = rule,
        regex = _rule.regex,
        browser = _rule.browser,
        alias = _rule.alias,
        engine = _rule.engine,
        device = _rule.device,
        devtools = _rule.devtools,
        desktop = _rule.desktop,
        major = _rule.major,
        mobile = _rule.mobile,
        filter = _rule.filter,
        client = _rule.client; //

    var r = regex.exec(ua);

    if (r) {
      var v = handleVersion(key, r[1]); //

      res[key] = true; //

      if (alias) {
        res[alias] = true;
      }

      if (filter) {
        correction.push.apply(correction, _toConsumableArray(filter));
      } //


      if (mobile && !res['mobile']) {
        //
        res['mobile'] = true;
      } // iphone6 = true


      if (major && r[1]) {
        //
        var name = v.name,
            _major = v.major; //

        res[[name, _major].join('')] = true;
      } // [iphone-version] = 6.0.1


      if (r[1]) {
        //
        var _name = v.name,
            version = v.version; //

        res[[_name, 'version'].join('-')] = version;
      }
    } // {chrome:true,version:'79.0.1',major:79,minor:0,patch:1}


    if (browser) {
      var t = handleRule(key, browser, r);

      if (t) {
        //
        res['browser'] = t;
      }
    } // client


    if (client) {
      var _t = handleRule(key, client, r);

      if (_t) {
        //
        res['client'] = _t;
      }
    } // {iphone:true,device:'iphone',version:'9.0.1',major:9,minor:0,patch:1}


    if (device) {
      var _t2 = handleRule(key, device, r);

      if (_t2) {
        //
        res['device'] = _t2;
      }
    } // {webkit:true,engine:'webkit'}


    if (engine) {
      var _t3 = handleRule(key, engine, r);

      if (_t3) {
        //
        res['engine'] = _t3.name;
      }
    } // devtools = true


    if (devtools) {
      //
      var _r = handle(devtools);

      if (_r) {
        //
        res['devtools'] = _r;
      }
    } // desktop = true


    if (desktop) {
      //
      var _r2 = handle(desktop);

      if (_r2) {
        //
        res['desktop'] = _r2;
      }
    }
  }); //

  if (!res.mobile) {
    //
    res.desktop = true;
  } // 数据修正处理


  correction.forEach(function (rule) {
    //
    delete res[rule];
    delete res[[rule, 'version'].join('-')];
  }); //

  if (res.trident) {
    //
    res['msie'] = res['msie'] || true;
    res['ie'] = res['ie'] || true;
    res['browser'] = res['browser'] || {};
    res['browser']['name'] = res['browser']['name'] || 'msie';
  } else if (res.msie) {
    //
    res['trident'] = true;
    res['engine'] = 'trident';
  } //


  var DOMWindow = DOMWindow || {};

  if (DOMWindow && DOMWindow.UCNewsJSController) {
    res['uc'] = true;
    res['browser'] = 'uc';
  } //


  return res;
}
/**
 * 自定义规则处理
 * 
 * {
 *  micromessager:{
 *    micromessager:/micromessenger\/([\d.]+)/,
 *    devtools:'wechatdevtools'
 *  }
 * }
 * @param {*} rules 
 */


UserAgent.custom = function (rules) {
  //
  DefaultRules = _objectSpread$1(_objectSpread$1({}, DefaultRules), rules || {});
}; //


var checkV = function checkV(cv, v) {
  cv = parseInt(cv, 10) || 0;
  v = parseInt(v, 10) || 0; //

  if (cv > v) {
    //
    return true;
  }

  if (cv < v) {
    //
    return false;
  }

  return -1;
};
/**
 * 大于或等于某个版本
 * @param {*} currentVersion 
 * @param {*} checkVersion 
 * @returns 
 */


UserAgent.checkVersion = function (currentVersion, checkVersion) {
  // 外部调用传入为undefine
  if (!(currentVersion && checkVersion)) {
    //
    return false;
  } //


  if (typeof currentVersion === 'string') {
    //
    currentVersion = currentVersion.split('.');
  } //


  if (typeof checkVersion === 'string') {
    //
    checkVersion = checkVersion.split('.');
  } //


  var _checkVersion = checkVersion,
      _checkVersion2 = _slicedToArray(_checkVersion, 3),
      v1 = _checkVersion2[0],
      v2 = _checkVersion2[1],
      v3 = _checkVersion2[2];

  var _currentVersion = currentVersion,
      _currentVersion2 = _slicedToArray(_currentVersion, 3),
      cv1 = _currentVersion2[0],
      cv2 = _currentVersion2[1],
      cv3 = _currentVersion2[2]; //


  var r1 = checkV(cv1, v1);

  if (r1 !== -1) {
    //
    return r1;
  }

  var r2 = checkV(cv2, v2);

  if (r2 !== -1) {
    //
    return r2;
  }

  var r3 = checkV(cv3, v3);

  if (r3 !== -1) {
    //
    return r3;
  } // =


  return true;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var checkVersion = UserAgent.checkVersion; //

var universalJumpLinks = [];
var defaultLaunchButtonView = {
  cls: "launch-btn-view",
  style: {}
};
var defaultLaunchTipsView = {
  cls: "launch-tips-view",
  style: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.2)',
    zIndex: 10000,
    textAlign: 'center'
  }
}; // url地址连接符处理

var getUrlSign = function getUrlSign(url) {
  if (!url) {
    return '';
  } //


  if (url.indexOf('?') > -1) {
    //
    return '&';
  }

  return '?';
}; // 参数处理


var queryString = function queryString(params) {
  if (!params || _typeof(params) !== 'object') {
    return '';
  } //


  var keys = Object.keys(params);
  var res = [];
  keys.forEach(function (key) {
    if (params[key] !== undefined) {
      res.push("".concat(key, "=").concat(encodeURIComponent(params[key])));
    }
  }); //

  return res.join('&');
}; //


var query = function query(name) {
  var reg = new RegExp("".concat(name, "=([^&]+)"));
  var str = location.search;
  var res = str.match(reg);

  if (res && res.length > 1) {
    return res[1];
  }

  return '';
};

var DP = function DP(el) {
  //
  this.$el = document.createElement(el); //

  return this;
};

DP.prototype.attr = function (name, value) {
  var _this = this;

  //
  if (_typeof(name) === 'object') {
    var keys = Object.keys(name);
    keys.forEach(function (key) {
      //
      _this.attr(key, name[key]);
    });
  } else {
    //
    this.$el.setAttribute(name, value);
  } //


  return this;
};

DP.prototype.css = function (name, value) {
  var _this2 = this;

  //
  if (_typeof(name) === 'object') {
    var keys = Object.keys(name);
    keys.forEach(function (key) {
      //
      _this2.css(key, name[key]);
    });
  } else {
    //
    this.$el.style[name] = value;
  } //


  return this;
};

DP.prototype.append = function (el) {
  //
  this.$el.appendChild(el.$el ? el.$el : el);
  return this;
};

DP.prototype.text = function (text) {
  if (text !== undefined) {
    this.$el.innerText = text;
  } //


  return this;
};

DP.prototype.on = function (event, handle) {
  this.$el.addEventListener(event, handle); //

  return this;
};

var $$ = function $$(el) {
  //
  return new DP(el);
}; // 是否标记为提示


var iShowTipsView = function iShowTipsView() {
  //
  if (location.search && /showTips=1/.test(location.search)) {
    //
    return true;
  } //


  return false;
}; //


var LaunchButton = function LaunchButton(props) {
  var text = props.text,
      el = props.el,
      url = props.url,
      onClick = props.onClick,
      os = props.os,
      showTipsView = props.showTipsView,
      isUniversal = props.isUniversal,
      _props$launchButtonVi = props.launchButtonView,
      launchButtonView = _props$launchButtonVi === void 0 ? {} : _props$launchButtonVi;
  var cls = launchButtonView.cls || defaultLaunchButtonView.cls;

  var style = _objectSpread(_objectSpread({}, defaultLaunchButtonView.style), launchButtonView.style || {});

  var $btn = $$('div').text(text || '打开'); //

  if (cls) {
    $btn.attr('class', cls);
  } //


  if (style) {
    $btn.css(style);
  } //


  if (el) {
    var $el = _typeof(el) === 'object' ? el : document.querySelector(el); //

    $el.appendChild($btn.$el);
  } //


  $btn.on('click', function (e) {
    //
    if (onClick && onClick(e)) {
      return;
    } //


    if (os.micromessenger) {
      //
      if (iShowTipsView() || showTipsView) {
        //
        return TipsView.show(_objectSpread({}, props));
      }
    }

    if (!url) {
      return;
    } //


    if (isUniversal) {
      //
      var host = window.location.host;

      if (universalJumpLinks) {
        var index = universalJumpLinks.indexOf(host);

        if (index !== -1) {
          index += 1;

          if (index >= universalJumpLinks.length) {
            index = 0;
          }

          var currentJumpUrl = universalJumpLinks[index];
          url.replace(host, currentJumpUrl), _readOnlyError("url");
        }
      }
    } //


    var currentUrl = null;

    if (!iShowTipsView()) {
      var sign = getUrlSign(url);
      currentUrl = "".concat(url).concat(sign, "showTips=1");
    } else {
      // 已经在浏览器中，移除showTips参数
      currentUrl = url.replace('showTips=1', 'showTips=0');
    } //


    window.location.href = currentUrl;
  }); //

  return $btn.$el;
}; //


var TipsView = function TipsView(props) {
  var _props$launchTipsView = props.launchTipsView,
      launchTipsView = _props$launchTipsView === void 0 ? {} : _props$launchTipsView;
  var $el = $$('div').on('click', function () {
    //
    TipsView.hide();
  }); //

  var cls = launchTipsView.cls || defaultLaunchTipsView.cls;

  var style = _objectSpread(_objectSpread({}, defaultLaunchTipsView.style), launchTipsView.style || {}); //


  if (cls) {
    $el.attr('class', cls);
  } //


  if (style) {
    $el.css(style);
  } //


  TipsView.$el = $el.$el; //

  document.body.appendChild($el.$el); //

  return $el;
};

TipsView.show = function (props) {
  //
  if (!TipsView.$el) {
    //
    return new TipsView(props);
  }
};

TipsView.hide = function () {
  //
  if (TipsView.$el) {
    TipsView.$el.parentNode.removeChild(TipsView.$el);
    TipsView.$el = null;
  }
}; //


var setUniversalJumpLinks = function setUniversalJumpLinks(links) {
  //
  universalJumpLinks = _toConsumableArray$1(links);
}; //

var deeplink = (function (props) {
  var wxConfig = props.wxConfig,
      wxConfigError = props.wxConfigError,
      _props$launchOptions = props.launchOptions,
      launchOptions = _props$launchOptions === void 0 ? {} : _props$launchOptions,
      launchSuccess = props.launchSuccess,
      launchError = props.launchError,
      _props$launchErrorToD = props.launchErrorToDownload,
      launchErrorToDownload = _props$launchErrorToD === void 0 ? true : _props$launchErrorToD,
      packageName = props.packageName,
      iosPackageName = props.iosPackageName,
      androidPackageName = props.androidPackageName,
      downloadURL = props.downloadURL,
      universalURL = props.universalURL,
      _props$universalOptio = props.universalOptions,
      universalOptions = _props$universalOptio === void 0 ? {} : _props$universalOptio,
      errorPageURL = props.errorPageURL,
      schemeURL = props.schemeURL,
      androidSchemeURL = props.androidSchemeURL,
      iosSchemeURL = props.iosSchemeURL,
      _props$schemeOptions = props.schemeOptions,
      schemeOptions = _props$schemeOptions === void 0 ? {} : _props$schemeOptions,
      _props$autoSchemeURL = props.autoSchemeURL,
      autoSchemeURL = _props$autoSchemeURL === void 0 ? true : _props$autoSchemeURL,
      wxAppSchemeURL = props.wxAppSchemeURL,
      _props$autoWxAppSchem = props.autoWxAppSchemeURL,
      autoWxAppSchemeURL = _props$autoWxAppSchem === void 0 ? false : _props$autoWxAppSchem,
      itunesURL = props.itunesURL,
      ipadItunesURL = props.ipadItunesURL,
      iphoneItunesURL = props.iphoneItunesURL,
      _props$supportLaunch = props.supportLaunch,
      supportLaunch = _props$supportLaunch === void 0 ? '' : _props$supportLaunch,
      _props$supportScheme = props.supportScheme,
      supportScheme = _props$supportScheme === void 0 ? true : _props$supportScheme,
      _props$supportItunes = props.supportItunes,
      supportItunes = _props$supportItunes === void 0 ? true : _props$supportItunes,
      _props$supportUnivers = props.supportUniversal,
      supportUniversal = _props$supportUnivers === void 0 ? true : _props$supportUnivers,
      _props$wxAuthRequired = props.wxAuthRequired,
      wxAuthRequired = _props$wxAuthRequired === void 0 ? false : _props$wxAuthRequired,
      _props$supportDeepLin = props.supportDeepLinkJumpQuery,
      supportDeepLinkJumpQuery = _props$supportDeepLin === void 0 ? true : _props$supportDeepLin,
      handleDownloadSchemeUrl = props.handleDownloadSchemeUrl,
      handleUniversalUrl = props.handleUniversalUrl,
      handleCurrentUrl = props.handleCurrentUrl; //

  var os = new UserAgent(navigator.userAgent);
  console.log(os);
  var currentDeepLinkJumpQuery = query('deepLinkJumpQuery'); //

  var currentItunesURL = (os.ipad ? ipadItunesURL : iphoneItunesURL) || itunesURL;
  var currentSchemeURL = (os.android ? androidSchemeURL : iosSchemeURL) || schemeURL; // 获取中间页跳转参数

  function getDeepLinkJumpUrl(url) {
    // 不进行中转页跳转处理
    if (!supportDeepLinkJumpQuery) {
      return url;
    } // 


    if (/(?:\?|\&)deepLinkJumpQuery\=/.test(url)) {
      return url;
    }

    var sign = getUrlSign(url); // 添加跳转参数

    if (currentDeepLinkJumpQuery) {
      //
      return "".concat(url).concat(sign, "deepLinkJumpQuery=").concat(currentDeepLinkJumpQuery);
    }

    var schurl = getSchemeUrl(); //

    if (schurl) {
      //
      return "".concat(url).concat(sign, "deepLinkJumpQuery=").concat(encodeURIComponent(schurl));
    } //


    return url;
  } // 获取下载scheme url


  function getDownloadSchemeUrl(notOnly) {
    // 需要微信授权，走universal中间页流程
    if (os.micromessager && wxAuthRequired && notOnly) {
      //
      var _url = getUniversalUrl();

      if (_url) {
        return _url;
      }
    } // 自动唤起时，点击不进入下载
    // 静默唤起的方式，某些设备上需要二次点击，而且操作体验不是很好


    if (autoSchemeURL && !downloadURL) {
      //
      return getSchemeUrl();
    } // 


    if (!(downloadURL && currentSchemeURL)) {
      return null;
    }

    var iosSchemeURLEncode = encodeURIComponent(iosSchemeURL || schemeURL || '');
    var androidSchemeURLEncode = encodeURIComponent(androidSchemeURL || schemeURL || '');
    var currentPackageName = (os.ios ? iosPackageName : androidPackageName) || packageName;
    var sign = getUrlSign(downloadURL);
    var url = "".concat(downloadURL).concat(sign, "pkgname=").concat(currentPackageName, "&ios_scheme=").concat(iosSchemeURLEncode, "&android_schema=").concat(androidSchemeURLEncode); // 外部自定义处理参数

    if (handleDownloadSchemeUrl) {
      //
      return handleDownloadSchemeUrl(url, {
        packageName: currentPackageName,
        ios_scheme_url: iosSchemeURLEncode,
        android_scheme_url: androidSchemeURLEncode
      }, os);
    } //


    return url;
  } // 


  function getSchemeUrl() {
    //
    if (currentDeepLinkJumpQuery) {
      return decodeURIComponent(currentDeepLinkJumpQuery);
    }

    if (!currentSchemeURL) {
      return null;
    } //


    if (schemeOptions) {
      var sign = getUrlSign(currentSchemeURL);
      var str = queryString(schemeOptions);

      if (str) {
        //
        return "".concat(currentSchemeURL).concat(sign).concat(str);
      }
    } //


    return currentSchemeURL;
  } //


  function getUniversalUrl() {
    if (!universalURL) {
      return null;
    } // 外部已处理参数
    // 不处理universalOptions参数


    if (/(?:\?|\&)schemeUrl\=/.test(universalURL) || !universalOptions) {
      return universalURL;
    } // true => {}


    var currentUniversalOptions = typeof universalOptions === 'boolean' ? {} : universalOptions; // 使用scheme配置得到schemeUrl参数

    currentUniversalOptions.schemeUrl = currentUniversalOptions.schemeUrl || getSchemeUrl(); // 添加跳转参数

    if (currentUniversalOptions) {
      currentUniversalOptions.deepLinkJumpQuery = getSchemeUrl();
    } //


    if (currentUniversalOptions) {
      var sign = getUrlSign(universalURL);
      var str = queryString(currentUniversalOptions); //

      if (str) {
        //
        return "".concat(universalURL).concat(sign).concat(str);
      }
    } //


    if (handleUniversalUrl) {
      //
      return handleUniversalUrl(universalURL, _objectSpread({}, currentUniversalOptions), os);
    } //


    return universalURL;
  } // APP中打开，直接走scheme url的流程


  function getCurrentUrl(url) {
    // 已经在APP中，直接使用scheme url
    if (handleCurrentUrl) {
      //
      url = handleCurrentUrl(url, {
        schemeUrl: decodeURIComponent(getSchemeUrl())
      }, os);
    } //


    return getDeepLinkJumpUrl(url);
  } // 获取错误跳转链接地址


  function getErrorPageUrl() {
    var url = errorPageURL || universalURL;
    var sign = getUrlSign(url);
    var currentUrl = "".concat(url).concat(sign, "supportLaunch=1"); // 标记为不支持
    //

    return currentUrl;
  } //  


  if (os.micromessenger && wxConfig) {
    //
    wx.config(_objectSpread({
      openTagList: ['wx-open-launch-app', 'wx-open-launch-weapp']
    }, wxConfig)); //

    wx.error(function (res) {
      //
      wxConfigError && wxConfigError(res);
    });
  } // 1. wx-open-launch-*方案


  if (checkVersion(os['micromessenger-version'], [7, 0, 12])) {
    // 系统版本检测，iOS 10.3及以上、Android 5.0及以上
    if (os.ios && checkVersion(os['ios-version'], [10, 3]) || os.android && checkVersion(os['android-version'], [5, 0])) {
      //
      var appid = launchOptions.appid,
          username = launchOptions.username;
      var $wxbtn = null; // 打开APP

      if (appid) {
        //
        $wxbtn = $$('wx-open-launch-app').attr(launchOptions).append(LaunchButton(_objectSpread(_objectSpread({}, props), {}, {
          el: null,
          os: os
        })));
      } // 打开小程序


      if (username) {
        //
        $wxbtn = $$('wx-open-launch-weapp').attr(launchOptions).append(LaunchButton(_objectSpread(_objectSpread({}, props), {}, {
          el: null,
          os: os
        })));
      } //


      if ($wxbtn) {
        //
        var launchEventSuccess = function launchEventSuccess(e) {
          //
          launchSuccess && launchSuccess(e);
        }; //


        var launchEventError = function launchEventError(e) {
          //
          if (!(launchError && launchError(e))) {
            //
            var currentUrl = getErrorPageUrl(); // 直接进入下载流程

            if (launchErrorToDownload && currentDownloadUrl) {
              //
              return window.local.href = currentDownloadUrl;
            } //


            return window.location.href = currentUrl;
          }
        }; //


        $wxbtn.on('launch', launchEventSuccess);
        $wxbtn.on('error', launchEventError); //

        if (props.el) {
          var el = props.el;
          var $el = _typeof(el) === 'object' ? el : document.querySelector(el); //

          return $el.appendChild($wxbtn.$el);
        } //


        return $wxbtn.$el;
      }
    }
  } // 在微信环境中，有标记的时候，直接显示提示信息


  if (iShowTipsView() && os.micromessenger) {
    //
    var t = setTimeout(function () {
      //
      TipsView.show(_objectSpread({}, props));
      clearTimeout(t);
    }, 100);
  } // 2. Universal Link


  if (supportUniversal && os.ios && universalURL && checkVersion(os['ios-version'], [9, 0]) || supportLaunch === 'universal') {
    var url = getUniversalUrl(); //

    url = getCurrentUrl(url); //

    return LaunchButton(_objectSpread(_objectSpread({}, props), {}, {
      isUniversal: true,
      url: url,
      os: os,
      onClick: function onClick() {
        var onClick = props.onClick;

        if (onClick && typeof onClick === 'function') {
          //
          onClick(e);
        } // 微信环境 wx >= 7.0.7,ios >= 12.0


        if (os.micromessenger) {
          if (checkVersion(os['micromessenger-version'], [7, 0, 7]) && checkVersion(os['ios-version'], [12, 0])) {
            //
            return false;
          } // 微信环境 ios >=9.0 && ios< 12.0
          else if (checkVersion(os['ios-version'], [9, 0])) {
            //
            TipsView.show(_objectSpread({}, props));
            return true;
          }
        }
      }
    }));
  } // 3. 应用宝地址+scheme


  if (supportScheme && (currentSchemeURL || supportLaunch === 'scheme')) {
    // 非微信环境，静默唤起scheme url方式
    // 可通过autoSchemeURL控制首次进入不跳转，但是点击操作过进入，依然会唤起
    if (!os.micromessenger && (autoSchemeURL || iShowTipsView())) {
      //
      var id = '_scheme_iframe';

      var _url3 = getSchemeUrl();

      var $iframe = $$('iframe').attr('id', id).attr('src', _url3).css({
        'position': 'absolute',
        'zIndex': '-1',
        'opacity': 0,
        'width': '1px',
        'height': '1px'
      }).on('load', function () {}); //

      document.body.appendChild($iframe.$el);
    } //


    var _url2 = getCurrentUrl(getDownloadSchemeUrl(true)); //


    return LaunchButton(_objectSpread(_objectSpread({}, props), {}, {
      url: _url2,
      os: os,
      showTipsView: !!schemeOptions && !wxAuthRequired
    }));
  } // 4. 使用itunes地址，可以在微信环境中打开


  if (supportItunes && (os.ios && currentItunesURL || supportLaunch === 'itunes')) {
    //
    var _url4 = getCurrentUrl(currentItunesURL);

    return LaunchButton(_objectSpread(_objectSpread({}, props), {}, {
      url: _url4,
      os: os
    }));
  } // 5. wxAppSchemeURL


  if (wxAppSchemeURL && ((autoWxAppSchemeURL || iShowTipsView()) && checkVersion(os['micromessenger-version'], [8, 0, 6]) || supportLaunch === 'wxscheme')) {
    //
    return location.href = wxAppSchemeURL;
  } //


  return LaunchButton(_objectSpread(_objectSpread({}, props), {}, {
    url: errorPageURL || universalURL,
    os: os
  }));
});

export { deeplink as default, setUniversalJumpLinks };
