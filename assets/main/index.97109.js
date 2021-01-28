window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  all_modules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74d5cdOYhJKHLkeyIiWp4KQ", "all_modules");
    "use strict";
    exports.__esModule = true;
    var _configs = require("./configs");
    Object.keys(_configs).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _configs[key];
    });
    var _utils = require("./utils/utils");
    Object.keys(_utils).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _utils[key];
    });
    var _utils_facebook = require("./utils/utils_facebook");
    Object.keys(_utils_facebook).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _utils_facebook[key];
    });
    var _video = require("./utils/video");
    Object.keys(_video).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _video[key];
    });
    var _inter_ad = require("./utils/inter_ad");
    Object.keys(_inter_ad).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _inter_ad[key];
    });
    var _friend = require("./social/friend");
    Object.keys(_friend).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _friend[key];
    });
    var _audio = require("./utils/audio");
    Object.keys(_audio).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _audio[key];
    });
    var _ui = require("./ui-fx/ui");
    Object.keys(_ui).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _ui[key];
    });
    var _fx = require("./ui-fx/fx");
    Object.keys(_fx).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _fx[key];
    });
    var _ui_challenge = require("./ui-fx/ui_challenge");
    Object.keys(_ui_challenge).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _ui_challenge[key];
    });
    var _ui_power_item = require("./ui-fx/ui_power_item");
    Object.keys(_ui_power_item).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _ui_power_item[key];
    });
    var _tut = require("./tut/tut");
    Object.keys(_tut).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _tut[key];
    });
    var _tut_rolated = require("./tut/tut_rolated");
    Object.keys(_tut_rolated).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _tut_rolated[key];
    });
    var _tut_bom = require("./tut/tut_bom");
    Object.keys(_tut_bom).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _tut_bom[key];
    });
    var _tut_relocated = require("./tut/tut_relocated");
    Object.keys(_tut_relocated).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _tut_relocated[key];
    });
    var _tut_triple = require("./tut/tut_triple");
    Object.keys(_tut_triple).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _tut_triple[key];
    });
    var _login = require("./logic/login");
    Object.keys(_login).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _login[key];
    });
    var _data = require("./logic/data");
    Object.keys(_data).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _data[key];
    });
    var _game = require("./logic/game");
    Object.keys(_game).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _game[key];
    });
    var _user = require("./logic/user");
    Object.keys(_user).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _user[key];
    });
    var _control = require("./core/control");
    Object.keys(_control).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _control[key];
    });
    var _map = require("./core/map");
    Object.keys(_map).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _map[key];
    });
    var _map_visual = require("./core/map_visual");
    Object.keys(_map_visual).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _map_visual[key];
    });
    var _social = require("./social/social");
    Object.keys(_social).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _social[key];
    });
    var _promo = require("./social/promo");
    Object.keys(_promo).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _promo[key];
    });
    var _leaderboard = require("./social/leaderboard");
    Object.keys(_leaderboard).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _leaderboard[key];
    });
    var _localize = require("./utils/localize");
    Object.keys(_localize).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _localize[key];
    });
    var _localize_config = require("./utils/localize_config");
    Object.keys(_localize_config).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      exports[key] = _localize_config[key];
    });
    cc._RF.pop();
  }, {
    "./configs": "configs",
    "./core/control": "control",
    "./core/map": "map",
    "./core/map_visual": "map_visual",
    "./logic/data": "data",
    "./logic/game": "game",
    "./logic/login": "login",
    "./logic/user": "user",
    "./social/friend": "friend",
    "./social/leaderboard": "leaderboard",
    "./social/promo": "promo",
    "./social/social": "social",
    "./tut/tut": "tut",
    "./tut/tut_bom": "tut_bom",
    "./tut/tut_relocated": "tut_relocated",
    "./tut/tut_rolated": "tut_rolated",
    "./tut/tut_triple": "tut_triple",
    "./ui-fx/fx": "fx",
    "./ui-fx/ui": "ui",
    "./ui-fx/ui_challenge": "ui_challenge",
    "./ui-fx/ui_power_item": "ui_power_item",
    "./utils/audio": "audio",
    "./utils/inter_ad": "inter_ad",
    "./utils/localize": "localize",
    "./utils/localize_config": "localize_config",
    "./utils/utils": "utils",
    "./utils/utils_facebook": "utils_facebook",
    "./utils/video": "video"
  } ],
  audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88b28IoBUlP2qQJxs0a1LIc", "audio");
    "use strict";
    exports.__esModule = true;
    exports.audio = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          it && (o = it);
          var i = 0;
          return function() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var audio = {
      audioList: {},
      playingIdList: {},
      isSoundOff: true,
      init: function init() {
        var _this = this;
        _GAME.login.addLoginDataField("isSoundOff");
        _GAME.login.addCallback(function(data) {
          _this.isSoundOff = data.isSoundOff;
          _this.renderBtnSound();
          _this.loadAudios();
        });
        var btnSoundOff = cc.find("Canvas/layer_pause/btn_sound_off");
        _GAME.utils.addButtonComp(btnSoundOff, function() {
          _this.isSoundOff = false;
          _this.playMusic();
          _GAME.ui.showNagScreen();
          _GAME.data.saveData({
            isSoundOff: false
          }, function() {
            _this.renderBtnSound();
            _GAME.ui.hideNagScreen();
          });
        });
        var btnSoundOn = cc.find("Canvas/layer_pause/btn_sound_on");
        _GAME.utils.addButtonComp(btnSoundOn, function() {
          _this.isSoundOff = true;
          _this.stopMusic();
          _GAME.ui.showNagScreen();
          _GAME.data.saveData({
            isSoundOff: true
          }, function() {
            _this.renderBtnSound();
            _GAME.ui.hideNagScreen();
          });
        });
      },
      renderBtnSound: function renderBtnSound(isSoundOff) {
        cc.find("Canvas/layer_pause/btn_sound_off").active = this.isSoundOff;
        cc.find("Canvas/layer_pause/btn_sound_on").active = !this.isSoundOff;
      },
      loadAudios: function loadAudios() {
        var _this2 = this;
        cc.resources.loadDir("audios", cc.AudioClip, function(err, res) {
          if (err) return _log(err);
          for (var _iterator = _createForOfIteratorHelperLoose(res), _step; !(_step = _iterator()).done; ) {
            var clip = _step.value;
            _this2.audioList[clip.name] = clip;
          }
          _this2.playMusic();
        });
      },
      playSound: function playSound(name, volume) {
        void 0 === volume && (volume = 1);
        if (this.isSoundOff) return;
        this.playingIdList[name] = cc.audioEngine.play(this.audioList[name], false, volume);
      },
      stopSound: function stopSound(name) {
        this.playingIdList[name] && cc.audioEngine.stopEffect(this.playingIdList[name]);
      },
      playMusic: function playMusic() {
        if (this.isSoundOff) return;
        if (cc.audioEngine.isMusicPlaying()) return;
        try {
          this.playingIdList["back_ground_music"] = cc.audioEngine.playMusic(this.audioList["back_ground_music"], true, 1);
        } catch (e) {
          _log("playMusic err ", e);
        }
      },
      stopMusic: function stopMusic() {
        cc.audioEngine.isMusicPlaying() && cc.audioEngine.stopMusic();
      },
      playSoundClickButton: function playSoundClickButton() {
        if (this.isSoundOff) return;
        this.playSound("click", .2);
      },
      updateUiSoundButton: function updateUiSoundButton() {
        var btn_sound_on = cc.find("Canvas/layer_pause/btn_sound_on");
        var btn_sound_off = cc.find("Canvas/layer_pause/btn_sound_off");
      }
    };
    exports.audio = audio;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  blockAsset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a85f5pSvJxKfb+SdUSNquhZ", "blockAsset");
    "use strict";
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        assetBlock: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  block_collision_handler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8bfb5rS031ICo5XUCoumhuR", "block_collision_handler");
    "use strict";
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        collidingCellArr: [],
        newItemPosDiff: cc.v2(0, 0),
        cellPosDiff: cc.v2(0, 0),
        highlightCellArr: []
      },
      onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.collidingCellArr.push(other.node);
      },
      onCollisionStay: function onCollisionStay(other, self) {
        var newItemPosDiff = _GAME.utils.global2LocalPosDiff(this.node, 0, 0);
        var selectedCell;
        var nearestDistance = 999;
        this.collidingCellArr.map(function(cell) {
          var distance = _GAME.utils.global2LocalPosDiff(cell, 0, 0).sub(newItemPosDiff).mag();
          if (distance < nearestDistance) {
            nearestDistance = distance;
            selectedCell = cell;
          }
        });
        var cellNumber = selectedCell.name.replace("Image_HexBlock_", "");
        var minorCellNumber = _GAME.map.checkNewItemDroppableAtCell(cellNumber);
        if (minorCellNumber) {
          this.unfocusAllCells();
          this.highlightCell(selectedCell);
          _GAME.map.selectedCell = selectedCell;
          if ("single_block" != _GAME.game.currentItemBiasType) {
            var minorCell = _GAME.map.minorCell = cc.find("Canvas/play_area/map/Image_HexBlock_" + minorCellNumber);
            this.highlightCell(minorCell);
          }
        }
      },
      onCollisionExit: function onCollisionExit(other, self) {
        _GAME.map.selectedCell && this.unfocusCell(_GAME.map.selectedCell);
        _GAME.map.minorCell && this.unfocusCell(_GAME.map.minorCell);
        _GAME.map.selectedCell = null;
        _GAME.map.minorCell = null;
        _removeArrItem(this.collidingCellArr, other.node);
      },
      highlightCell: function highlightCell(cellNode) {
        cellNode.getChildByName("bg").opacity = 128;
        this.highlightCellArr.push(cellNode);
      },
      unfocusCell: function unfocusCell(cellNode) {
        cellNode.getChildByName("bg").opacity = 51;
        _removeArrItem(this.highlightCellArr, cellNode);
      },
      unfocusAllCells: function unfocusAllCells() {
        var _this = this;
        this.highlightCellArr.map(function(cellNode) {
          return _this.unfocusCell(cellNode);
        });
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  canvas_init: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edbc09V+u1Go6WX4KJs6Rar", "canvas_init");
    "use strict";
    var _GAME = _interopRequireWildcard(require("./all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        window._GAME = _GAME;
        for (var moduleName in _GAME) _GAME[moduleName].init && _GAME[moduleName].init();
        _GAME.utilsFB.log("ev_game_load_time", performance.now());
        _GAME.cocosLoadTime = (performance.now() / 1e3).toFixed(2);
        _GAME.utils.setLabelText(cc.find("Canvas/layer_pause/label_load_time"), _GAME.cocosLoadTime);
        _GAME.utils.setTimeout(function() {
          _GAME.social.askBotSubscribe(function() {
            return _GAME.social.askShortcut();
          });
        }, 1e3);
        var loadingBg = document.getElementById("htmlLoadingBackground");
        loadingBg && (loadingBg.style.display = "none");
      }
    });
    cc._RF.pop();
  }, {
    "./all_modules": "all_modules"
  } ],
  cell_links: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b2399tIlatFcb6Z+FaLPjhH", "cell_links");
    "use strict";
    module.exports = {
      "8_4": "right_bias",
      "4_1": "right_bias",
      "13_9": "right_bias",
      "9_5": "right_bias",
      "5_2": "right_bias",
      "17_14": "right_bias",
      "14_10": "right_bias",
      "10_6": "right_bias",
      "6_3": "right_bias",
      "18_15": "right_bias",
      "15_11": "right_bias",
      "11_7": "right_bias",
      "19_16": "right_bias",
      "16_12": "right_bias",
      "8_13": "left_bias",
      "13_17": "left_bias",
      "4_9": "left_bias",
      "9_14": "left_bias",
      "14_18": "left_bias",
      "1_5": "left_bias",
      "5_10": "left_bias",
      "10_15": "left_bias",
      "15_19": "left_bias",
      "2_6": "left_bias",
      "6_11": "left_bias",
      "11_16": "left_bias",
      "3_7": "left_bias",
      "7_12": "left_bias",
      "1_2": "horizontal",
      "2_3": "horizontal",
      "4_5": "horizontal",
      "5_6": "horizontal",
      "6_7": "horizontal",
      "8_9": "horizontal",
      "9_10": "horizontal",
      "10_11": "horizontal",
      "11_12": "horizontal",
      "13_14": "horizontal",
      "14_15": "horizontal",
      "15_16": "horizontal",
      "17_18": "horizontal",
      "18_19": "horizontal"
    };
    cc._RF.pop();
  }, {} ],
  configs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdca8wFyltOr6zw44vo+4w/", "configs");
    "use strict";
    exports.__esModule = true;
    exports.configs = void 0;
    var _GAME = _interopRequireWildcard(require("./all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var configs = {
      off_inter_ads: false,
      off_power_item: false,
      leaderboardName: "score_global",
      leaderboardPlayerCount: 15,
      isShowPromoGames: cc.sys.os != cc.sys.OS_IOS,
      listIdPromoGame: [ "1290260324506853", "227806484682918", "617940745660759" ],
      totalTurnAds: 3,
      canShowAndLoadInter: false,
      interAdId: "1039089903197791_1060209887752459",
      interAdRatio: {
        gameOverReplay: 1
      },
      videoRewardId: "1039089903197791_1045666869206761",
      videoContinueTime: 1,
      maxCountCancelChallenge: 3,
      showInterAdAfterEveryReplayTime: 3,
      biasType: {
        1: [ "right_bias", "left_bias", "single_block" ],
        2: [ "right_bias", "horizontal", "single_block" ],
        3: [ "right_bias", "left_bias", "horizontal" ],
        4: [ "right_bias", "left_bias", "horizontal", "single_block" ]
      },
      stepCount2BiasTypeArr: function stepCount2BiasTypeArr(stepCount) {
        var lastStep = 0;
        for (var i in this.biasType) {
          if (i > stepCount) return this.biasType[lastStep];
          i <= stepCount && (lastStep = i);
        }
        return this.biasType[lastStep];
      },
      blockNumber: {
        1: [ 1, 2, 3, 4, 5, 6 ]
      },
      stepCount2BlockNumerArr: function stepCount2BlockNumerArr(stepCount) {
        var lastStep = 0;
        for (var i in this.blockNumber) {
          if (i > stepCount) return this.blockNumber[lastStep];
          i <= stepCount && (lastStep = i);
        }
        return this.blockNumber[lastStep];
      },
      singleBlockPoint: {
        1: 2,
        2: 4,
        3: 8,
        4: 16,
        5: 32,
        6: 64,
        7: 128
      },
      scoreFactor: {
        3: 3,
        4: 3.5,
        5: 5,
        6: 6.5,
        7: 8
      },
      calculateScore: function calculateScore(blockNumber, blockCount) {
        return parseInt(_GAME.configs.singleBlockPoint[blockNumber] * (_GAME.configs.scoreFactor[blockCount] || 1));
      }
    };
    exports.configs = configs;
    cc._RF.pop();
  }, {
    "./all_modules": "all_modules"
  } ],
  control: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7ad2Kl8kxELKAtoLzViwxY", "control");
    "use strict";
    exports.__esModule = true;
    exports.control = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var EXTRA_POS = cc.v2(0, 150);
    cc.RotateBy._reverse = true;
    var control = {
      newItemNode: null,
      init: function init() {
        var _this = this;
        var newItem = this.newItemNode = cc.find("Canvas/play_area/new_item_container/new_item");
        var posDiff = _GAME.utils.global2LocalPosDiff(newItem, 0, 0);
        var lastTouchStartPos;
        var lastTouchStartTime;
        var touchStartFunc = function touchStartFunc(pos, eventObj) {
          newItem.isBeingDragged = true;
          lastTouchStartPos = pos;
          lastTouchStartTime = _time();
        };
        var touchMoveFunc = function touchMoveFunc(pos, eventObj) {
          if (pos.sub(lastTouchStartPos).mag() < 20) return;
          _this.setArrowsActive(false);
          _GAME.tut.checkHideTutHand();
          newItem.isBeingDragged && (newItem.position = pos.add(posDiff).add(EXTRA_POS));
        };
        var touchEndFunc = function touchEndFunc(pos, eventObj) {
          newItem.isBeingDragged = false;
          newItem.position = cc.v2(0, 0);
          _GAME.tut.checkShowTutHand();
          _this.setArrowsActive(false);
          if ("single_block" != _GAME.game.currentItemBiasType && lastTouchStartPos.sub(pos).mag() < 10 && _time() - lastTouchStartTime < 400 && newItem.position.mag() < 10) {
            _GAME.tutRolated.checkDoneTutRolated() || _GAME.tutRolated.endTut();
            _GAME.game.swapNewItemBlocks();
          }
          _GAME.map.selectedCell && _GAME.game.dropNewItemAtCell(_GAME.map.selectedCell.cellNumber, _GAME.map.minorCell ? _GAME.map.minorCell.cellNumber : null);
        };
        _GAME.utils.singleTouchSet(newItem, touchStartFunc, touchMoveFunc, touchEndFunc);
      },
      setArrowsActive: function setArrowsActive(isActive) {
        var arrows = cc.find("Canvas/play_area/new_item_container/new_item/arrows");
        arrows.active = isActive;
        return arrows;
      },
      setKeyBlock: function setKeyBlock(blockNode) {
        var isParentRotated = _abs(blockNode.parent.angle % 360) > 90;
        var posExtra = isParentRotated ? blockNode.position.mul(2) : cc.v2();
        var keyBlockCollider = cc.find("Canvas/play_area/new_item_container/new_item/key_block_collider");
        _GAME.utils.setGlobalPositionToNode(keyBlockCollider, blockNode);
        keyBlockCollider.x -= posExtra.x;
        keyBlockCollider.y -= posExtra.y;
      },
      setControlTouchArea: function setControlTouchArea(itemType) {
        var touchNode = cc.find("Canvas/play_area/new_item_container/new_item");
        switch (itemType) {
         case "single_block":
          touchNode.width = 280;
          touchNode.height = 300;
          break;

         case "left_bias":
         case "right_bias":
          touchNode.width = 240;
          touchNode.height = 380;
          break;

         case "horizontal":
          touchNode.width = 300;
          touchNode.height = 300;
        }
      }
    };
    exports.control = control;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  data: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4a28ljNq1Csqic6OP3kCcl", "data");
    "use strict";
    exports.__esModule = true;
    exports.data = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var data = {
      init: function init() {
        _GAME.data.isUserReady = true;
      },
      saveData: function saveData(dataObj, callbackSuccess, calbackFail) {
        window.FBInstant ? FBInstant.player.setDataAsync(dataObj).then(function() {
          callbackSuccess && callbackSuccess();
        }) : _GAME.utils.setTimeout(function() {
          for (var key in dataObj) try {
            localStorage.setItem(key, JSON.stringify(dataObj[key]));
          } catch (e) {
            _log(e);
          }
          callbackSuccess && callbackSuccess();
        }, 500);
      },
      loadData: function loadData(keyArr, callbackSuccess) {
        window.FBInstant ? FBInstant.player.getDataAsync(keyArr).then(function(data) {
          callbackSuccess && callbackSuccess(data);
        }) : _GAME.utils.setTimeout(function() {
          var data = {};
          keyArr.map(function(key) {
            var strData = localStorage.getItem(key);
            if (strData) try {
              data[key] = JSON.parse(strData);
            } catch (e) {
              "Field" == key;
            }
          });
          callbackSuccess && callbackSuccess(data);
        }, 500);
      },
      loadEntryPointData: function loadEntryPointData() {
        if (window.FBInstant) {
          var _data = FBInstant.getEntryPointData();
          _data && _data.player_sent_id && (_GAME.user.playerIdShare = _data.player_sent_id);
          _GAME.user.entryPointData = _data;
        }
      }
    };
    exports.data = data;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  free_button_comp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e7e82EJvRBq4M1AC0hpaoZ", "free_button_comp");
    "use strict";
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      freeHandler: function freeHandler(e) {
        if (e.target.freeButtonHandlerFunc) {
          e.target.freeButtonHandlerFunc(e.target);
          _GAME.audio.playSoundClickButton();
        }
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  friend: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18941O53T5Iy6ueNA/xMtPZ", "friend");
    "use strict";
    exports.__esModule = true;
    exports.friend = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var friend = {
      listFrienlds: [],
      cacheFriend: [],
      init: function init() {
        _GAME.utils.setTimeout(function() {});
      },
      loadDataFrienld: function loadDataFrienld() {
        window.FBInstant && FBInstant.player.getConnectedPlayersAsync().then(function(players) {
          _GAME.friend.listFrienlds = [];
          players.map(function(player) {
            _GAME.friend.listFrienlds.push({
              id: player.getID(),
              score: 0,
              name: player.getName(),
              photo: player.getPhoto()
            });
          });
        });
      },
      getRandomFriendInList: function getRandomFriendInList() {
        var result = null;
        if (_GAME.friend.listFrienlds && 0 != _GAME.friend.listFrienlds.length) {
          var _ret = function() {
            var friendRandom = _GAME.utils.randomArrItem(_GAME.friend.listFrienlds);
            if (friendRandom) if (0 == _GAME.friend.cacheFriend.length) {
              result = friendRandom;
              _GAME.friend.cacheFriend.push(friendRandom);
            } else {
              var isPassFrienld = _GAME.friend.cacheFriend.find(function(user) {
                return user.id == friendRandom.id;
              });
              if (isPassFrienld) {
                var total = 10;
                while (isPassFrienld) {
                  friendRandom = _GAME.utils.randomArrItem(_GAME.friend.listFrienlds);
                  isPassFrienld = _GAME.friend.cacheFriend.find(function(user) {
                    return user.id == friendRandom.id;
                  });
                  total--;
                  if (!isPassFrienld || 0 == total) {
                    result == isPassFrienld;
                    return {
                      v: result
                    };
                  }
                }
              } else {
                result = friendRandom;
                _GAME.friend.cacheFriend.push(friendRandom);
              }
            }
          }();
          if ("object" === typeof _ret) return _ret.v;
        }
        return result;
      },
      validatePanelCanShow: function validatePanelCanShow() {
        if (_GAME.friend.cacheFriend.length == _GAME.friend.listFrienlds.length) return false;
        if (_GAME.configs.maxCountCancelChallenge <= _GAME.uiChallenge.countCancelChallenge) return false;
        return true;
      }
    };
    exports.friend = friend;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  fx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36bc0/mVadDOI6v66E1+qun", "fx");
    "use strict";
    exports.__esModule = true;
    exports.fx = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var BlockAsset = require("blockAsset");
    var fx = {
      init: function init() {
        _GAME.fx.bubbleForever(cc.find("Canvas/layer_leaderboard/header/btn_brag"));
      },
      bubbleForever: function bubbleForever(node, timespan, delay, saleFactor1, scaleFactor2) {
        void 0 === timespan && (timespan = .5);
        void 0 === delay && (delay = 0);
        void 0 === saleFactor1 && (saleFactor1 = 1);
        void 0 === scaleFactor2 && (scaleFactor2 = 1.2);
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        node.stopAllActions();
        node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(delay), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1))));
      },
      bubbleForeverLabel: function bubbleForeverLabel(node, timespan, delay, saleFactor1, scaleFactor2) {
        void 0 === timespan && (timespan = .5);
        void 0 === delay && (delay = 0);
        void 0 === saleFactor1 && (saleFactor1 = 1);
        void 0 === scaleFactor2 && (scaleFactor2 = 1.1);
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        node.stopAllActions();
        node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(delay), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1))));
      },
      bubble: function bubble(node, callback, timespan, delay, saleFactor1, scaleFactor2) {
        void 0 === timespan && (timespan = .5);
        void 0 === delay && (delay = 0);
        void 0 === saleFactor1 && (saleFactor1 = 1);
        void 0 === scaleFactor2 && (scaleFactor2 = 1.2);
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        node.stopAllActions();
        node.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.callFunc(function() {
          callback && callback();
        })));
      },
      fxScoreNormal: function fxScoreNormal(keyCellNode, scoredCellArr, callback, fxTime) {
        void 0 === fxTime && (fxTime = .3);
        var globalPos = _GAME.utils.getGlobalPosition(keyCellNode);
        scoredCellArr.map(function(linkedCellNumber, index) {
          var orgCellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + linkedCellNumber);
          var fxContainer = cc.find("Canvas/play_area/fx_container");
          var cellNode = _GAME.utils.copyNodeTo(orgCellNode, fxContainer);
          var posDiff = _GAME.utils.global2LocalPosDiff(cellNode, globalPos.x, globalPos.y);
          cellNode.getChildByName("bg").active = false;
          cellNode.runAction(cc.sequence(cc.moveBy(fxTime, posDiff).easing(cc.easeIn(2)), cc.callFunc(function() {
            cellNode.removeFromParent(true);
            !index && callback && callback();
          })));
        });
      },
      fxScore7: function fxScore7(keyCellNode, orgScoredCellArr, callback, fxTime) {
        void 0 === fxTime && (fxTime = .3);
        _GAME.audio.playSound("catch_seven");
        var fxContainer = cc.find("Canvas/play_area/fx_container");
        var keyFxNode;
        var scoredCellNodeArr = orgScoredCellArr.map(function(sCellNum) {
          var orgCellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + sCellNum);
          var cellNode = _GAME.utils.copyNodeTo(orgCellNode, fxContainer);
          cellNode.getChildByName("bg").active = false;
          orgCellNode == keyCellNode && (keyFxNode = cellNode);
          return cellNode;
        });
        var fxForSingleCell = function fxForSingleCell(cellNode, index) {
          cellNode.runAction(cc.sequence(cc.scaleTo(fxTime, 1.2), cc.scaleTo(fxTime, 1)));
          cellNode.runAction(cc.sequence(cc.delayTime(fxTime), cc.fadeOut(fxTime), cc.callFunc(function() {
            cellNode.removeFromParent(true);
            !index && callback && callback();
          })));
          var blockNode = cellNode.getChildByName("sample_block");
          blockNode.getChildByName("Image_HexBlock").runAction(cc.tintTo(fxTime, 255, 255, 255));
          blockNode.getChildByName("label").runAction(cc.fadeOut(fxTime));
        };
        fxForSingleCell(keyFxNode, 1);
        _GAME.utils.setTimeout(function() {
          keyFxNode.stopAllActions();
          keyFxNode.getChildByName("sample_block").children.map(function(childNode) {
            return childNode.stopAllActions();
          });
          scoredCellNodeArr.map(function(cellNode, index) {
            return fxForSingleCell(cellNode, index);
          });
        }, parseInt(1e3 * fxTime / 2));
      },
      freeToolTipNodeArr: [],
      showScoreToolTip: function showScoreToolTip(text, targetNode, extraY, callback, rangeY, fxTime, fadeInTime, delayTime) {
        var _this = this;
        void 0 === extraY && (extraY = 60);
        void 0 === rangeY && (rangeY = 100);
        void 0 === fxTime && (fxTime = 1.6);
        void 0 === fadeInTime && (fadeInTime = .2);
        void 0 === delayTime && (delayTime = 0);
        var sampleNode = cc.find("Canvas/play_area/fx_container/sample_score_tool_tip");
        var labelNode = this.freeToolTipNodeArr.pop() || _GAME.utils.copyNodeTo(sampleNode, cc.find("Canvas/play_area/fx_container"));
        _GAME.utils.setLabelText(labelNode, text);
        _GAME.utils.setGlobalPositionToNode(labelNode, targetNode);
        labelNode.y += extraY;
        labelNode.active = true;
        labelNode.zIndex = 999;
        labelNode.opacity = 0;
        labelNode.runAction(cc.sequence(cc.fadeIn(fadeInTime), cc.delayTime(delayTime), cc.spawn(cc.moveBy(fxTime, cc.v2(0, rangeY)), cc.fadeOut(fxTime)), cc.callFunc(function() {
          labelNode.active = false;
          _this.freeToolTipNodeArr.push(labelNode);
          callback && callback();
        })));
      },
      freeFlyScoreNodeArr: [],
      singleScoreLabelFly: function singleScoreLabelFly(sourceNode, scoreText, fxTime) {
        var _this2 = this;
        void 0 === fxTime && (fxTime = .3);
        var sampleNode = cc.find("Canvas/play_area/fx_container/sample_label_fly_score");
        var labelNode = this.freeFlyScoreNodeArr.pop() || _GAME.utils.copyNodeTo(sampleNode, cc.find("Canvas/play_area/fx_container"));
        _GAME.utils.setLabelText(labelNode, scoreText);
        _GAME.utils.setGlobalPositionToNode(labelNode, sourceNode);
        var targetNode = cc.find("Canvas/play_area/labels/label_score");
        var targetGPos = _GAME.utils.getGlobalPosition(targetNode);
        labelNode.active = true;
        labelNode.zIndex = 999;
        var posDiff = _GAME.utils.global2LocalPosDiff(labelNode, targetGPos.x, targetGPos.y);
        labelNode.runAction(cc.sequence(cc.moveBy(fxTime, posDiff).easing(cc.easeIn(1.4)), cc.callFunc(function() {
          labelNode.active = false;
          _this2.freeFlyScoreNodeArr.push(labelNode);
        })));
      },
      multiScoreLabelFly7: function multiScoreLabelFly7(scoredCellArr, totalScore, callback) {
        var _this3 = this;
        var timeStep = .07;
        var scoreText = "+" + _GAME.utils.localizeNumber(parseInt(totalScore / scoredCellArr.length));
        scoredCellArr.map(function(sCellNum, index) {
          var cellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + sCellNum);
          _GAME.utils.setTimeout(function() {
            _this3.singleScoreLabelFly(cellNode, scoreText);
          }, 1e3 * timeStep * index);
        });
        _GAME.utils.setTimeout(function() {
          return callback && callback();
        }, timeStep * scoredCellArr.length * 1e3);
      },
      multiScoreLabelFlyNormal: function multiScoreLabelFlyNormal(keyCellNode, scoredCellArr, totalScore, callback) {
        var _this4 = this;
        var timeStep = .07;
        var scoreText = "+" + _GAME.utils.localizeNumber(parseInt(totalScore / scoredCellArr.length));
        scoredCellArr.map(function(sCellNum, index) {
          _GAME.utils.setTimeout(function() {
            _this4.singleScoreLabelFly(keyCellNode, scoreText);
          }, 1e3 * timeStep * index);
        });
        _GAME.utils.setTimeout(function() {
          return callback && callback();
        }, timeStep * scoredCellArr.length * 1e3);
      },
      shiningStar: function shiningStar() {
        var nodeStar = cc.find("Canvas/bg/Image_Background_Stars");
        nodeStar.stopAllActions();
        nodeStar.runAction(cc.sequence(cc.fadeTo(1.5, 63.5), cc.fadeTo(3, 255), cc.fadeTo(1.5, 127.5)).repeatForever());
      },
      showTextGreate: function showTextGreate(node) {
        if (node) {
          node.scale = 1;
          node.runAction(cc.scaleTo(.3, 1));
        }
      },
      animStar: function animStar(arrayNode) {
        if (arrayNode && 0 != arrayNode.length) {
          var timeDelay = 0;
          arrayNode.map(function(item) {
            item.lastScale = item.scale;
            item.scale = 0;
            item.runAction(cc.sequence(cc.delayTime(timeDelay), cc.spawn(cc.rotateTo(.5, -360), cc.scaleTo(.5, item.lastScale))));
            timeDelay += 1;
          });
        }
      },
      effectForInfo: function effectForInfo(target, posBonus) {
        target.opacity = 0;
        target.x += posBonus;
        var posMove = target.x - posBonus;
        cc.tween(target).delay(.5).parallel(cc.tween().to(1, {
          opacity: 255
        }), cc.tween().to(.5, {
          position: cc.v2(posMove, target.y)
        })).start();
      },
      effectForButton: function effectForButton(target, timeDelay) {
        target.active = false;
        cc.tween(target).delay(timeDelay).call(function(node) {
          node.active = true;
        }).to(.2, {
          scaleX: 1.3,
          scaleY: 1.3
        }, {
          easing: "backOut"
        }).to(.2, {
          scaleX: 1,
          scaleY: 1
        }).start();
      },
      effectBoom: function effectBoom(node, callback) {
        node && cc.tween(node).call(function() {
          var anim = node.getChildByName("sample_block").getChildByName("anim");
          if (anim) {
            false == anim.active && (anim.active = true);
            var component = anim.getComponent(cc.Animation);
            component.play(component._clips[0].name);
            component.on("lastframe", function() {});
            component.on("finished", function() {
              callback && callback();
            });
          }
        }).to(.2, {
          opacity: 0
        }).start();
      },
      effectTriple: function effectTriple(isActive, callback) {
        var lableTripple = cc.find("Canvas/play_area/triple");
        if (isActive) {
          false == lableTripple.active && (lableTripple.active = true);
          lableTripple.stopAllActions();
          _GAME.fx.bubbleForeverLabel(lableTripple);
          callback && callback();
          _GAME.fx.fxBtnTriple(isActive);
        } else {
          lableTripple.stopAllActions();
          true == lableTripple.active && (lableTripple.active = false);
          lableTripple.scale = 1;
          _GAME.fx.fxBtnTriple(isActive);
        }
      },
      fxBtnTriple: function fxBtnTriple(isActive) {
        var btnTriple = cc.find("Canvas/play_area/btn_triple");
        var color = isActive ? "#525252" : "#ffffff";
        if (btnTriple) {
          btnTriple.color = new cc.Color().fromHEX(color);
          var icon = btnTriple.getChildByName("icon");
          icon.color = new cc.Color().fromHEX(color);
          var label = btnTriple.getChildByName("bg_total_triple").getChildByName("total");
          label.color = new cc.Color().fromHEX(color);
          var iconVideo = btnTriple.getChildByName("bg_total_triple").getChildByName("video");
          iconVideo.color = new cc.Color().fromHEX(color);
          if (!_GAME.game.triplePoint) {
            if (_GAME.uiPowerItem.totalTriple <= 0) {
              label.active = false;
              iconVideo.active = true;
            } else {
              label.active = true;
              iconVideo.active = false;
            }
            btnTriple.getChildByName("bg_total_triple").active = true;
          }
        }
      },
      showAnimRelocated: function showAnimRelocated(arrayAnim, arrayMainNode, callback) {
        0 != arrayAnim.length && arrayAnim.map(function(node, index) {
          var mainBlockNumber = _GAME.utils.randomArrItem(_GAME.configs.blockNumber[1]);
          var mainNode = arrayMainNode[index];
          var sampleBlock = mainNode.getChildByName("sample_block");
          _GAME.mapVisual.decorBlock(sampleBlock, mainBlockNumber);
          _GAME.map.currentState[mainNode.cellNumber] = mainBlockNumber;
          var arrayNumber = [];
          for (var _index = 0; _index < 3; _index++) arrayNumber.push(_GAME.utils.randomArrItem(_GAME.configs.blockNumber[1]));
          arrayNumber.push(mainBlockNumber);
          var sample_block = node.getChildByName("sample_block");
          sample_block.children.map(function(child) {
            child.active = false;
          });
          var nodeMark = sample_block.getChildByName("anim_relocated");
          false == nodeMark.active && (nodeMark.active = true);
          var nodeImageAnim = sample_block.getChildByName("anim_relocated").getChildByName("Image_Anim");
          var nodeLabel = sample_block.getChildByName("anim_relocated").getChildByName("label");
          _GAME.fx.rollingItem(nodeLabel, nodeImageAnim, arrayNumber, function() {
            callback && callback();
          });
        });
      },
      rollingItem: function rollingItem(nodeLabel, nodeImageAnim, arrayNumber, callback) {
        var centerPoint = cc.v2(0, 2);
        var topPoint = cc.v2(0, 80);
        var botPoint = cc.v2(0, -80);
        nodeLabel.position = topPoint;
        nodeLabel.opacity = 0;
        var pointShow = arrayNumber.shift();
        cc.tween(nodeLabel).parallel(cc.tween(nodeLabel).call(function() {
          _GAME.utils.setLabelText(nodeLabel, pointShow);
        }).parallel(cc.tween(nodeLabel).to(.15, {
          position: centerPoint
        }).start(), cc.tween(nodeLabel).to(.15, {
          opacity: 255
        }).start()).start(), cc.tween(nodeImageAnim).call(function() {
          nodeImageAnim.getComponent(cc.Sprite).spriteFrame = nodeImageAnim.getComponent(BlockAsset).assetBlock[parseInt(pointShow) - 1];
        }).start()).delay(.15).call(function() {
          0 != arrayNumber.length ? cc.tween(nodeLabel).parallel(cc.tween(nodeLabel).to(.15, {
            position: botPoint
          }).start(), cc.tween(nodeLabel).to(.15, {
            opacity: 0
          }).start()).call(function() {
            _GAME.fx.rollingItem(nodeLabel, nodeImageAnim, arrayNumber, callback);
          }).start() : callback && callback();
        }).start();
      },
      nodeMoveAndHidden: function nodeMoveAndHidden(clone, callback) {
        clone && cc.tween(clone).parallel(cc.tween(clone).to(1, {
          position: cc.v2(0, 140)
        }), cc.tween(clone).to(1, {
          opacity: 200
        })).delay(.5).to(.2, {
          opacity: 0
        }).call(function() {
          callback && callback();
          clone.destroy();
        }).start();
      }
    };
    exports.fx = fx;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    blockAsset: "blockAsset"
  } ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0b66Dd52FGmq7/c088puFx", "game");
    "use strict";
    exports.__esModule = true;
    exports.game = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var game = {
      cellLinks: require("cell_links"),
      currentItemBiasType: null,
      currentItemNode: null,
      currentKeyBlockNumber: 0,
      currentMinorBlockNumber: 0,
      stepCount: 0,
      videoContinueLeft: 0,
      gameStartTime: 0,
      lastKeyCellNumber: 0,
      init: function init() {
        var _this = this;
        _GAME.login.addLoginDataField("isOldToMap3x3");
        _GAME.login.addLoginDataField("lastNewItem");
        _GAME.login.addLoginDataField("stepCount");
        _GAME.login.addLoginDataField("videoContinueLeft");
        _GAME.login.addLoginDataField("lastScore");
        _GAME.login.addLoginDataField("bestScore");
        _GAME.login.addLoginDataField("currentMapState");
        _GAME.login.addLoginDataField("isAskingVideoContinue");
        _GAME.login.addCallback(function(data) {
          _GAME.data.saveData({
            isOldToMap3x3: true
          });
          _GAME.user.score = data.lastScore || 0;
          _GAME.user.bestScore = data.bestScore || 0;
          _GAME.leaderboard.updateScoreLabel();
          _GAME.ui.updateScore(_GAME.user.score);
          _GAME.ui.updateHighScore();
          _this.stepCount = data.stepCount || 0;
          _this.videoContinueLeft = data.videoContinueLeft || _GAME.configs.videoContinueTime;
          if (data.isAskingVideoContinue) {
            _GAME.data.saveData({
              isAskingVideoContinue: false
            });
            _GAME.game.replay();
          } else {
            if (data.isTutDone) if (data.lastNewItem && data.isOldToMap3x3) {
              var _data$lastNewItem = data.lastNewItem, blockNumber = _data$lastNewItem.blockNumber, biasType = _data$lastNewItem.biasType, blockInfoArr = _data$lastNewItem.blockInfoArr;
              _this.newItem(blockNumber, biasType, blockInfoArr);
            } else _GAME.utils.waitToRun(function() {
              _this.genNewItem();
            }, "currentState", _GAME.map); else _this.newItem(1, "single_block", [ 1 ]);
            _GAME.map.currentState = data.isTutDone ? data.currentMapState || {} : _GAME.tut.tutMapState;
            for (var cellNum in _GAME.map.currentState) _GAME.map.cellLinkMap[cellNum] || (_GAME.map.currentState[cellNum] = null);
            _GAME.mapVisual.renderMap(_GAME.map.currentState);
            if (!data.isDoneTutBom) {
              var nodeMap = cc.find("Canvas/play_area/map");
              var count = 0;
              for (var key in _GAME.map.currentState) {
                var element = _GAME.map.currentState[key];
                element && count++;
              }
              count > Math.floor(nodeMap.children.length / 2) && data.TotalBom > 0 && _GAME.tutBom.startTut();
            }
            if (!data.isDoneTutRelocated) {
              var _nodeMap = cc.find("Canvas/play_area/map");
              var _count = 0;
              for (var _key in _GAME.map.currentState) {
                var _element = _GAME.map.currentState[_key];
                _element && _count++;
              }
              _count / _nodeMap.children.length * 100 > 70 && data.TotalRelocated > 0 && _GAME.tutRelocated.startTut();
            }
          }
          _GAME.data.countTurnAdsInter = 0;
          0 != _GAME.user.photo.length && cc.assetManager.loadRemote(_GAME.user.photo, function(err, texture) {
            err || (window.user_avata = new cc.SpriteFrame(texture));
          });
          _this.check2LogTimeToGameOver();
        });
        _GAME.game.triplePoint = false;
      },
      genNewItem: function genNewItem() {
        var blockNumberArr = _GAME.configs.stepCount2BlockNumerArr(this.stepCount + 1).slice(0);
        var biasTypeArrByStepCount = _GAME.configs.stepCount2BiasTypeArr(this.stepCount + 1);
        var _GAME$map$checkAvaila = _GAME.map.checkAvailableNewItemInfo(), blockCount = _GAME$map$checkAvaila.blockCount, biasTypeArr = _GAME$map$checkAvaila.biasTypeArr;
        biasTypeArr = biasTypeArr.filter(function(biasType) {
          return biasTypeArrByStepCount.includes(biasType);
        });
        var blockNumArr = [];
        blockNumArr.push(blockCount);
        biasTypeArrByStepCount.includes("single_block") && blockNumArr.push(1);
        var blockNumber = _GAME.utils.randomArrItem(blockNumArr);
        var biasType = _GAME.utils.randomArrItem(biasTypeArr);
        var blockInfoArr = [];
        for (var i = 0; i < blockNumber; i++) blockInfoArr.push(_GAME.utils.randomArrItem(blockNumberArr, true));
        this.newItem(blockNumber, biasType, blockInfoArr);
        this.isNewItemRotated = false;
        _GAME.data.saveData({
          lastNewItem: {
            blockNumber: blockNumber,
            biasType: biasType,
            blockInfoArr: blockInfoArr
          }
        });
      },
      genItemBlock7: function genItemBlock7() {
        this.newItem(1, "single_block", [ 7 ]);
        this.isNewItemRotated = false;
        _GAME.data.saveData({
          lastNewItem: {
            blockNumber: 1,
            biasType: "single_block",
            blockInfoArr: [ 7 ]
          }
        });
      },
      newItem: function newItem(blockNumber, biasType, blockInfoArr) {
        void 0 === blockNumber && (blockNumber = 1);
        void 0 === biasType && (biasType = "horizontal");
        var itemTypeName = 1 == blockNumber ? "single_block" : biasType;
        var itemTypeContainer = cc.find("Canvas/play_area/new_item_container/new_item/item_types");
        var arrows = _GAME.control.setArrowsActive(blockNumber > 1);
        arrows.opacity = arrows.active ? 255 : 0;
        arrows.angle = {
          horizontal: 5,
          left_bias: -65,
          right_bias: 65
        }[biasType];
        arrows.stopAllActions();
        arrows.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.2, -25), cc.rotateBy(.2, 25), cc.delayTime(.5))));
        "single_block" != itemTypeName && (_GAME.tutRolated.checkDoneTutRolated() || _GAME.tutRolated.startTut());
        var itemTypeNode = itemTypeContainer.getChildByName(itemTypeName);
        itemTypeContainer.children.map(function(child) {
          return child.active = false;
        });
        itemTypeNode.active = true;
        _GAME.control.newItemNode.active = true;
        this.currentItemNode = itemTypeNode;
        var keyBlockContainer = itemTypeNode.getChildByName("key_block");
        _GAME.mapVisual.decorBlock(keyBlockContainer.getChildByName("sample_block"), blockInfoArr[0]);
        keyBlockContainer.getChildByName("Image_HighlightStroke").active = blockInfoArr[0] == blockInfoArr[1];
        this.currentKeyBlockNumber = blockInfoArr[0];
        this.currentMinorBlockNumber = 0;
        var minorBlockContainer;
        if (blockNumber > 1) {
          minorBlockContainer = itemTypeNode.getChildByName("minor_block");
          _GAME.mapVisual.decorBlock(minorBlockContainer.getChildByName("sample_block"), blockInfoArr[1]);
          this.currentMinorBlockNumber = blockInfoArr[1];
        }
        biasType = blockNumber > 1 ? biasType : "single_block";
        if ("single_block" != biasType) {
          var keyBlockPos = this.getBiasTypeKeyBlockPos(biasType);
          keyBlockPos || _log("keyBlockPos=" + keyBlockPos + " // biasType=" + biasType);
          keyBlockContainer.position = keyBlockPos;
          minorBlockContainer && (minorBlockContainer.position = keyBlockPos.mul(-1));
        }
        _GAME.utils.setTimeout(function() {
          return _GAME.control.setKeyBlock(keyBlockContainer);
        }, 100);
        _GAME.control.setControlTouchArea(itemTypeName);
        this.currentItemBiasType = biasType + (blockNumber > 1 && keyBlockContainer.x > minorBlockContainer.x ? "_dominated" : "");
      },
      swapNewItemBlocks: function swapNewItemBlocks() {
        var _this2 = this;
        _GAME.utilsFB.log("ev_click_swap_blocks");
        _GAME.control.setArrowsActive(false);
        _GAME.ui.showNagScreen();
        this.currentItemBiasType = this.getNextSwapBiasType(this.currentItemBiasType);
        var nextKeyBlockPos = this.getBiasTypeKeyBlockPos(this.currentItemBiasType);
        var moveTime = .045;
        this.currentItemNode.runAction(cc.rotateBy(moveTime, -60));
        var blockArr = this.currentItemNode.children;
        blockArr[0].runAction(cc.rotateBy(moveTime, -60));
        blockArr[1].runAction(cc.rotateBy(moveTime, -60));
        _GAME.utils.setTimeout(function() {
          _this2.currentItemNode.angle = 0;
          blockArr[0].angle = 0;
          blockArr[1].angle = 0;
          blockArr[0].position = nextKeyBlockPos;
          blockArr[1].position = nextKeyBlockPos.mul(-1);
          _GAME.control.setKeyBlock(_this2.currentItemNode.getChildByName("key_block"));
          _GAME.ui.hideNagScreen();
        }, 1e3 * moveTime + 10);
        this.isNewItemRotated = true;
      },
      getBiasTypeKeyBlockPos: function getBiasTypeKeyBlockPos(biasType) {
        var baseSize = 45;
        var x1 = baseSize * Math.cos(Math.PI / 180 * 60);
        var y1 = baseSize * Math.sin(Math.PI / 180 * 60);
        var biasTypeBlockPositions = {
          left_bias: cc.v2(-x1, y1),
          right_bias_dominated: cc.v2(x1, y1),
          horizontal_dominated: cc.v2(baseSize, 0),
          left_bias_dominated: cc.v2(x1, -y1),
          right_bias: cc.v2(-x1, -y1),
          horizontal: cc.v2(-baseSize, 0)
        };
        return biasTypeBlockPositions[biasType];
      },
      getNextSwapBiasType: function getNextSwapBiasType(currentBiasType) {
        return {
          horizontal: "left_bias",
          left_bias: "right_bias_dominated",
          right_bias_dominated: "horizontal_dominated",
          horizontal_dominated: "left_bias_dominated",
          left_bias_dominated: "right_bias",
          right_bias: "horizontal"
        }[currentBiasType];
      },
      dropNewItemAtCell: function dropNewItemAtCell(keyCellNumber, minorCellNumber, callback) {
        var _this3 = this;
        if (_GAME.tutRolated.showing) return;
        _GAME.control.setArrowsActive(false);
        _GAME.tut.checkDoneTut();
        _GAME.game.currentItemNode.active = false;
        _GAME.map.dropNewItemAtCell(keyCellNumber, minorCellNumber);
        this.stepCount++;
        _GAME.data.saveData({
          stepCount: this.stepCount
        });
        var scoringThreadRemaining = 1;
        var scoringCallback = function scoringCallback(complimentCode) {
          void 0 === complimentCode && (complimentCode = 0);
          scoringThreadRemaining--;
          if (0 != scoringThreadRemaining) return;
          _GAME.ui.hideNagScreen();
          _GAME.data.saveData({
            currentMapState: _GAME.map.currentState
          });
          7 == complimentCode ? _GAME.ui.showCompliment("PERFECT") : 2 == complimentCode ? _GAME.ui.showCompliment("GREAT") : complimentCode > 2 && complimentCode < 7 ? _GAME.ui.showCompliment("SWEET") : complimentCode > 10 && _GAME.ui.showCompliment("NICE");
          if (_GAME.map.isFulled()) {
            _this3.lastKeyCellNumber = keyCellNumber;
            _this3.handleGameOver();
          } else _this3.genNewItem();
        };
        _GAME.ui.showNagScreen();
        if (minorCellNumber && _GAME.map.currentState[keyCellNumber] != _GAME.map.currentState[minorCellNumber]) {
          scoringThreadRemaining = 2;
          this.handleBlockScoring(minorCellNumber, scoringCallback, null, null, callback);
        }
        this.handleBlockScoring(keyCellNumber, scoringCallback, null, null, callback);
        if (!_GAME.tutBom.isDoneTutBom) {
          var nodeMap = cc.find("Canvas/play_area/map");
          var count = 0;
          for (var key in _GAME.map.currentState) {
            var element = _GAME.map.currentState[key];
            element && count++;
          }
          count > Math.floor(nodeMap.children.length / 2) && _GAME.uiPowerItem.totalBom > 0 && _GAME.tutBom.startTut();
        }
        if (!_GAME.tutRelocated.isDoneTutRelocated) {
          var _nodeMap2 = cc.find("Canvas/play_area/map");
          var _count2 = 0;
          for (var _key2 in _GAME.map.currentState) {
            var _element2 = _GAME.map.currentState[_key2];
            _element2 && _count2++;
          }
          _count2 / _nodeMap2.children.length * 100 > 70 && _GAME.uiPowerItem.totalRelocated > 0 && _GAME.tutRelocated.startTut();
        }
      },
      handleGameOver: function handleGameOver() {
        if (!_GAME.video.isAvailable) return this.realGameOver();
        if (_GAME.game.videoContinueLeft <= 0) return this.realGameOver();
        _GAME.ui.showLayer("layer_video_continue");
        _GAME.data.saveData({
          isAskingVideoContinue: true
        });
        _GAME.utils.setLabelText(cc.find("Canvas/layer_video_continue/btn_save_me/label_time_left"), "" + _GAME.game.videoContinueLeft);
      },
      onVideoContinueSuccess: function onVideoContinueSuccess() {
        _GAME.game.removeLastKeyBlockGroup();
        _GAME.data.saveData({
          currentMapState: _GAME.map.currentState
        });
        _GAME.data.saveData({
          isAskingVideoContinue: false
        });
      },
      removeLastKeyBlockGroup: function removeLastKeyBlockGroup() {
        var cellNumberArr = [ _GAME.game.lastKeyCellNumber ].concat(Object.keys(_GAME.map.cellLinkMap[_GAME.game.lastKeyCellNumber]));
        _log(" gameover >> video continue >> removeLastKeyBlockGroup = " + cellNumberArr);
        _GAME.map.clearCellGroup(cellNumberArr);
        _GAME.game.genNewItem();
        _GAME.game.videoContinueLeft--;
        _GAME.data.saveData({
          videoContinueLeft: _GAME.game.videoContinueLeft
        });
      },
      onVideoContinueFail: function onVideoContinueFail(err) {
        _GAME.game.realGameOver(true);
        _log(" onVideoContinueFail >> err = ", err);
        _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
          _GAME.game.visualGameOver();
        });
        _GAME.data.saveData({
          isAskingVideoContinue: false
        });
      },
      realGameOver: function realGameOver(isNoVisual) {
        void 0 === isNoVisual && (isNoVisual = false);
        _GAME.control.newItemNode.active = false;
        if (_GAME.user.bestScore < _GAME.user.score) {
          _GAME.user.bestScore = _GAME.user.score;
          _GAME.data.saveData({
            bestScore: _GAME.user.bestScore
          });
        }
        _GAME.data.saveData({
          currentMapState: {},
          stepCount: 0,
          lastScore: 0,
          videoContinueLeft: _GAME.configs.videoContinueTime
        });
        this.check2LogTimeToGameOver();
        _GAME.utils.setTimeout(function() {
          _GAME.social.askShortcut(function() {
            return _GAME.social.postSessionScore();
          });
        }, 500);
        _GAME.social.playerIdSendMessage && _GAME.social.sendMessageAfterQuit();
        isNoVisual || this.visualGameOver();
        _log("game over !");
      },
      visualGameOver: function visualGameOver() {
        _GAME.leaderboard.updateScoreLabel();
        _GAME.game.triplePoint = false;
        _GAME.fx.effectTriple(false);
        if (_GAME.friend.validatePanelCanShow()) {
          _GAME.uiChallenge.setDataChallenge(function() {});
          _GAME.ui.showLayer("layer_challenge");
          _GAME.uiChallenge.runActionShowItem();
        } else _GAME.ui.showLayer("layer_result");
        _GAME.audio.playSound("game_over");
      },
      handleBlockScoring: function handleBlockScoring(cellNumber, callback, callTimeCount, lastBlockCount, callbackLoopSearch) {
        var _this4 = this;
        callTimeCount || (callTimeCount = 0);
        callTimeCount++;
        var orgBlockNumber = parseInt(_GAME.map.currentState[cellNumber]);
        var scoredCellArr = _GAME.map.checkBlockScore(cellNumber);
        var callbackFunc = function callbackFunc(complimentCode) {
          var code = complimentCode || callTimeCount - 1;
          1 == code && (code = lastBlockCount > 3 ? 10 * lastBlockCount : 0);
          _GAME.utils.setTimeout(function() {
            0 == code;
            callbackLoopSearch && callbackLoopSearch();
            callback && callback(code);
          }, 10);
        };
        if (!scoredCellArr) return callbackFunc();
        var keyCellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + cellNumber);
        var totalScore = _GAME.configs.calculateScore(orgBlockNumber, scoredCellArr.length);
        if (orgBlockNumber < 7) {
          var scoringCallback = function scoringCallback() {
            _GAME.fx.showScoreToolTip("+" + totalScore, keyCellNode);
            _GAME.map.setSingleCell(cellNumber, orgBlockNumber + 1);
            keyCellNode.runAction(cc.sequence(cc.scaleTo(.15, 1.24), cc.scaleTo(.15, 1), cc.callFunc(function() {
              return _this4.handleBlockScoring(cellNumber, callback, callTimeCount, scoredCellArr.length, callbackLoopSearch);
            })));
          };
          _GAME.fx.fxScoreNormal(keyCellNode, scoredCellArr, scoringCallback);
          _GAME.utils.setTimeout(function() {
            _GAME.fx.multiScoreLabelFlyNormal(keyCellNode, scoredCellArr, totalScore);
          }, 600);
          _GAME.utils.setTimeout(function() {
            return _this4.score(totalScore);
          }, 1e3);
        } else {
          _GAME.fx.multiScoreLabelFly7(scoredCellArr, totalScore);
          _GAME.fx.fxScore7(keyCellNode, scoredCellArr, function() {
            return callbackFunc(7);
          });
          _GAME.utils.setTimeout(function() {
            return _this4.score(totalScore);
          }, 350);
        }
        _GAME.map.clearCellGroup(scoredCellArr);
      },
      score: function score(scoreNumber) {
        _GAME.user.score += _GAME.game.triplePoint ? 3 * scoreNumber : scoreNumber;
        if (_GAME.user.bestScore < _GAME.user.score) {
          _GAME.user.bestScore = _GAME.user.score;
          _GAME.data.saveData({
            bestScore: _GAME.user.bestScore
          });
          _GAME.ui.updateHighScore();
        }
        _GAME.data.saveData({
          lastScore: _GAME.user.score
        });
        _GAME.ui.updateScore(_GAME.user.score);
        _GAME.tutTriple.checkDoneTutTriple() || _GAME.user.score >= _GAME.tutTriple.pointToShowTut && _GAME.uiPowerItem.totalTriple > 0 && (_GAME.game.triplePoint || _GAME.tutTriple.startTut());
      },
      replay: function replay(callback) {
        this.stepCount = 0;
        _GAME.map.resetMap();
        _GAME.user.score = 0;
        _GAME.ui.updateScore(0);
        _GAME.game.videoContinueLeft = _GAME.configs.videoContinueTime;
        _GAME.data.saveData({
          currentMapState: {},
          stepCount: 0,
          lastScore: 0
        });
        _GAME.game.genNewItem();
        callback && callback();
      },
      check2LogTimeToGameOver: function check2LogTimeToGameOver() {
        if (!this.gameStartTime) return this.gameStartTime = _time();
        var timeRange = _time() - this.gameStartTime;
        _log(" timeRange gameover = " + timeRange + " ");
        _GAME.utilsFB.log("ev_game_over_time", parseInt(timeRange / 1e3));
        this.gameStartTime = _time();
      },
      actionPowerItemBom: function actionPowerItemBom(callback) {
        if (_GAME.map.currentState) {
          var object = _GAME.map.currentState;
          var nodeMap = cc.find("Canvas/play_area/map");
          var nodeAnimMap = cc.find("Canvas/layer_anim/content/anim_boom/map");
          var size = 0;
          var arrayAnim = [];
          var _loop = function _loop(key) {
            var element = object[key];
            if (element && 0 != element) {
              var nodeToCloneAnim = nodeMap.children.find(function(item) {
                return item.name == "Image_HexBlock_" + key;
              });
              var cloneOb = cc.instantiate(nodeToCloneAnim);
              cloneOb.position = nodeToCloneAnim.position;
              nodeAnimMap.addChild(cloneOb);
              arrayAnim.push(cloneOb);
              size++;
            }
          };
          for (var key in object) _loop(key);
          if (0 == size) {
            _GAME.ui.hideLayer("layer_anim");
            return;
          }
          _GAME.utils.setTimeout(function() {
            _GAME.game.showAnim(arrayAnim, callback);
            _GAME.map.resetMap();
            callback && callback();
            _GAME.data.saveData({
              currentMapState: {},
              stepCount: 0,
              lastScore: 0
            });
            "minus";
          }, 200);
        }
      },
      showAnim: function showAnim(arrayAnim, callback) {
        var time = 1;
        var stepTime = 20;
        var callBack = function callBack() {
          var nodeAnimMap = cc.find("Canvas/layer_anim/content/anim_boom/map");
          nodeAnimMap.removeAllChildren();
          _GAME.ui.hideLayer("layer_anim");
          _GAME.uiPowerItem.validateBoomSuccess();
        };
        var _loop2 = function _loop2(index) {
          var itemShow = arrayAnim[index];
          time += index * stepTime;
          index == arrayAnim.length - 1 ? _GAME.utils.setTimeout(function() {
            _GAME.fx.effectBoom(itemShow, function() {
              _GAME.tutBom.checkDoneTutBom() || _GAME.tutBom.endTut();
              callBack();
            });
          }, time) : _GAME.utils.setTimeout(function() {
            _GAME.fx.effectBoom(itemShow);
          }, time);
        };
        for (var index = 0; index < arrayAnim.length; index++) _loop2(index);
      },
      actionPowerItemTriple: function actionPowerItemTriple() {
        _GAME.game.triplePoint = true;
        !_GAME.tutTriple.checkDoneTutTriple() && _GAME.tutTriple.showing && _GAME.tutTriple.endTut();
        _GAME.ui.hideLayer("layer_anim");
        _GAME.fx.effectTriple(true, function() {
          _GAME.uiPowerItem.validateTripleSuccess();
        });
      },
      actionPowerItemRelocated: function actionPowerItemRelocated(callback) {
        if (_GAME.map.currentState) {
          var object = _GAME.map.currentState;
          var nodeMap = cc.find("Canvas/play_area/map");
          var nodeAnimMap = cc.find("Canvas/layer_anim/content/anim_relocated/map");
          var size = 0;
          var arrayAnim = [];
          var arrayMainNode = [];
          var _loop3 = function _loop3(key) {
            var element = object[key];
            if (element && 0 != element) {
              var nodeToCloneAnim = nodeMap.children.find(function(item) {
                return item.name == "Image_HexBlock_" + key;
              });
              var cloneOb = cc.instantiate(nodeToCloneAnim);
              cloneOb.position = nodeToCloneAnim.position;
              nodeAnimMap.addChild(cloneOb);
              arrayAnim.push(cloneOb);
              arrayMainNode.push(nodeToCloneAnim);
              size++;
            }
          };
          for (var key in object) _loop3(key);
          if (0 == size) {
            _GAME.ui.hideLayer("layer_anim");
            return;
          }
          var count = 0;
          _GAME.map.resetMap();
          callback && callback();
          _GAME.fx.showAnimRelocated(arrayAnim, arrayMainNode, function() {
            count++;
            if (count == size) {
              _GAME.tutRelocated.checkDoneTutRelocated() || _GAME.tutRelocated.endTut();
              _GAME.utils.setTimeout(function() {
                var nodeMap = cc.find("Canvas/layer_anim/content/anim_relocated/map");
                nodeMap.removeAllChildren();
                _GAME.ui.hideLayer("layer_anim");
                _GAME.uiPowerItem.validateRelocatedSuccess();
                _GAME.data.saveData({
                  currentMapState: _GAME.map.currentState
                });
                _GAME.game.searchMapItem();
              }, 500);
            }
          });
        }
      },
      searchMapItem: function searchMapItem() {
        if (_GAME.map.currentState) {
          var obCheck = {};
          var object = _GAME.map.currentState;
          for (var key in object) {
            var element = object[key];
            if (element) if (obCheck[element]) obCheck[element].push(key); else {
              obCheck[element] = [];
              obCheck[element].push(key);
            }
          }
          _GAME.game.seachToAutoMerge(obCheck);
        }
      },
      seachToAutoMerge: function seachToAutoMerge(obCheck) {
        var resultCount = [];
        var totalArray = [];
        for (var key in obCheck) {
          var element = obCheck[key];
          if (element.length >= 3) {
            for (var index = 0; index < element.length; index++) {
              var id = element[index];
              var arr = _GAME.game.loopSearch(id, element);
              arr.sort(function(a, b) {
                if (a < b) return -1;
                return 1;
              });
              arr.length >= 3 && resultCount.push(arr);
            }
            if (0 != resultCount.length) {
              var arrResult = _GAME.game.compareArr(key, resultCount);
              arrResult.length >= 3 && totalArray.push(arrResult);
            }
          }
        }
        if (0 != totalArray.length) {
          var arrayShowAnim = _GAME.utils.randomArrItem(totalArray);
          _GAME.game.loopAnim(arrayShowAnim);
        }
      },
      loopAnim: function loopAnim(arrResult) {
        var arrFirst = arrResult;
        var keyCellNumber = _GAME.utils.randomArrItem(arrFirst);
        _GAME.utils.setTimeout(function() {
          _GAME.game.handleBlockScoring(keyCellNumber, null, null, null, function() {
            _GAME.data.saveData({
              currentMapState: _GAME.map.currentState
            });
            _GAME.game.searchMapItem();
          });
        }, 500);
      },
      loopSearch: function loopSearch(item, array) {
        var arr = [];
        arr.push(item);
        if (this.cellLinks) for (var key in this.cellLinks) if (-1 != key.indexOf(item)) {
          var nextPost = null;
          -1 != key.indexOf("_" + item) ? nextPost = key.replace("_" + item, "") : -1 != key.indexOf(item + "_") && (nextPost = key.replace(item + "_", ""));
          -1 != array.indexOf(nextPost) && arr.push(nextPost);
        }
        return arr;
      },
      compareArr: function compareArr(key, resultCount) {
        if (0 == resultCount.length) return null;
        var result = null;
        resultCount.map(function(array) {
          result ? array.map(function(id) {
            if (-1 == result.indexOf(id)) {
              var value = _GAME.map.currentState[id];
              value && 0 != value && value == key && result.push(id);
            }
          }) : result = array;
        });
        return result;
      }
    };
    exports.game = game;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    cell_links: "cell_links"
  } ],
  inter_ad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d257eZM4gNA14exikMiBIjn", "inter_ad");
    "use strict";
    exports.__esModule = true;
    exports.interAd = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var interAd = {
      init: function init() {
        this.preloadInterAds();
      },
      interAdObj: null,
      preloadInterAds: function preloadInterAds() {
        var _this = this;
        if (!_GAME.configs.canShowAndLoadInter) return;
        s;
        if (!window.FBInstant) return;
        _log(" preloadInterAds 1111 ");
        if (this.isLoading) return;
        this.interAdObj = null;
        this.isLoading = true;
        FBInstant.getInterstitialAdAsync(_GAME.configs.interAdId).then(function(interAdObj) {
          interAdObj.loadAsync().then(function() {
            _this.interAdObj = interAdObj;
            _this.isLoading = false;
          })["catch"](function(e) {
            console.warn(e);
            _this.isLoading = false;
          });
        })["catch"](function(e) {
          console.warn(e);
          _this.isLoading = false;
        });
      },
      showInterAds: function showInterAds(adPosition, callBack) {
        var _this2 = this;
        if (!_GAME.configs.canShowAndLoadInter) return;
        s;
        console.log(" showInterAds 1111 ");
        if (!_GAME.configs.openInterAds) {
          callBack && callBack();
          return;
        }
        if (!window.FBInstant || !this.interAdObj) return callBack && callBack();
        this.interAdObj.showAsync().then(function() {
          _GAME.interAd.log(adPosition, 1);
          callBack && callBack();
          _this2.preloadInterAds();
        })["catch"](function(e) {
          console.warn(e);
          _GAME.interAd.log(adPosition, 0, e.code);
          callBack && callBack();
          "RATE_LIMITED" != e.code && _this2.preloadInterAds();
        });
      },
      log: function log(adPosition, result, err_code) {
        void 0 === err_code && (err_code = "");
        _GAME.utilsFB.log("ev_inter_ad", 1, {
          position: adPosition,
          watched_success: result,
          err_code: err_code
        });
        if (result) {
          _GAME.utilsFB.log("Ads-Total-Inter");
          _GAME.utilsFB.log("Ads-Total");
        }
      },
      replayCount2ShowAd: 0,
      checkToShowReplayAd: function checkToShowReplayAd() {
        this.replayCount2ShowAd++;
        this.replayCount2ShowAd % _GAME.configs.showInterAdAfterEveryReplayTime == 1 && this.showInterAds("gameOverReplay");
      }
    };
    exports.interAd = interAd;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  label_listener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "057d5If8wVJGqRBl8O7ssAu", "label_listener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  leaderboard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17316g2GD9BH45Ccp8C0UsU", "leaderboard");
    "use strict";
    exports.__esModule = true;
    exports.leaderboard = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var leaderboard = {
      leaderboard: null,
      globalPlayerArr: [],
      isEntriesLoadedGlobal: false,
      friendsPlayerArr: [],
      isEntriesLoadedFriends: false,
      init: function init() {
        var self = this;
        if (window.FBInstant) FBInstant.getLeaderboardAsync(_GAME.configs.leaderboardName).then(function(leaderboard) {
          self.leaderboard = leaderboard;
          self.leaderboard.getPlayerEntryAsync().then(function(entry) {
            entry ? self.getEntries() : self.leaderboard.setScoreAsync(_GAME.user.exp, "").then(function() {
              return self.getEntries();
            });
          });
        })["catch"](function(err) {
          return _log(" error getting leaderboard ", err);
        }); else {
          self.globalPlayerArr = [ {
            id: "xxxxaa111x",
            name: "Global 123",
            score: 222
          }, {
            id: "xxxxaa111x",
            name: "Global 456",
            score: 676
          }, {
            id: "xxxxaa111",
            name: "Global",
            score: 1235
          }, {
            id: "xxxxaa111x",
            name: "Global 789",
            score: 4354
          }, {
            id: "xxxxaa111x",
            name: "Global 100",
            score: 3455
          }, {
            id: "xxxxaa111x",
            name: "Global 456",
            score: 676
          }, {
            id: "xxxxaa111",
            name: "Global",
            score: 1235
          }, {
            id: "xxxxaa111x",
            name: "Global 789",
            score: 4354
          }, {
            id: "xxxxaa111x",
            name: "Global 100",
            score: 3455
          }, {
            id: "xxxxaa111x",
            name: "Global 456",
            score: 676
          }, {
            id: "xxxxaa111",
            name: "Global",
            score: 1235
          }, {
            id: "xxxxaa111x",
            name: "Global 789",
            score: 4354
          }, {
            id: "xxxxaa111x",
            name: "Global 100",
            score: 3455
          } ];
          _GAME.leaderboard.isEntriesLoadedGlobal = true;
          self.friendsPlayerArr = [ {
            id: "xxxxaa111x",
            name: "Friend 123",
            score: 222
          }, {
            id: "xxxxaa111x",
            name: "Friend 456",
            score: 676
          }, {
            id: "xxxxaa111",
            name: "Friend",
            score: 1235
          }, {
            id: "xxxxaa111x",
            name: "Friend 789",
            score: 4354
          }, {
            id: "xxxxaa111x",
            name: "Friend 100",
            score: 3455
          }, {
            id: "xxxxaa111x",
            name: "Friend 456",
            score: 676
          }, {
            id: "xxxxaa111",
            name: "Friend",
            score: 1235
          }, {
            id: "xxxxaa111x",
            name: "Friend 789",
            score: 4354
          }, {
            id: "xxxxaa111x",
            name: "Friend 100",
            score: 3455
          }, {
            id: "xxxxaa111x",
            name: "Friend 456",
            score: 676
          }, {
            id: "xxxxaa111",
            name: "Friend",
            score: 1235
          }, {
            id: "xxxxaa111x",
            name: "Friend 789",
            score: 4354
          }, {
            id: "xxxxaa111x",
            name: "Friend 100",
            score: 3455
          } ];
          _GAME.leaderboard.isEntriesLoadedFriends = true;
        }
        _GAME.utils.waitToRun(function() {
          return self.render("friends");
        }, "isEntriesLoadedFriends", _GAME.leaderboard);
        _GAME.utils.waitToRun(function() {
          return self.render("global");
        }, "isEntriesLoadedGlobal", _GAME.leaderboard);
      },
      getEntries: function getEntries() {
        var _this = this;
        this.leaderboard.getEntriesAsync(_GAME.configs.leaderboardPlayerCount, 0).then(function(entries) {
          _this.globalPlayerArr = _this.entriesToArr(entries);
          _GAME.leaderboard.isEntriesLoadedGlobal = true;
        })["catch"](function(err) {
          return _log("Error getting leaderboard global entries ", err);
        });
        this.leaderboard.getConnectedPlayerEntriesAsync(_GAME.configs.leaderboardPlayerCount, 0).then(function(entries) {
          _this.friendsPlayerArr = _this.entriesToArr(entries);
          _GAME.leaderboard.isEntriesLoadedFriends = true;
        })["catch"](function(err) {
          return _log("Error getting leaderboard global entries ", err);
        });
      },
      entriesToArr: function entriesToArr(entries) {
        var playerArr = [];
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          playerArr.push({
            id: entry.getPlayer().getID(),
            photo: entry.getPlayer().getPhoto(),
            name: entry.getPlayer().getName(),
            score: entry.getScore(),
            rank: entry.getRank()
          });
        }
        return playerArr;
      },
      saveScore: function saveScore() {
        _GAME.ui.showNagScreen();
        this.leaderboard.setScoreAsync(_GAME.user.score, "").then(function() {
          _log("saveScore :: >>> saved score to leaderboard-- - _GAME.user.exp = " + _GAME.user.score + " ");
          if (_GAME.user.bestScore <= _GAME.user.score) {
            _log("_GAME.user.bestScore < _GAME.user.scoree     ");
            _GAME.leaderboard.isEntriesLoadedFriends = false;
            _GAME.leaderboard.isEntriesLoadedGlobal = false;
            _GAME.leaderboard.init();
          }
          _GAME.social.playerIdSendMessage && _GAME.social.sendMessageAfterQuit();
          _GAME.promo.renderButtonByIcon();
          _GAME.ui.hideNagScreen();
        })["catch"](function(err) {
          return _log("saveScore err ", err);
        });
      },
      render: function render(leaderboardName) {
        void 0 === leaderboardName && (leaderboardName = "friends");
        var playerArr = _GAME.leaderboard[leaderboardName + "PlayerArr"];
        var sampleRow = cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/leaderboard_content/sample_row");
        var container = cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/leaderboard_content/scrollview_" + leaderboardName + "/view/content");
        container.removeAllChildren();
        playerArr.map(function(player, index) {
          var newRow = _GAME.utils.copyNodeTo(sampleRow, container);
          newRow.active = true;
          newRow.getChildByName("bg2").active = index % 2;
          player.photo && cc.loader.load(player.photo, function(err, texture) {
            if (err) return _log(err);
            var avarNode = _GAME.utils.getChildByPath(newRow, "avatar/real_avatar");
            var avarNodeOrgSize = {
              width: avarNode.width,
              height: avarNode.height
            };
            avarNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            avarNode.setSizeFunc = function() {
              avarNode.width = avarNodeOrgSize.width;
              avarNode.height = avarNodeOrgSize.height;
            };
            setTimeout(avarNode.setSizeFunc, 100);
          });
          _GAME.utils.setLabelText(newRow.getChildByName("label_rank"), index + 1 + ".");
          _GAME.utils.setLabelText(newRow.getChildByName("label_user_name"), player.name);
          _GAME.utils.setLabelText(newRow.getChildByName("label_score"), _GAME.utils.localizeNumber(player.score));
          newRow.getChildByName("btn_brag").active = player.id == _GAME.user.id;
          newRow.getChildByName("btn_play").active = "friends" == leaderboardName;
          _GAME.utils.addButtonComp(newRow.getChildByName("btn_brag"), function() {
            _GAME.utilsFB.log("ev_click_button_share_in_leader_board", 1, {
              Position: index
            });
            _GAME.social.share(player.score);
          });
          _GAME.utils.addButtonComp(newRow.getChildByName("btn_play"), function() {
            _GAME.utilsFB.log("ev_click_button_play_in_leader_board", 1, {
              Position: index
            });
            _GAME.social.createContext(player.id, function() {
              _GAME.social.playerIdSendMessage = player.id;
              _log("Successs    ");
              _GAME.ui.hideLayer("layer_leaderboard");
              _GAME.game.replay(function() {
                return _GAME.interAd.checkRequireMentShowAdd(function() {
                  return _GAME.interAd.show("gameOverReplay");
                });
              });
            }, function() {
              _log("fail  ");
            });
          });
        });
      },
      btnBragClick: function btnBragClick() {},
      currentTabName: "friends",
      onClickTab: function onClickTab(tabName) {
        if (tabName == this.currentTabName) return;
        this.currentTabName = tabName;
        var setTabActive = function setTabActive(myTabName, isActive) {
          cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/tabs/" + myTabName + "/active").active = isActive;
          cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/leaderboard_content/scrollview_" + myTabName).active = isActive;
        };
        [ "global", "friends" ].map(function(name) {
          return setTabActive(name, name == tabName);
        });
        cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/leaderboard_content/scrollview_" + tabName + "/view/content").children.map(function(row) {
          var setSizeFunc = _GAME.utils.getChildByPath(row, "avatar/real_avatar").setSizeFunc;
          setSizeFunc && setSizeFunc();
        });
      },
      updateScoreLabel: function updateScoreLabel() {
        _GAME.utils.setLabelText(cc.find("Canvas/layer_leaderboard/header/label_score"), _GAME.utils.localizeNumber(_GAME.user.score));
      }
    };
    exports.leaderboard = leaderboard;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  load_optimize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24941TRvpBAF6g432rW623D", "load_optimize");
    "use strict";
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var bg_real = cc.find("Canvas/bg");
        _GAME.utils.setTimeout(function() {
          bg_real.active = true;
          var nodeBgLoad2 = cc.find("Canvas/bg_load2");
          nodeBgLoad2.active = true;
          console.log("load bg2");
          _GAME.utils.setTimeout(function() {
            nodeBgLoad2.active = false;
          }, 5e3);
        }, 1e3);
        _GAME.utils.setTimeout(function() {
          var nodeLoad2 = cc.find("Canvas/load2");
          var nodeShare = cc.find("Canvas/shares");
          var nodeMessage = cc.find("Canvas/messages");
          nodeLoad2.active = true;
          nodeShare.active = true;
          nodeMessage.active = true;
          _GAME.utils.setTimeout(function() {
            nodeLoad2.active = false;
            nodeShare.active = false;
            nodeMessage.active = false;
          }, 2e3);
        }, 5e3);
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  localize_auto_tranform: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a25e5iUV1lP346eB0NeyuWj", "localize_auto_tranform");
    "use strict";
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.nodeProxy = _GAME.localize.getProxyNode();
        this.nodeProxy.on("TRANFORM_TEXT", this.changeText, this);
      },
      onDestroy: function onDestroy() {
        this.nodeProxy.off("TRANFORM_TEXT", this.changeText, this);
      },
      onEnable: function onEnable() {
        this.nodeProxy.on("TRANFORM_TEXT", this.changeText, this);
        this.changeText();
      },
      changeText: function changeText() {
        if (0 != _GAME.localize.pointerLang && _GAME.localize.currentLanguage && this.node.getComponent(cc.Label)) {
          2 != this.node.getComponent(cc.Label).overflow && (this.node.getComponent(cc.Label).overflow = 2);
          var cache = this.node.getComponent(cc.Label)._cache;
          if (!cache) {
            this.node.getComponent(cc.Label)._cache = this.node.getComponent(cc.Label).string;
            cache = this.node.getComponent(cc.Label)._cache;
          }
          var valueCompare = cache.replaceAll(" ", "").toUpperCase();
          _GAME.utils.setLabelText(this.node, _GAME.localize.convertPosition(valueCompare));
        }
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  localize_config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "885cfZpKoVM34dvWQw/UljQ", "localize_config");
    "use strict";
    exports.__esModule = true;
    exports.localizeConfig = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var localizeConfig = {
      init: function init() {
        console.log("LOAD module localizeConfig");
      },
      totalLocalLang: [ "en_US", "vi_VN", "th_TH", "fr_FR", "pt_PT", "es_ES", "ar_AR", "tr_TR", "de_DE", "zh_CN" ],
      meaningLocalLang: [ "English", "Ti\u1ebfng Vi\u1ec7t", "\u0e44\u0e17\u0e22", "fran\xe7ais", "Portugu\xeas", "Espa\xf1ol", "\u0639\u0631\u0628\u0649", "T\xfcrk", "Deutsche", "\u4e2d\u6587" ],
      localize: {
        PAUSE: {
          ar_AR: "\u0648\u0642\u0641\u0629",
          pl_PL: "Pauza",
          en_US: "Pause",
          tr_TR: "Duraklat",
          vi_VN: "T\u1ea1m d\u1eebng",
          es_ES: "Pausa",
          zh_CN: "\u66ab\u505c",
          th_TH: "\u0e2b\u0e22\u0e38\u0e14",
          fr_FR: "Pause",
          pt_PT: "Pausa",
          de_DE: "Pause"
        },
        CANCEL: {
          ar_AR: "\u0627\u0633\u062a\u0642\u0627\u0644",
          pl_PL: "Porzuci\u0107",
          en_US: "Cancel",
          tr_TR: "\xc7\u0131k",
          vi_VN: "B\u1ecf",
          es_ES: "Dejar",
          zh_CN: "\u653e\u68c4",
          th_TH: "\u0e40\u0e25\u0e34\u0e01",
          fr_FR: "Quitter",
          pt_PT: "Sair",
          de_DE: "Verlassen"
        },
        GAMEOVER: {
          ar_AR: "\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0644\u0639\u0628\u0629",
          pl_PL: "Koniec gry",
          en_US: "Game over",
          tr_TR: "Oyun bitti",
          vi_VN: "Thua cu\u1ed9c",
          es_ES: "Juego terminado",
          zh_CN: "\u904a\u6232\u7d50\u675f",
          th_TH: "\u0e08\u0e1a\u0e40\u0e01\u0e21",
          fr_FR: "Jeu termin\xe9",
          pt_PT: "Fim de jogo",
          de_DE: "Spiel ist aus"
        },
        YOURSCORE: {
          ar_AR: "\u062f\u0631\u062c\u0627\u062a\u0643",
          pl_PL: "Tw\xf3j wynik",
          en_US: "Your score",
          tr_TR: "Puan\u0131n",
          vi_VN: "\u0110i\u1ec3m",
          es_ES: "Tu puntuaci\xf3n",
          zh_CN: "\u4f60\u7684\u5206\u6578",
          th_TH: "\u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
          fr_FR: "ton score",
          pt_PT: "Sua pontua\xe7\xe3o",
          de_DE: "Ihre Punktzahl"
        },
        BRAG: {
          ar_AR: "\u062a\u0641\u0627\u062e\u0631",
          pl_PL: "Przechwala\u0107",
          en_US: "Brag",
          tr_TR: "\xd6v\xfcnmek",
          vi_VN: "Chia s\u1ebb",
          es_ES: "Jactarse",
          zh_CN: "\u5439\u725b",
          th_TH: "\u0e42\u0e21\u0e49",
          fr_FR: "Se vanter",
          pt_PT: "Gabar-se",
          de_DE: "Prahlen"
        },
        PLAYANOTHERFRIENDS: {
          ar_AR: "\u0627\u0644\u0639\u0628 \u0645\u0639 \u0627\u0644\u0627\u0635\u062f\u0642\u0627\u0621",
          pl_PL: "Gra\u0107 z przyjaci\xf3\u0142mi",
          en_US: "Play with friends",
          tr_TR: "Arkada\u015flarla oynamak",
          vi_VN: "Ch\u01a1i c\xf9ng b\u1ea1n",
          es_ES: "Jugar con amigas",
          zh_CN: "\u8207\u670b\u53cb\u4e00\u8d77\u73a9",
          th_TH: "\u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
          fr_FR: "jouer avec des amis",
          pt_PT: "Jogar com amigos",
          de_DE: "Mit Freunden spielen"
        },
        OUTOFMOVE: {
          ar_AR: "\u062e\u0627\u0631\u062c \u0627\u0644\u062d\u0631\u0643\u0629",
          pl_PL: "Brak ruchu",
          en_US: "Out of move",
          tr_TR: "Hareket d\u0131\u015f\u0131",
          vi_VN: "H\u1ebft n\u01b0\u1edbc \u0111i",
          es_ES: "Fuera de movimiento",
          zh_CN: "\u642c\u8d70",
          th_TH: "\u0e44\u0e21\u0e48\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e2b\u0e27",
          fr_FR: "Hors de mouvement",
          pt_PT: "Fora de movimento",
          de_DE: "Au\xdfer Bewegung"
        },
        CONTINUE: {
          ar_AR: "\u0627\u0633\u062a\u0645\u0631",
          pl_PL: "Kontyntynuj",
          en_US: "Continue",
          tr_TR: "Devam et",
          vi_VN: "Ti\u1ebfp t\u1ee5c",
          es_ES: "Seguir",
          zh_CN: "\u7e7c\u7e8c",
          th_TH: "\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d",
          fr_FR: "Continuer",
          pt_PT: "Continuar",
          de_DE: "Fortsetzen"
        },
        RESTART: {
          ar_AR: "\u0625\u0639\u0627\u062f\u0629 \u0628\u062f\u0621",
          pl_PL: "Uruchom ponownie",
          en_US: "Restart",
          tr_TR: "Tekrar ba\u015flat",
          vi_VN: "Ch\u01a1i l\u1ea1i",
          es_ES: "Reiniciar",
          zh_CN: "\u91cd\u65b0\u958b\u59cb",
          th_TH: "\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e2b\u0e21\u0e48",
          fr_FR: "Red\xe9marrer",
          pt_PT: "Reiniciar",
          de_DE: "Neustart"
        },
        PERFECT: {
          ar_AR: "\u0641\u064a \u0627\u062d\u0633\u0646 \u0627\u0644\u0627\u062d\u0648\u0627\u0644",
          pl_PL: "Idealny",
          en_US: "Perfect",
          tr_TR: "M\xfckemmel",
          vi_VN: "Tuy\u1ec7t v\u1eddi",
          es_ES: "Perfecta",
          zh_CN: "\u5b8c\u7f8e",
          th_TH: "\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c\u0e41\u0e1a\u0e1a",
          fr_FR: "Parfait",
          pt_PT: "impec\xe1vel",
          de_DE: "Perfekt"
        },
        GREAT: {
          ar_AR: "\u0639\u0638\u064a\u0645",
          pl_PL: "\u015awietny",
          en_US: "Great",
          tr_TR: "Harika",
          vi_VN: "Tuy\u1ec7t",
          es_ES: "Excelente",
          zh_CN: "\u975e\u5e38\u597d",
          th_TH: "\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e21\u0e32\u0e01",
          fr_FR: "g\xe9nial",
          pt_PT: "\xd3timo",
          de_DE: "Toll"
        },
        PLAY: {
          ar_AR: "\u0644\u0639\u0628",
          pl_PL: "Gra\u0107",
          en_US: "Play",
          tr_TR: "Oyna",
          vi_VN: "Ch\u01a1i",
          es_ES: "Tocar",
          zh_CN: "\u73a9",
          th_TH: "\u0e40\u0e25\u0e48\u0e19",
          fr_FR: "Jouer",
          pt_PT: "Jogar ",
          de_DE: "abspielen"
        },
        "WANTMORECHANCE?": {
          ar_AR: "\u062a\u0631\u064a\u062f \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u0631\u0635",
          pl_PL: "Chcesz wi\u0119cej szans",
          en_US: "Want more chance",
          tr_TR: "Daha fazla \u015fans istiyor",
          vi_VN: "Ch\u01a1i th\xeam ",
          es_ES: "Quiero m\xe1s oportunidad",
          zh_CN: "\u60f3\u8981\u66f4\u591a\u6a5f\u6703",
          th_TH: "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e42\u0e2d\u0e01\u0e32\u0e2a\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19",
          fr_FR: "Je veux plus de chance",
          pt_PT: "Quer mais chance",
          de_DE: "Willst du mehr Chance"
        },
        VIDEOISNOTAVAILABLE: {
          ar_AR: "\u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631",
          pl_PL: "Film jest niedost\u0119pny",
          en_US: "Video is not available",
          tr_TR: "Video mevcut de\u011fil",
          vi_VN: "Video kh\xf4ng kh\u1ea3 d\u1ee5ng",
          es_ES: "El video no est\xe1 disponible",
          zh_CN: "\u8996\u983b\u4e0d\u53ef\u7528",
          th_TH: "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d",
          fr_FR: "La vid\xe9o n'est pas disponible",
          pt_PT: "O v\xeddeo n\xe3o est\xe1 dispon\xedvel",
          de_DE: "Video ist nicht verf\xfcgbar"
        },
        NOTICE: {
          ar_AR: "\u062a\u0646\u0648\u064a\u0647",
          pl_PL: "Og\u0142oszenie",
          en_US: "Notice",
          tr_TR: "fark\u0131na varmak",
          vi_VN: "Ch\xfa \xfd",
          es_ES: "darse cuenta",
          zh_CN: "\u6ce8\u610f",
          th_TH: "\u0e41\u0e08\u0e49\u0e07\u0e43\u0e2b\u0e49\u0e17\u0e23\u0e32\u0e1a\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32",
          fr_FR: "Remarquer",
          pt_PT: "Aviso pr\xe9vio",
          de_DE: "Beachten"
        },
        REPLAY: {
          ar_AR: "\u0625\u0639\u0627\u062f\u0629",
          pl_PL: "Powt\xf3rna rozgrywka",
          en_US: "Replay",
          tr_TR: "Tekrar oynat",
          vi_VN: "Ch\u01a1i l\u1ea1i",
          es_ES: "Repetici\xf3n",
          zh_CN: "\u91cd\u73a9",
          th_TH: "\u0e40\u0e25\u0e48\u0e19\u0e0b\u0e49\u0e33",
          fr_FR: "Rejouer",
          pt_PT: "Replay",
          de_DE: "Wiederholung"
        },
        NICE: {
          ar_AR: "\u0644\u0637\u064a\u0641",
          pl_PL: "\u0141adny",
          en_US: "Nice",
          tr_TR: "G\xfczel",
          vi_VN: "T\u1ed1t",
          es_ES: "Niza",
          zh_CN: "\u597d",
          th_TH: "\u0e14\u0e35",
          fr_FR: "agr\xe9able",
          pt_PT: "bom",
          de_DE: "nett"
        },
        WATCH: {
          ar_AR: "\u0631\u0627\u0642\u0628",
          pl_PL: "Zegarek",
          en_US: "Watch",
          tr_TR: "\u0130zlemek",
          vi_VN: "Xem",
          es_ES: "Reloj",
          zh_CN: "\u770b",
          th_TH: "\u0e14\u0e39",
          fr_FR: "Regarder",
          pt_PT: "Ver",
          de_DE: "Uhr"
        },
        BEST: {
          ar_AR: "\u0627\u0644\u0623\u0641\u0636\u0644",
          pl_PL: "Najlepsza",
          en_US: "Best",
          tr_TR: "En iyi",
          vi_VN: "\u0110i\u1ec3m cao",
          es_ES: "superior",
          zh_CN: "\u6700\u597d",
          th_TH: "\u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
          fr_FR: "le plus",
          pt_PT: "Melhor",
          de_DE: "Beste"
        },
        OK: {
          ar_AR: "OK",
          pl_PL: "ok",
          en_US: "OK",
          tr_TR: "OK",
          vi_VN: "OK",
          es_ES: "OK",
          zh_CN: "\u597d",
          th_TH: "OK",
          fr_FR: "OK",
          pt_PT: "OK",
          de_DE: "OK"
        },
        TRYTHISTOCLEARBLOCK: {
          ar_AR: "\u062c\u0631\u0628 \u0647\u0630\u0627 \u0644\u0643\u062a\u0644\u0629 \u0648\u0627\u0636\u062d\u0629",
          pl_PL: "Spr\xf3buj to do jasnej bloku",
          en_US: "Try this to clear block",
          tr_TR: "berrak blo\u011fa bu deneyin",
          vi_VN: "H\xe3y th\u1eed \u0111i\u1ec1u n\xe0y v\u1edbi kh\u1ed1i r\xf5 r\xe0ng",
          es_ES: "Prueba esto al bloque clara",
          zh_CN: "\u5c1d\u8bd5\u4f7f\u7528\u6b64\u65b9\u6cd5\u660e\u786e\u5757",
          th_TH: "\u0e25\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e17\u0e35\u0e48\u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19",
          fr_FR: "Essayez ceci au bloc clair",
          pt_PT: "Tente isto para bloco clara",
          de_DE: [ "Versuchen Sie", " dies zu klaren Block" ]
        },
        GOOD: {
          ar_AR: "\u062d\u0633\u0646",
          pl_PL: "DOBRY",
          en_US: "GOOD",
          tr_TR: "\u0130Y\u0130",
          vi_VN: "T\u1ed0T",
          es_ES: "BUENO",
          zh_CN: "\u597d",
          th_TH: "\u0e14\u0e35",
          fr_FR: "BIEN",
          pt_PT: "BOA",
          de_DE: "GUT"
        },
        "TOOHARD?TRYTHIS!": {
          ar_AR: "\u0635\u0639\u0628 \u062c\u062f\u0627 \u061f \u062c\u0631\u0628 \u0647\u0630\u0627 !",
          pl_PL: "Zbyt trudne ? Spr\xf3buj tego !",
          en_US: "Too hard ? Try this !",
          tr_TR: "\xc7ok zor ? Bunu dene !",
          vi_VN: "Qu\xe1 kh\xf3 ? Th\u1eed \u0111i !",
          es_ES: "Demasiado duro ? Prueba esto !",
          zh_CN: "\u592a\u96be \uff1f\u8bd5\u8bd5\u8fd9\u4e2a \uff01",
          th_TH: "\u0e22\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b ? \u0e25\u0e2d\u0e07\u0e19\u0e35\u0e49!",
          fr_FR: "Trop dur ? Essaye \xe7a !",
          pt_PT: "Demasiado dif\xedcil ? Tente isto!",
          de_DE: "Zu schwer ? Versuche dies !"
        },
        TRYX3YOURSCORE: {
          ar_AR: "\u0645\u062d\u0627\u0648\u0644\u0629 X3 \u062f\u0631\u062c\u0627\u062a\u0643",
          pl_PL: "Spr\xf3buj X3 sw\xf3j wynik",
          en_US: "Try X3 your score",
          tr_TR: "X3 puan\u0131n\u0131z\u0131 deneyin",
          vi_VN: "H\xe3y th\u1eed \u0111i\u1ec3m s\u1ed1 c\u1ee7a b\u1ea1n X3",
          es_ES: "Trate X3 su puntuaci\xf3n",
          zh_CN: "\u5c1d\u8bd5X3\u4f60\u7684\u5206\u6570",
          th_TH: "\u0e25\u0e2d\u0e07 X3 \u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
          fr_FR: "Essayez votre score X3",
          pt_PT: "Tente X3 sua pontua\xe7\xe3o",
          de_DE: "Versuchen X3 Ihre G\xe4ste"
        },
        TABHERETOSWITCHBLOCK: {
          ar_AR: "\u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0647\u0646\u0627 \u0644\u0644\u062a\u0628\u062f\u064a\u0644 \u0643\u062a\u0644\u0629",
          pl_PL: "Tab tutaj aby prze\u0142\u0105czy\u0107 blok",
          en_US: "Tab here to switch block",
          tr_TR: "Sekme burada blok ge\xe7mek i\xe7in",
          vi_VN: "Tab \u0111\xe2y \u0111\u1ec3 chuy\u1ec3n kh\u1ed1i",
          es_ES: "Pesta\xf1a aqu\xed para cambiar el bloque",
          zh_CN: "\u6807\u7b7e\u6b64\u5904\u5207\u6362\u5757",
          th_TH: "\u0e41\u0e17\u0e47\u0e1a\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e25\u0e31\u0e1a\u0e1a\u0e25\u0e47\u0e2d\u0e01",
          fr_FR: "Tab ici pour basculer bloc",
          pt_PT: "Tab aqui para alternar bloco",
          de_DE: "Tab hier zu Block wechseln"
        },
        X3SCORE: {
          ar_AR: "\u0627\u0644\u0646\u062a\u064a\u062c\u0629 X3",
          pl_PL: "wynik x3",
          en_US: "x3 score",
          tr_TR: "x3 puan\u0131",
          vi_VN: "\u0111i\u1ec3m x3",
          es_ES: "puntuaci\xf3n x3",
          zh_CN: "X3\u5f97\u5206",
          th_TH: "\u0e04\u0e30\u0e41\u0e19\u0e19 x3",
          fr_FR: "Le score x3",
          pt_PT: "pontua\xe7\xe3o x3",
          de_DE: "x3 Punktzahl"
        },
        "OOPS!\n\nSOMETHINGWENTWRONG": {
          ar_AR: "\u0648\u062c\u0647 \u0627\u0644\u0641\u062a\u0627\u0629! \n\n \u0647\u0646\u0627\u0643 \u062e\u0637\u0623 \u0645\u0627",
          pl_PL: "Ups! \n\n Co\u015b posz\u0142o nie tak",
          en_US: "Oops!\n\n Something went wrong",
          tr_TR: "Hata! \n\n Bir \u015feyler ters gitti",
          vi_VN: "Oops! \n\n M\u1ed9t c\xe1i g\xec \u0111\xf3 \u0111\xe3 \u0111i l\u1ed7i",
          es_ES: "\xa1Huy! \n\n Algo sali\xf3 mal",
          zh_CN: "\u7cdf\u7cd5\uff01\n\n\u51fa\u4e86\u9519",
          th_TH: "\u0e2d\u0e4a\u0e30! \n\n \u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",
          fr_FR: "Oops! \n\n Quelque chose a mal tourn\xe9",
          pt_PT: "Ops! \n\n Algo deu errado",
          de_DE: "Oops! \n\n ging etwas schief"
        }
      },
      linkParameter: {
        "Canvas/play_area/triple": "x3 score",
        "Canvas/play_area/labels/compliment/label": "NICE",
        "Canvas/play_area/labels/game_over/sample_score_tool_tip": "OUT OF MOVES!",
        "Canvas/layer_pause/label_pause": "Pause",
        "Canvas/layer_pause/btn_continue/label_continue": "CONTINUE",
        "Canvas/layer_pause/btn_restart/label_restart": "RESTART",
        "Canvas/layer_pause/btn_localize/lb_lang": "English",
        "Canvas/layer_tut/hinding": "Label",
        "Canvas/layer_tut/text_motivate": "Label",
        "Canvas/layer_video_continue/label_continue": "Out of move",
        "Canvas/layer_video_continue/label_content": "Want more chance ?",
        "Canvas/layer_video_continue/btn_save_me/label_continue": "WATCH",
        "Canvas/layer_video_continue/btn_cancel/label_restart": "GAME OVER",
        "Canvas/layer_result/lb_best_score": "BEST",
        "Canvas/layer_result/lb_score": "YOUR SCORE",
        "Canvas/layer_result/btn_replay/label_replay": "REPLAY",
        "Canvas/layer_result/btn_brag/label_brag": "BRAG",
        "Canvas/layer_leaderboard/header/label_score_intro": "SCORE",
        "Canvas/layer_leaderboard/header/btn_brag/label_continue": "BRAG",
        "Canvas/layer_leaderboard/content_bg/bottom_container/btn_replay/label_restart": "REPLAY",
        "Canvas/layer_challenge/content/lb_static": "Your Score",
        "Canvas/layer_challenge/content/header/lb_top": "Great",
        "Canvas/layer_challenge/content/btn_c_play/Background/Label": "PLAY",
        "Canvas/layer_challenge/content/btn_c_play_another/Background/Label": "Play another friends",
        "Canvas/layer_challenge/content/btn_c_cancel/Background/Label": "Cancel",
        "Canvas/layer_alert/label_header": "Notice",
        "Canvas/layer_alert/btn_ok/label_restart": "OK"
      }
    };
    exports.localizeConfig = localizeConfig;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  localize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5893fLbxRDZY087HwmJ5gU", "localize");
    "use strict";
    exports.__esModule = true;
    exports.localize = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var LocalizeAutoTranform = require("localize_auto_tranform");
    var localize = {
      default_language: "ar_AR",
      init: function init() {
        var _this = this;
        this.checkNodeHasLabel();
        this.currentLanguage = this.default_language;
        _GAME.login.addLoginDataField("CurrentLanguage");
        _GAME.login.addCallback(function(data) {
          if (!data.currentLanguage) {
            _this.currentLanguage = _this.default_language;
            data.CurrentLanguage && (_this.currentLanguage = data.CurrentLanguage);
            _this.pointerLang = 0;
            -1 != _GAME.localizeConfig.totalLocalLang.indexOf(_this.currentLanguage) && (_this.pointerLang = _GAME.localizeConfig.totalLocalLang.indexOf(_this.currentLanguage));
            _this.updateCurrentLang();
          }
        });
      },
      checkNodeHasLabel: function checkNodeHasLabel() {
        var _this2 = this;
        this.ob = {};
        var nodeCanvas = cc.find("Canvas");
        nodeCanvas.children.map(function(nodeRoot) {
          _this2.searchArrayChildenNode(nodeRoot);
        });
        for (var key in this.ob) {
          var obSon = this.ob[key];
          var newObHasLabel = {};
          for (var k in obSon) {
            var element = obSon[k];
            if (this.validateNode(element)) {
              var value = element.getComponent(cc.Label).string;
              if ("NaN" == parseInt(value).toString()) {
                newObHasLabel[this.getNodePath(element)] = element;
                element.addComponent(LocalizeAutoTranform);
              }
            }
          }
          this.ob[key] = newObHasLabel;
        }
      },
      searchArrayChildenNode: function searchArrayChildenNode(node) {
        if (node) {
          var currentOb = {};
          currentOb[this.getNodePath(node)] = node;
          this.loopSearch(node.children, currentOb);
          this.ob[node.name] = currentOb;
        }
      },
      loopSearch: function loopSearch(listChildrenClone, currentOb) {
        var _this3 = this;
        if (!(listChildrenClone.length > 0)) return currentOb;
        var lateNode = [];
        listChildrenClone.map(function(child) {
          currentOb[_this3.getNodePath(child)] || (currentOb[_this3.getNodePath(child)] = child);
          child.children.length > 0 && (lateNode = lateNode.concat(child.children));
        });
        if (!(lateNode.length > 0)) return currentOb;
        this.loopSearch(lateNode, currentOb);
      },
      validateNode: function validateNode(node) {
        if (node.getComponent(cc.Label)) return true;
        return false;
      },
      getNodePath: function getNodePath(node) {
        var path = "";
        if (node) {
          var string = node.name;
          var parentnode = node.parent;
          path = parentnode.name + "/" + string;
          while ("Canvas" != parentnode.name) {
            var lastPath = path;
            parentnode = parentnode.parent;
            path = parentnode.name + "/" + lastPath;
            if ("Canvas" == parentnode.name) break;
          }
        }
        return path;
      },
      convertPosition: function convertPosition(cacheValue) {
        var result = "";
        0 != cacheValue.length && _GAME.localizeConfig.localize && this.currentLanguage && (_GAME.localizeConfig.localize[cacheValue] ? result = _GAME.localizeConfig.localize[cacheValue][this.currentLanguage] : "ENGLISH" == cacheValue && (result = _GAME.localizeConfig.meaningLocalLang[this.pointerLang]));
        return result;
      },
      onClickChangeLocalize: function onClickChangeLocalize() {
        this.pointerLang++;
        this.pointerLang >= _GAME.localizeConfig.totalLocalLang.length && (this.pointerLang = 0);
        this.currentLanguage = _GAME.localizeConfig.totalLocalLang[this.pointerLang];
        _GAME.data.saveData({
          CurrentLanguage: this.currentLanguage
        });
        this.emitProxyNode();
      },
      emitProxyNode: function emitProxyNode() {
        var canvas = cc.find("Canvas");
        canvas.emit("TRANFORM_TEXT");
      },
      getProxyNode: function getProxyNode() {
        return cc.find("Canvas");
      },
      updateCurrentLang: function updateCurrentLang() {
        this.emitProxyNode();
      }
    };
    exports.localize = localize;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    localize_auto_tranform: "localize_auto_tranform"
  } ],
  login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe386YvlHxGE7kmX8nmL/Zk", "login");
    "use strict";
    exports.__esModule = true;
    exports.login = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var loginDataFieldArr = [ "LoginTime", "IsOldUser", "isTutDone", "isDoneTutRolated", "isDoneTutBom", "isDoneTutRelocated", "isDoneTutTriple" ];
    var callbackArr = [];
    var login = {
      init: function init() {
        _GAME.utils.waitToRun(function() {
          _GAME.data.loadEntryPointData();
          _GAME.login.getFBData();
        }, "isUserReady", _GAME.data);
      },
      addLoginDataField: function addLoginDataField(fieldName) {
        loginDataFieldArr.includes(fieldName) || loginDataFieldArr.push(fieldName);
      },
      addCallback: function addCallback(callbackFunc) {
        _GAME.login.loginData ? callbackFunc(_GAME.login.loginData) : callbackArr.push(callbackFunc);
      },
      getFBData: function getFBData() {
        _GAME.data.loadData(loginDataFieldArr, function(data) {
          data.isNewUser = !data.IsOldUser;
          if (data.isNewUser) {
            _GAME.utilsFB.log("ev_login_new_user_incoming");
            _GAME.user.initNewUser(data);
            _GAME.login.initLogin(data);
            _GAME.data.saveData({
              IsOldUser: true
            });
            _GAME.friend.loadDataFrienld();
            return;
          }
          _GAME.login.initLogin(data);
          _GAME.friend.loadDataFrienld();
        });
      },
      initLogin: function initLogin(data) {
        if (_GAME.login.isInitLoginCalled) return;
        _GAME.login.isInitLoginCalled = true;
        _GAME.login.loginData = data;
        _GAME.user.lastLoginTime = data.LoginTime || _time();
        callbackArr.map(function(func, index) {
          try {
            func(data);
          } catch (e) {
            _log("loginCallback func error", e);
          }
        });
      }
    };
    exports.login = login;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  map_visual: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c7b7iZGvxOE5SKb4kkO3wf", "map_visual");
    "use strict";
    exports.__esModule = true;
    exports.mapVisual = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var BlockAsset = require("blockAsset");
    var mapVisual = {
      init: function init() {
        var sampleBlock = cc.find("Canvas/sample_block");
        cc.find("Canvas/play_area/map").children.map(function(cell) {
          var newBlock = _GAME.utils.copyNodeTo(sampleBlock, cell);
          newBlock.active = false;
          cell.cellNumber = cell.name.replace("Image_HexBlock_", "");
        });
        cc.find("Canvas/play_area/new_item_container/new_item/item_types").children.map(function(typeNode) {
          typeNode.children.map(function(blockContainer) {
            var newBlock = _GAME.utils.copyNodeTo(sampleBlock, blockContainer);
            newBlock.active = false;
          });
        });
      },
      resetSingleCell: function resetSingleCell(cellNumber) {
        var block = cc.find("Canvas/play_area/map/Image_HexBlock_" + cellNumber + "/sample_block");
        if (!block) return;
        block.active = false;
        block.x = block.y = 0;
        return block;
      },
      resetMap: function resetMap() {
        var _this = this;
        cc.find("Canvas/play_area/map").children.map(function(cell) {
          return _this.resetSingleCell(cell.name.replace("Image_HexBlock_", ""));
        });
      },
      decorBlock: function decorBlock(blockNode, blockNumber) {
        blockNode.getChildByName("x").active = false;
        blockNode.getChildByName("Image_HexBlock").getComponent(cc.Sprite).spriteFrame = blockNode.getChildByName("Image_HexBlock").getComponent(BlockAsset).assetBlock[parseInt(blockNumber) - 1];
        if (7 != blockNumber) _GAME.utils.setLabelText(blockNode.getChildByName("label"), blockNumber); else {
          blockNode.getChildByName("x").active = true;
          _GAME.utils.setLabelText(blockNode.getChildByName("label"), "");
        }
        blockNode.active = true;
      },
      renderSingleCell: function renderSingleCell(cellNumber, blockNumber) {
        if (!blockNumber) return;
        var block = this.resetSingleCell(cellNumber);
        this.decorBlock(block, blockNumber);
      },
      renderMap: function renderMap(mapState) {
        this.resetMap();
        for (var cellNumber in mapState) this.renderSingleCell(cellNumber, mapState[cellNumber]);
      }
    };
    exports.mapVisual = mapVisual;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    blockAsset: "blockAsset"
  } ],
  map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5e96y1mC9AyJNqpp7vl0Rq", "map");
    "use strict";
    exports.__esModule = true;
    exports.map = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var map = {
      cellLinks: require("cell_links"),
      cellLinkMap: {},
      currentState: null,
      selectedCell: null,
      minorCell: null,
      init: function init() {
        for (var linkName in this.cellLinks) {
          var cellArr = linkName.split("_");
          var cellNode0 = cc.find("Canvas/play_area/map/Image_HexBlock_" + cellArr[0]);
          var cellNode1 = cc.find("Canvas/play_area/map/Image_HexBlock_" + cellArr[1]);
          var isCell0Dominated = cellNode0.x > cellNode1.x;
          this.cellLinkMap[cellArr[0]] = this.cellLinkMap[cellArr[0]] || {};
          this.cellLinkMap[cellArr[0]][cellArr[1]] = this.cellLinks[linkName] + (isCell0Dominated ? "_dominated" : "");
          this.cellLinkMap[cellArr[1]] = this.cellLinkMap[cellArr[1]] || {};
          this.cellLinkMap[cellArr[1]][cellArr[0]] = this.cellLinks[linkName] + (isCell0Dominated ? "" : "_dominated");
        }
      },
      resetMap: function resetMap() {
        this.currentState = {};
        _GAME.mapVisual.resetMap();
      },
      setSingleCell: function setSingleCell(cellNumber, blockNumber) {
        this.currentState[cellNumber] = blockNumber;
        _GAME.mapVisual.renderSingleCell(cellNumber, blockNumber);
      },
      clearSingleCell: function clearSingleCell(cellNumber) {
        this.currentState[cellNumber] = null;
        _GAME.mapVisual.resetSingleCell(cellNumber);
      },
      setCellGroup: function setCellGroup(cellInfoArr) {
        var _this = this;
        cellInfoArr.map(function(cellInfo) {
          _this.setSingleCell(cellInfo.cellNumber, cellInfo.blockNumber);
        });
      },
      clearCellGroup: function clearCellGroup(cellInfoArr) {
        var _this2 = this;
        cellInfoArr.map(function(cellNumber) {
          _this2.clearSingleCell(cellNumber);
        });
      },
      checkNewItemDroppableAtCell: function checkNewItemDroppableAtCell(cellNumber) {
        if (this.currentState[cellNumber]) return;
        var biasType = _GAME.game.currentItemBiasType;
        if ("single_block" == biasType) return true;
        var biasLinks = this.cellLinkMap[cellNumber];
        var minorCellNumber;
        for (var otherCellNumber in biasLinks) if (biasLinks[otherCellNumber] == biasType) {
          minorCellNumber = otherCellNumber;
          break;
        }
        if (!minorCellNumber) return;
        if (this.currentState[minorCellNumber]) return;
        return minorCellNumber;
      },
      dropNewItemAtCell: function dropNewItemAtCell(keyCellNumber, minorCellNumber) {
        this.setSingleCell(keyCellNumber, _GAME.game.currentKeyBlockNumber);
        minorCellNumber && this.setSingleCell(minorCellNumber, _GAME.game.currentMinorBlockNumber);
      },
      checkAvailableNewItemInfo: function checkAvailableNewItemInfo() {
        var blockCount = 1;
        var biasTypeSet = new Set();
        for (var cellNumber in this.cellLinkMap) {
          if (this.currentState[cellNumber + ""]) continue;
          var linkedCells = this.cellLinkMap[cellNumber];
          for (var linkedCellNumber in linkedCells) {
            if (this.currentState[linkedCellNumber + ""]) continue;
            blockCount = 2;
            var biasTypeName = linkedCells[linkedCellNumber].replace("_dominated", "");
            biasTypeSet.add(biasTypeName);
          }
        }
        return {
          blockCount: blockCount,
          biasTypeArr: Array.from(biasTypeSet)
        };
      },
      isFulled: function isFulled() {
        return 19 == Object.values(this.currentState).filter(function(item) {
          return !!item;
        }).length;
      },
      checkBlockScore: function checkBlockScore(cellNumber) {
        var _checkedCellNumber, _this3 = this;
        var blockNumber = this.currentState[cellNumber];
        var checkedCellNumber = (_checkedCellNumber = {}, _checkedCellNumber[cellNumber] = true, 
        _checkedCellNumber);
        var scoredCellArr = [ cellNumber ];
        var safeCount = 19;
        var cellLinkMap = this.cellLinkMap;
        var recursiveFunc = function recursiveFunc(cellNumber) {
          if (--safeCount <= 0) return;
          var expandingCellArr = [];
          for (var linkedCellNumber in cellLinkMap[cellNumber]) {
            if (checkedCellNumber[linkedCellNumber]) continue;
            checkedCellNumber[linkedCellNumber] = true;
            if (_this3.currentState[linkedCellNumber] != blockNumber) continue;
            scoredCellArr.push(linkedCellNumber);
            expandingCellArr.push(linkedCellNumber);
          }
          expandingCellArr.map(function(cellNumber) {
            return recursiveFunc(cellNumber);
          });
        };
        recursiveFunc(cellNumber);
        var minLinkedCellToScore = 3;
        if (scoredCellArr.length < minLinkedCellToScore) return false;
        return scoredCellArr;
      }
    };
    exports.map = map;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    cell_links: "cell_links"
  } ],
  md5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd908DkuZ1KZqhhfUyqSqOb", "md5");
    "use strict";
    module.exports = {
      MD5: function MD5(string) {
        function RotateLeft(lValue, iShiftBits) {
          return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        }
        function AddUnsigned(lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          lX8 = 2147483648 & lX;
          lY8 = 2147483648 & lY;
          lX4 = 1073741824 & lX;
          lY4 = 1073741824 & lY;
          lResult = (1073741823 & lX) + (1073741823 & lY);
          if (lX4 & lY4) return 2147483648 ^ lResult ^ lX8 ^ lY8;
          return lX4 | lY4 ? 1073741824 & lResult ? 3221225472 ^ lResult ^ lX8 ^ lY8 : 1073741824 ^ lResult ^ lX8 ^ lY8 : lResult ^ lX8 ^ lY8;
        }
        function F(x, y, z) {
          return x & y | ~x & z;
        }
        function G(x, y, z) {
          return x & z | y & ~z;
        }
        function H(x, y, z) {
          return x ^ y ^ z;
        }
        function I(x, y, z) {
          return y ^ (x | ~z);
        }
        function FF(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function GG(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function HH(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function II(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function ConvertToWordArray(string) {
          var lWordCount;
          var lMessageLength = string.length;
          var lNumberOfWords_temp1 = lMessageLength + 8;
          var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
          var lNumberOfWords = 16 * (lNumberOfWords_temp2 + 1);
          var lWordArray = Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;
          while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
          }
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
        }
        function WordToHex(lValue) {
          var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
          for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> 8 * lCount & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue += WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
          }
          return WordToHexValue;
        }
        function Utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          var utftext = "";
          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) utftext += String.fromCharCode(c); else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(63 & c | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(63 & c | 128);
            }
          }
          return utftext;
        }
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        string = Utf8Encode(string);
        x = ConvertToWordArray(string);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        for (k = 0; k < x.length; k += 16) {
          AA = a;
          BB = b;
          CC = c;
          DD = d;
          a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
          d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
          c = FF(c, d, a, b, x[k + 2], S13, 606105819);
          b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
          a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
          d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
          c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
          b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
          a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
          d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
          c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
          b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
          a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
          d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
          c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
          b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
          a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
          d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
          c = GG(c, d, a, b, x[k + 11], S23, 643717713);
          b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
          a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
          d = GG(d, a, b, c, x[k + 10], S22, 38016083);
          c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
          b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
          a = GG(a, b, c, d, x[k + 9], S21, 568446438);
          d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
          c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
          b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
          a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
          d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
          c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
          b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
          a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
          d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
          c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
          b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
          a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
          d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
          c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
          b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
          a = HH(a, b, c, d, x[k + 13], S31, 681279174);
          d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
          c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
          b = HH(b, c, d, a, x[k + 6], S34, 76029189);
          a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
          d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
          c = HH(c, d, a, b, x[k + 15], S33, 530742520);
          b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
          a = II(a, b, c, d, x[k + 0], S41, 4096336452);
          d = II(d, a, b, c, x[k + 7], S42, 1126891415);
          c = II(c, d, a, b, x[k + 14], S43, 2878612391);
          b = II(b, c, d, a, x[k + 5], S44, 4237533241);
          a = II(a, b, c, d, x[k + 12], S41, 1700485571);
          d = II(d, a, b, c, x[k + 3], S42, 2399980690);
          c = II(c, d, a, b, x[k + 10], S43, 4293915773);
          b = II(b, c, d, a, x[k + 1], S44, 2240044497);
          a = II(a, b, c, d, x[k + 8], S41, 1873313359);
          d = II(d, a, b, c, x[k + 15], S42, 4264355552);
          c = II(c, d, a, b, x[k + 6], S43, 2734768916);
          b = II(b, c, d, a, x[k + 13], S44, 1309151649);
          a = II(a, b, c, d, x[k + 4], S41, 4149444226);
          d = II(d, a, b, c, x[k + 11], S42, 3174756917);
          c = II(c, d, a, b, x[k + 2], S43, 718787259);
          b = II(b, c, d, a, x[k + 9], S44, 3951481745);
          a = AddUnsigned(a, AA);
          b = AddUnsigned(b, BB);
          c = AddUnsigned(c, CC);
          d = AddUnsigned(d, DD);
        }
        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return temp.toLowerCase();
      }
    };
    cc._RF.pop();
  }, {} ],
  message: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69a81aZStJKBrvJBkp/ATpA", "message");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _GAME = require("../all_modules");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Message = function(_super) {
      __extends(Message, _super);
      function Message() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Play_with_message = null;
        return _this;
      }
      Message.prototype.onLoad = function() {};
      Message.prototype.initBase64Picture = function(target) {
        return __awaiter(this, void 0, void 0, function() {
          var cameraNode, camera, texture, width, height, _canvas, ctx, data, rowBytes, row, srow, data2, imageData, dataURL;
          return __generator(this, function(_a) {
            if (!target.activeInHierarchy) {
              target.parent.active = true;
              target.parent.parent.active = true;
            }
            cameraNode = new cc.Node();
            target.addChild(cameraNode);
            cameraNode.position = target.position;
            camera = cameraNode.addComponent(cc.Camera);
            camera.cullingMask = 4294967295;
            texture = new cc.RenderTexture();
            texture.initWithSize(target.width, target.height);
            camera.targetTexture = texture;
            camera.zoomRatio = 3.27;
            width = texture.width;
            height = texture.height;
            _canvas = document.createElement("canvas");
            _canvas.width = width;
            _canvas.height = height;
            ctx = _canvas.getContext("2d");
            camera.render(target);
            data = texture.readPixels();
            rowBytes = 4 * width;
            for (row = 0; row < height; row++) {
              srow = height - 1 - row;
              data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
              imageData = new ImageData(data2, width, 1);
              ctx.putImageData(imageData, 0, row);
            }
            dataURL = _canvas.toDataURL();
            setTimeout(function() {
              return target.parent.active = false;
            }, 2e3);
            return [ 2, dataURL ];
          });
        });
      };
      Message.prototype.initPayload = function(target, content, ctaText, extraData) {
        return __awaiter(this, void 0, void 0, function() {
          var base64Image, payload, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, this.initBase64Picture(target) ];

             case 1:
              base64Image = _a.sent();
              payload = {
                action: "CUSTOM",
                text: content,
                cta: ctaText,
                image: base64Image,
                template: "play_turn",
                strategy: "IMMEDIATE",
                data: extraData,
                notification: "PUSH"
              };
              return [ 2, payload ];

             case 2:
              error_1 = _a.sent();
              throw error_1;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Message.prototype.sendMessagePlayWith = function() {
        return __awaiter(this, void 0, void 0, function() {
          var nodeNameUser, nodePointUser, content, ctaText, payload, error_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 3, , 4 ]);
              nodeNameUser = this.Play_with_message.getChildByName("lb_username");
              _GAME.utils.setLabelText(nodeNameUser, _GAME.user.name);
              nodePointUser = this.Play_with_message.getChildByName("user_score");
              _GAME.utils.setLabelText(nodePointUser, _GAME.utils.localizeNumber(_GAME.user.score));
              content = _GAME.user.name + " has " + _GAME.user.score + " when  playing Hexa 7";
              ctaText = "";
              return [ 4, this.initPayload(this.Play_with_message, content, ctaText) ];

             case 1:
              payload = _a.sent();
              return [ 4, FBInstant.updateAsync(payload) ];

             case 2:
              _a.sent();
              return [ 3, 4 ];

             case 3:
              error_2 = _a.sent();
              _log("sendMessageGiftRequest", error_2);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Message.prototype, "Play_with_message", void 0);
      Message = __decorate([ ccclass ], Message);
      return Message;
    }(cc.Component);
    exports.default = Message;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  promo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8faa3pvFlNJnYG+y+nxzeDp", "promo");
    "use strict";
    exports.__esModule = true;
    exports.promo = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var promo = {
      countScale: 0,
      init: function init() {
        cc.find("Canvas/layer_leaderboard/content_bg/middle_container/promo_panel").active = window.canPromo;
        cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/leaderboard_content").height = window.canPromo ? 375 : 573;
      },
      renderButtonByIcon: function renderButtonByIcon() {
        var promoPanel = cc.find("Canvas/layer_leaderboard/content_bg/middle_container/promo_panel");
        promoPanel && _GAME.configs.listIdPromoGame && promoPanel.children.map(function(item, index) {
          _GAME.utils.addButtonComp(item, function() {
            _GAME.utilsFB.log("ev_click_button_promo_game", 1, {
              Position: index
            });
            _GAME.social.switchPromoGame(_GAME.configs.listIdPromoGame[index]);
          });
        });
      },
      actionIconPromo: function actionIconPromo() {
        var _this = this;
        var promoPanel = cc.find("Canvas/layer_leaderboard/content_bg/middle_container/promo_panel");
        var itemScale = promoPanel.children[this.countScale];
        itemScale && _GAME.fx.bubble(itemScale, function() {
          _GAME.utils.setTimeout(function() {
            _this.countScale++;
            _this.countScale > 2 && (_this.countScale = 0);
            _this.actionIconPromo();
          }, 500);
        });
      }
    };
    exports.promo = promo;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  share: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42f63SSvQFLtKv50nkTNMEv", "share");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Share = function(_super) {
      __extends(Share, _super);
      function Share() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.SharePhoto_Normal = null;
        return _this;
      }
      Share.prototype.initBase64Picture = function(target) {
        return __awaiter(this, void 0, void 0, function() {
          var cameraNode, camera, texture, width, height, _canvas, ctx, data, rowBytes, row, srow, data2, imageData, dataURL;
          return __generator(this, function(_a) {
            if (!target.activeInHierarchy) {
              target.parent.active = true;
              target.parent.parent.active = true;
            }
            cameraNode = new cc.Node();
            target.addChild(cameraNode);
            cameraNode.position = target.position;
            camera = cameraNode.addComponent(cc.Camera);
            camera.cullingMask = 4294967295;
            texture = new cc.RenderTexture();
            texture.initWithSize(target.width, target.height);
            camera.targetTexture = texture;
            camera.zoomRatio = 2.5;
            width = texture.width;
            height = texture.height;
            _canvas = document.createElement("canvas");
            _canvas.width = width;
            _canvas.height = height;
            ctx = _canvas.getContext("2d");
            camera.render(target);
            data = texture.readPixels();
            rowBytes = 4 * width;
            for (row = 0; row < height; row++) {
              srow = height - 1 - row;
              data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
              imageData = new ImageData(data2, width, 1);
              ctx.putImageData(imageData, 0, row);
            }
            dataURL = _canvas.toDataURL();
            _log(target, texture, camera, _canvas);
            setTimeout(function() {
              return target.parent.active = false;
            }, 2e3);
            return [ 2, dataURL ];
          });
        });
      };
      Share.prototype.initPayload = function(target, content, extraData) {
        return __awaiter(this, void 0, void 0, function() {
          var base64Image, payload, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, this.initBase64Picture(target) ];

             case 1:
              base64Image = _a.sent();
              payload = {
                intent: "SHARE",
                image: base64Image,
                text: content,
                data: extraData
              };
              return [ 2, payload ];

             case 2:
              error_1 = _a.sent();
              throw error_1;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Share.prototype.sharePostNormal = function() {
        return __awaiter(this, void 0, void 0, function() {
          var payload, error_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 3, , 4 ]);
              return [ 4, this.initPayload(this.SharePhoto_Normal, "") ];

             case 1:
              payload = _a.sent();
              _log(payload);
              return [ 4, FBInstant.shareAsync(payload) ];

             case 2:
              _a.sent();
              return [ 3, 4 ];

             case 3:
              error_2 = _a.sent();
              _log(error_2);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Share.prototype, "SharePhoto_Normal", void 0);
      Share = __decorate([ ccclass ], Share);
      return Share;
    }(cc.Component);
    exports.default = Share;
    cc._RF.pop();
  }, {} ],
  social: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "798712gdWZGPoFWJmCdWrqz", "social");
    "use strict";
    exports.__esModule = true;
    exports.social = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    var _share = _interopRequireDefault(require("../social/share"));
    var _message = _interopRequireDefault(require("../social/message"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var social = {
      init: function init() {
        var _this = this;
        _GAME.login.addLoginDataField("subscribeInfo");
        _GAME.login.addLoginDataField("shortcutInfo");
        _GAME.login.addCallback(function(data) {
          _this.subscribeInfo = data.hasOwnProperty("subscribeInfo") ? data.subscribeInfo : 5;
          _this.shortcutInfo = data.hasOwnProperty("shortcutInfo") ? data.shortcutInfo : 5;
        });
      },
      share: function share(userScore) {
        false == cc.find("Canvas/shares").active && (cc.find("Canvas/shares").active = true);
        _GAME.utils.setLabelText(cc.find("Canvas/shares/sharepicture/label_score"), _GAME.utils.localizeNumber(userScore));
        cc.find("Canvas/shares").getComponent(_share["default"]).sharePostNormal();
      },
      sendMessageAfterQuit: function sendMessageAfterQuit() {
        false == cc.find("Canvas/messages").active && (cc.find("Canvas/messages").active = true);
        cc.find("Canvas/messages").getComponent(_message["default"]).sendMessagePlayWith();
      },
      askBotSubscribe: function askBotSubscribe(callback) {
        var _this2 = this;
        var finalCallback = function finalCallback() {
          return callback && callback();
        };
        if (!window.FBInstant) return finalCallback();
        if (!_GAME.utilsFB.isSupportedAPI("player.canSubscribeBotAsync") || !_GAME.utilsFB.isSupportedAPI("player.subscribeBotAsync")) return finalCallback() || _log(" askBotSubscribe :: isSupportedAPI > not supported");
        if ("accepted" == this.subscribeInfo || this.subscribeInfo <= 0) return finalCallback();
        this.subscribeInfo--;
        _GAME.data.saveData({
          subscribeInfo: this.subscribeInfo
        });
        FBInstant.player.canSubscribeBotAsync().then(function(can_subscribe) {
          if (!can_subscribe) return finalCallback() || _log(" askBotSubscribe :: can_subscribe = " + can_subscribe + " ");
          FBInstant.player.subscribeBotAsync().then(function() {
            _this2.subscribeInfo = "accepted";
            _GAME.data.saveData({
              subscribeInfo: _this2.subscribeInfo
            });
            finalCallback();
          })["catch"](function(e) {
            return finalCallback();
          });
        })["catch"](function(e) {
          return finalCallback() || _log(" askBotSubscribe :: canSubscribeBotAsync().then(fail) => ", e);
        });
      },
      askShortcut: function askShortcut(callback) {
        var _this3 = this;
        var finalCallback = function finalCallback() {
          return callback && callback();
        };
        if (!window.FBInstant) return finalCallback();
        if (!_GAME.utilsFB.isSupportedAPI("canCreateShortcutAsync") || !_GAME.utilsFB.isSupportedAPI("createShortcutAsync")) return finalCallback();
        if ("accepted" == this.shortcutInfo || this.shortcutInfo <= 0) return finalCallback();
        this.shortcutInfo--;
        _GAME.data.saveData({
          shortcutInfo: this.shortcutInfo
        });
        FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
          if (!canCreateShortcut) return finalCallback();
          FBInstant.createShortcutAsync().then(function() {
            _this3.shortcutInfo = "accepted";
            _GAME.data.saveData({
              shortcutInfo: _this3.shortcutInfo
            });
            finalCallback();
          })["catch"](function(e) {
            return finalCallback() || _log(" createShortcutAsync :: ", e);
          });
        })["catch"](function(e) {
          return finalCallback() || _log(" canCreateShortcutAsync :: ", e);
        });
      },
      postSessionScore: function postSessionScore() {
        if (!window.FBInstant) return;
        if (_GAME.user.score <= (_GAME.game.bestSessionScore || 0)) return;
        _GAME.game.bestSessionScore = _GAME.user.score;
        _log(" postSessionScore called score = " + _GAME.game.bestSessionScore);
        FBInstant.postSessionScore(_GAME.game.bestSessionScore);
      },
      createContext: function createContext(playerId, callbackSuccess, callbackFail) {
        _log(" about to create context with player " + playerId);
        if (!window.FBInstant) {
          callbackSuccess && callbackSuccess();
          return;
        }
        var logContextResult = function logContextResult(result, error) {
          result && _log("Success ====> ", result);
          error && _log("Fail  ====> ", error);
        };
        FBInstant.context.createAsync(playerId).then(function() {
          callbackSuccess && callbackSuccess();
          logContextResult("success");
        }, function(e) {
          callbackFail && callbackFail(e);
          logContextResult("fail", e);
        });
      },
      invite: function invite(callback) {
        try {
          FBInstant.context.chooseAsync().then(function() {
            callback && callback(FBInstant.context.getID());
          })["catch"](function(err) {
            _log(err);
            callback && callback();
          });
        } catch (errX) {
          _log(errX);
          callback && callback();
        }
      },
      switchPromoGame: function switchPromoGame(idGame) {
        FBInstant.switchGameAsync(idGame)["catch"](function(e) {
          console("gameChangeError: ", e);
        });
      }
    };
    exports.social = social;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    "../social/message": "message",
    "../social/share": "share"
  } ],
  tut_bom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10717k8lHpDzYNJ7X2xmgMF", "tut_bom");
    "use strict";
    exports.__esModule = true;
    exports.tutBom = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var tutBom = {
      init: function init() {
        var _this = this;
        _GAME.login.addCallback(function(data) {
          _this.isDoneTutBom = data.isDoneTutBom;
        });
      },
      checkDoneTutBom: function checkDoneTutBom() {
        if (this.isDoneTutBom) return true;
        return false;
      },
      startTut: function startTut() {
        if (_GAME.configs.off_power_item) return;
        if (this.showing) return;
        _GAME.utilsFB.log("ev_start_tut_bom", 1);
        _GAME.ui.showLayer("layer_tut");
        _GAME.tutBom.startHandAction();
        this.showing = true;
        _GAME.tutBom.showTextHinding();
      },
      startHandAction: function startHandAction() {
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        _GAME.utils.setGlobalPositionToNode(hand, cc.v2(cc.find("Canvas/play_area/btn_bomb").x + 10, cc.find("Canvas/play_area/btn_bomb").y));
        var nodeContainer = cc.find("Canvas/play_area/new_item_container");
        _GAME.utils.setGlobalPositionToNode(cc.find("Canvas/layer_tut/text_motivate"), cc.v2(nodeContainer.x, nodeContainer.y + 150));
        hand.angle = 120;
        hand.runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(hand.x, hand.y + 70)), cc.moveTo(1, cc.v2(hand.x, hand.y + 40)))));
      },
      endTut: function endTut() {
        var _this2 = this;
        if (_GAME.configs.off_power_item) return;
        _GAME.utilsFB.log("ev_end_tut_bom", 1);
        _GAME.tutBom.setTextToMotivate(function() {
          _GAME.ui.hideLayer("layer_tut");
          _this2.showing = false;
          _this2.isDoneTutBom = true;
          _GAME.data.saveData({
            isDoneTutBom: "1"
          });
        });
      },
      checkHideTutHand: function checkHideTutHand() {
        if (this.isDoneTutBom) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkShowTutHand: function checkShowTutHand() {
        if (this.isDoneTutBom) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        _GAME.tut.startHandAction();
      },
      showTextHinding: function showTextHinding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        false == nodeLabel.active && (nodeLabel.active = true);
        _GAME.utils.setLabelText(nodeLabel, "Try this to clear block");
      },
      hideTextHiding: function hideTextHiding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        true == nodeLabel.active && (nodeLabel.active = false);
      },
      setTextToMotivate: function setTextToMotivate(callback) {
        var textMotivate = cc.find("Canvas/layer_tut/text_motivate");
        var newNodeMotivate = cc.instantiate(textMotivate);
        _GAME.utils.setLabelText(newNodeMotivate, "GOOD");
        false == newNodeMotivate.active && (newNodeMotivate.active = true);
        newNodeMotivate.parent = textMotivate.parent;
        newNodeMotivate.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 2), cc.fadeTo(.5, 255)), cc.spawn(cc.delayTime(.6), cc.sequence(cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2), cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2))), cc.spawn(cc.moveTo(.3, cc.v2(newNodeMotivate.x, newNodeMotivate.y + 100)), cc.fadeTo(.3, 0)), cc.callFunc(function() {
          newNodeMotivate.destroy();
          callback && callback();
        })));
      }
    };
    exports.tutBom = tutBom;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  tut_relocated: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7885JyJd1G44WC8QrBM049", "tut_relocated");
    "use strict";
    exports.__esModule = true;
    exports.tutRelocated = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var tutRelocated = {
      init: function init() {
        var _this = this;
        _GAME.login.addCallback(function(data) {
          _this.isDoneTutRelocated = data.isDoneTutRelocated;
        });
      },
      checkDoneTutRelocated: function checkDoneTutRelocated() {
        if (this.isDoneTutRelocated) return true;
        return false;
      },
      startTut: function startTut() {
        if (_GAME.configs.off_power_item) return;
        if (this.showing) return;
        this.showing = true;
        _GAME.utilsFB.log("ev_start_tut_relocated", 1);
        _GAME.ui.showLayer("layer_tut");
        _GAME.tutRelocated.startHandAction();
        _GAME.tutRelocated.showTextHinding();
      },
      startHandAction: function startHandAction() {
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        var positionShow = cc.v2(cc.find("Canvas/play_area/btn_relocated").x + 10, cc.find("Canvas/play_area/btn_relocated").y);
        _GAME.utils.setGlobalPositionToNode(hand, positionShow);
        var nodeContainer = cc.find("Canvas/play_area/new_item_container");
        _GAME.utils.setGlobalPositionToNode(cc.find("Canvas/layer_tut/text_motivate"), cc.v2(nodeContainer.x, nodeContainer.y + 150));
        hand.angle = 120;
        hand.runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(hand.x, hand.y + 70)), cc.moveTo(1, cc.v2(hand.x, hand.y + 40)))));
      },
      endTut: function endTut() {
        var _this2 = this;
        if (_GAME.configs.off_power_item) return;
        _GAME.utilsFB.log("ev_end_tut_relocated", 1);
        _GAME.tutRelocated.setTextToMotivate(function() {
          _GAME.ui.hideLayer("layer_tut");
          _this2.showing = false;
          _this2.isDoneTutRelocated = true;
          _GAME.data.saveData({
            isDoneTutRelocated: "1"
          });
        });
      },
      checkHideTutHand: function checkHideTutHand() {
        if (this.isDoneTutRelocated) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkShowTutHand: function checkShowTutHand() {
        if (this.isDoneTutRelocated) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        _GAME.tut.startHandAction();
      },
      showTextHinding: function showTextHinding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        false == nodeLabel.active && (nodeLabel.active = true);
        _GAME.utils.setLabelText(nodeLabel, "Too hard ? Try this !");
      },
      hideTextHiding: function hideTextHiding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        true == nodeLabel.active && (nodeLabel.active = false);
      },
      setTextToMotivate: function setTextToMotivate(callback) {
        var textMotivate = cc.find("Canvas/layer_tut/text_motivate");
        var newNodeMotivate = cc.instantiate(textMotivate);
        _GAME.utils.setLabelText(newNodeMotivate, "GOOD");
        false == newNodeMotivate.active && (newNodeMotivate.active = true);
        newNodeMotivate.parent = textMotivate.parent;
        newNodeMotivate.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 2), cc.fadeTo(.5, 255)), cc.spawn(cc.delayTime(.6), cc.sequence(cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2), cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2))), cc.spawn(cc.moveTo(.3, cc.v2(newNodeMotivate.x, newNodeMotivate.y + 100)), cc.fadeTo(.3, 0)), cc.callFunc(function() {
          newNodeMotivate.destroy();
          callback && callback();
        })));
      }
    };
    exports.tutRelocated = tutRelocated;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  tut_rolated: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfce1sUsQ5OurDg8kxMNnx/", "tut_rolated");
    "use strict";
    exports.__esModule = true;
    exports.tutRolated = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var tutRolated = {
      init: function init() {
        var _this = this;
        _GAME.login.addCallback(function(data) {
          _this.isDoneTutRolated = data.isDoneTutRolated;
        });
      },
      checkDoneTutRolated: function checkDoneTutRolated() {
        if (this.isDoneTutRolated) return true;
        return false;
      },
      startTut: function startTut() {
        if (_GAME.configs.off_power_item) return;
        if (this.showing) return;
        this.showing = true;
        _GAME.utilsFB.log("ev_start_tut_rolated", 1);
        _GAME.ui.showLayer("layer_tut");
        _GAME.tutRolated.startHandAction();
        _GAME.tutRolated.showTextHinding();
      },
      startHandAction: function startHandAction() {
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        _GAME.utils.setGlobalPositionToNode(hand, cc.find("Canvas/play_area/new_item_container"));
        _GAME.utils.setGlobalPositionToNode(cc.find("Canvas/layer_tut/text_motivate"), cc.v2(hand.x, hand.y + 150));
        hand.runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(hand.x + 50, hand.y - 50)), cc.moveTo(1, cc.v2(hand.x, hand.y)))));
      },
      endTut: function endTut() {
        var _this2 = this;
        if (_GAME.configs.off_power_item) return;
        _GAME.utilsFB.log("ev_end_tut_rolated", 1);
        _GAME.tutRolated.setTextToMotivate(function() {
          _GAME.ui.hideLayer("layer_tut");
          _this2.showing = false;
          _this2.isDoneTutRolated = true;
          _GAME.data.saveData({
            isDoneTutRolated: "1"
          });
        });
      },
      checkHideTutHand: function checkHideTutHand() {
        if (this.isDoneTutRolated) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkShowTutHand: function checkShowTutHand() {
        if (this.isDoneTutRolated) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        _GAME.tut.startHandAction();
      },
      showTextHinding: function showTextHinding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        false == nodeLabel.active && (nodeLabel.active = true);
        _GAME.utils.setLabelText(nodeLabel, "Tab here to switch block");
      },
      hideTextHiding: function hideTextHiding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        true == nodeLabel.active && (nodeLabel.active = false);
      },
      setTextToMotivate: function setTextToMotivate(callback) {
        var textMotivate = cc.find("Canvas/layer_tut/text_motivate");
        var newNodeMotivate = cc.instantiate(textMotivate);
        _GAME.utils.setLabelText(newNodeMotivate, "GOOD");
        false == newNodeMotivate.active && (newNodeMotivate.active = true);
        newNodeMotivate.parent = textMotivate.parent;
        newNodeMotivate.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 2), cc.fadeTo(.5, 255)), cc.spawn(cc.delayTime(.6), cc.sequence(cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2), cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2))), cc.spawn(cc.moveTo(.3, cc.v2(newNodeMotivate.x, newNodeMotivate.y + 100)), cc.fadeTo(.3, 0)), cc.callFunc(function() {
          newNodeMotivate.destroy();
          callback && callback();
        })));
      }
    };
    exports.tutRolated = tutRolated;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  tut_triple: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15ca0z/icdB3LZQhIBuY/zv", "tut_triple");
    "use strict";
    exports.__esModule = true;
    exports.tutTriple = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var tutTriple = {
      pointToShowTut: 300,
      init: function init() {
        var _this = this;
        _GAME.login.addCallback(function(data) {
          _this.isDoneTutTriple = data.isDoneTutTriple;
        });
      },
      checkDoneTutTriple: function checkDoneTutTriple() {
        if (this.isDoneTutTriple) return true;
        return false;
      },
      startTut: function startTut() {
        if (_GAME.configs.off_power_item) return;
        if (this.showing) return;
        _GAME.utilsFB.log("ev_start_tut_triple", 1);
        _GAME.ui.showLayer("layer_tut");
        _GAME.tutTriple.startHandAction();
        _GAME.tutTriple.showTextHinding();
        this.showing = true;
      },
      startHandAction: function startHandAction() {
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        var positionShow = cc.v2(cc.find("Canvas/play_area/btn_triple").x + 10, cc.find("Canvas/play_area/btn_triple").y);
        _GAME.utils.setGlobalPositionToNode(hand, positionShow);
        var nodeContainer = cc.find("Canvas/play_area/new_item_container");
        _GAME.utils.setGlobalPositionToNode(cc.find("Canvas/layer_tut/text_motivate"), cc.v2(nodeContainer.x, nodeContainer.y + 150));
        hand.angle = 120;
        hand.runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(hand.x, hand.y + 70)), cc.moveTo(1, cc.v2(hand.x, hand.y + 40)))));
      },
      endTut: function endTut() {
        var _this2 = this;
        if (_GAME.configs.off_power_item) return;
        _GAME.utilsFB.log("ev_end_tut_triple", 1);
        _GAME.tutTriple.setTextToMotivate(function() {
          _GAME.ui.hideLayer("layer_tut");
          _this2.showing = false;
          _this2.isDoneTutTriple = true;
          _GAME.data.saveData({
            isDoneTutTriple: "1"
          });
        });
      },
      checkHideTutHand: function checkHideTutHand() {
        if (this.isDoneTutTriple) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkShowTutHand: function checkShowTutHand() {
        if (this.isDoneTutTriple) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        _GAME.tut.startHandAction();
      },
      showTextHinding: function showTextHinding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        false == nodeLabel.active && (nodeLabel.active = true);
        _GAME.utils.setLabelText(nodeLabel, "Try X3 your score");
      },
      hideTextHiding: function hideTextHiding() {
        var nodeLabel = cc.find("Canvas/layer_tut/hinding");
        true == nodeLabel.active && (nodeLabel.active = false);
      },
      setTextToMotivate: function setTextToMotivate(callback) {
        var textMotivate = cc.find("Canvas/layer_tut/text_motivate");
        var newNodeMotivate = cc.instantiate(textMotivate);
        _GAME.utils.setLabelText(newNodeMotivate, "GOOD");
        false == newNodeMotivate.active && (newNodeMotivate.active = true);
        newNodeMotivate.parent = textMotivate.parent;
        newNodeMotivate.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 2), cc.fadeTo(.5, 255)), cc.spawn(cc.delayTime(.6), cc.sequence(cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2), cc.scaleTo(.15, 2.5), cc.scaleTo(.15, 2))), cc.spawn(cc.moveTo(.3, cc.v2(newNodeMotivate.x, newNodeMotivate.y + 100)), cc.fadeTo(.3, 0)), cc.callFunc(function() {
          newNodeMotivate.destroy();
          callback && callback();
        })));
      }
    };
    exports.tutTriple = tutTriple;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33211x+j9pPGZ3fmy92K4hC", "tut");
    "use strict";
    exports.__esModule = true;
    exports.tut = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var tut = {
      tutMapState: {
        9: 1,
        11: 1
      },
      targetCell: 10,
      init: function init() {
        var _this = this;
        _GAME.login.addCallback(function(data) {
          _this.isTutDone = data.isTutDone;
          data.isTutDone || _this.startTut();
        });
      },
      startTut: function startTut() {
        _GAME.ui.showLayer("layer_tut");
        _GAME.tut.startHandAction();
      },
      startHandAction: function startHandAction() {
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        _GAME.utils.setGlobalPositionToNode(hand, cc.find("Canvas/play_area/new_item_container"));
        var targetCell = cc.find("Canvas/play_area/map/Image_HexBlock_" + this.targetCell + "/bg");
        var targetCellGlobalPos = _GAME.utils.getGlobalPosition(targetCell);
        var targetCellPosDiff = _GAME.utils.global2LocalPosDiff(hand, targetCellGlobalPos.x, targetCellGlobalPos.y);
        targetCellPosDiff.y - 20;
        var animTime = 1;
        hand.runAction(cc.repeatForever(cc.sequence(cc.moveBy(animTime, targetCellPosDiff).easing(cc.easeOut(1)), cc.delayTime(.8), cc.moveBy(0, targetCellPosDiff.mul(-1)), cc.moveBy(.3, cc.v2(0, -10)), cc.moveBy(.15, cc.v2(0, 10)))));
        targetCell.orgOpacity && (targetCell.opacity = targetCell.orgOpacity);
        targetCell.orgOpacity = targetCell.opacity;
        targetCell.opacity *= 3;
      },
      endTut: function endTut() {
        _GAME.utilsFB.log("ev_done_tutorial");
        _GAME.ui.hideLayer("layer_tut");
        var targetCell = cc.find("Canvas/play_area/map/Image_HexBlock_" + this.targetCell + "/bg");
        targetCell.opacity = targetCell.orgOpacity;
        this.isTutDone = true;
        _GAME.data.saveData({
          isTutDone: "1"
        });
      },
      checkHideTutHand: function checkHideTutHand() {
        if (this.isTutDone) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkShowTutHand: function checkShowTutHand() {
        if (this.isTutDone) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        _GAME.tut.startHandAction();
      },
      checkDoneTut: function checkDoneTut() {
        if (this.isTutDone) return;
        this.endTut();
      }
    };
    exports.tut = tut;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  ui_challenge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "930fabPGyxIu63HqmS5yaE+", "ui_challenge");
    "use strict";
    exports.__esModule = true;
    exports.uiChallenge = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var uiChallenge = {
      challengedFriendArr: [],
      countCancelChallenge: {
        key: "",
        value: 0
      },
      init: function init() {
        _GAME.login.addLoginDataField("countSaving");
        _GAME.login.addCallback(function(data) {
          if (data) {
            var nDate = new Date();
            if (data.countSaving) {
              var dataCountCancelChallenge = data.countSaving;
              if (dataCountCancelChallenge) {
                var _key2 = dataCountCancelChallenge.key;
                var _key2$split = _key2.split("/"), dataDate = _key2$split[0], dataMonth = _key2$split[1], dataYear = _key2$split[2];
                var _nDate$toLocaleDateSt3 = nDate.toLocaleDateString().split("/"), _date2 = _nDate$toLocaleDateSt3[0], _month2 = _nDate$toLocaleDateSt3[1], _year2 = _nDate$toLocaleDateSt3[2];
                if (dataYear == _year2) if (dataMonth == _month2) if (dataDate == _date2) {
                  _GAME.uiChallenge.countCancelChallenge.key = _key2;
                  _GAME.uiChallenge.countCancelChallenge.value = dataCountCancelChallenge.value;
                } else {
                  _GAME.uiChallenge.countCancelChallenge.key = _date2 + "/" + _month2 + "/" + _year2;
                  _GAME.uiChallenge.countCancelChallenge.value = 0;
                } else {
                  _GAME.uiChallenge.countCancelChallenge.key = _date2 + "/" + _month2 + "/" + _year2;
                  _GAME.uiChallenge.countCancelChallenge.value = 0;
                } else {
                  _GAME.uiChallenge.countCancelChallenge.key = _date2 + "/" + _month2 + "/" + _year2;
                  _GAME.uiChallenge.countCancelChallenge.value = 0;
                }
              } else {
                var _nDate$toLocaleDateSt2 = nDate.toLocaleDateString().split("/"), _date = _nDate$toLocaleDateSt2[0], _month = _nDate$toLocaleDateSt2[1], _year = _nDate$toLocaleDateSt2[2];
                var _key = _date + "/" + _month + "/" + _year;
                _GAME.uiChallenge.countCancelChallenge.key = _key;
                _GAME.uiChallenge.countCancelChallenge.value = 0;
                _GAME.data.saveData({
                  countSaving: _GAME.uiChallenge.countCancelChallenge
                });
              }
            } else {
              var _nDate$toLocaleDateSt = nDate.toLocaleDateString().split("/"), date = _nDate$toLocaleDateSt[0], month = _nDate$toLocaleDateSt[1], year = _nDate$toLocaleDateSt[2];
              var key = date + "/" + month + "/" + year;
              _GAME.uiChallenge.countCancelChallenge.key = key;
              _GAME.uiChallenge.countCancelChallenge.value = 0;
              _GAME.data.saveData({
                countSaving: _GAME.uiChallenge.countCancelChallenge
              });
            }
          }
        });
      },
      setDataChallenge: function setDataChallenge(callback) {
        var you = cc.find("Canvas/layer_challenge/content/bg_left");
        var friend = cc.find("Canvas/layer_challenge/content/bg_right");
        var myScore = cc.find("Canvas/layer_challenge/content/lb_score");
        _GAME.utils.setLabelText(myScore, _GAME.user.score + "!", true);
        _GAME.uiChallenge.setDirectorData(you, _GAME.user, true);
        this.selectedFriend = _GAME.friend.getRandomFriendInList();
        this.selectedFriend && _GAME.uiChallenge.setDirectorData(friend, this.selectedFriend, false);
        callback && callback();
      },
      setDirectorData: function setDirectorData(node, data, isCrown) {
        if (node && data) {
          var avata = node.getChildByName("avata");
          var score = node.getChildByName("lb_point");
          var name = node.getChildByName("lb_name");
          var crown = node.getChildByName("crown");
          console.log("data.name   ", data.name, "===> data.score  ", data.score);
          _GAME.utils.setLabelTextPrice(score, data.score);
          _GAME.utils.setLabelText(name, data.name);
          crown.active = isCrown;
          cc.assetManager.loadRemote(data.photo, function(err, texture) {
            if (!err) {
              var ava = new cc.SpriteFrame(texture);
              avata.getComponent(cc.Sprite).spriteFrame = ava;
              avata.width = 198;
              avata.height = 200;
            }
          });
        }
      },
      onClickCancel: function onClickCancel() {
        _GAME.uiChallenge.closeChallenge(function() {
          _GAME.uiChallenge.saveCountCancel();
          _GAME.uiGameOver.openPanelGameOver(true);
        });
      },
      saveCountCancel: function saveCountCancel() {
        var nDate = new Date();
        var _nDate$toLocaleDateSt4 = nDate.toLocaleDateString().split("/"), date = _nDate$toLocaleDateSt4[0], month = _nDate$toLocaleDateSt4[1], year = _nDate$toLocaleDateSt4[2];
        var key = date + "/" + month + "/" + year;
        if (_GAME.uiChallenge.countCancelChallenge && key == _GAME.uiChallenge.countCancelChallenge.key) {
          _GAME.uiChallenge.countCancelChallenge.value++;
          _GAME.data.saveData({
            countSaving: _GAME.uiChallenge.countCancelChallenge
          });
        }
      },
      resetCountCancel: function resetCountCancel() {
        var nDate = new Date();
        var _nDate$toLocaleDateSt5 = nDate.toLocaleDateString().split("/"), date = _nDate$toLocaleDateSt5[0], month = _nDate$toLocaleDateSt5[1], year = _nDate$toLocaleDateSt5[2];
        var key = date + "/" + month + "/" + year;
        if (_GAME.uiChallenge.countCancelChallenge && key == _GAME.uiChallenge.countCancelChallenge.key) {
          _GAME.uiChallenge.countCancelChallenge.value = 0;
          _GAME.data.saveData({
            countSaving: _GAME.uiChallenge.countCancelChallenge
          });
        }
      },
      runActionShowItem: function runActionShowItem() {
        var mainContent = cc.find("Canvas/Chalenge_scene/content/main_content");
        var textGreate = cc.find("Canvas/layer_challenge/content/header/lb_top");
        _GAME.fx.showTextGreate(textGreate);
        var start1 = cc.find("Canvas/layer_challenge/content/header/star_left");
        var start2 = cc.find("Canvas/layer_challenge/content/header/star_center");
        var start3 = cc.find("Canvas/layer_challenge/content/header/star_right");
        _GAME.fx.animStar([ start1, start2, start3 ]);
        var youAvata = cc.find("Canvas/layer_challenge/content/bg_left/avata");
        var friendAvata = cc.find("Canvas/layer_challenge/content/bg_right/avata");
        _GAME.fx.effectForInfo(youAvata, -100);
        _GAME.fx.effectForInfo(friendAvata, 100);
        var btnPlay = cc.find("Canvas/layer_challenge/content/btn_c_play");
        var btnPlayAnother = cc.find("Canvas/layer_challenge/content/btn_c_play_another");
        var btnCancel = cc.find("Canvas/layer_challenge/content/btn_c_cancel");
        _GAME.fx.effectForButton(btnPlay, 1);
        _GAME.fx.effectForButton(btnPlayAnother, 1.5);
        _GAME.fx.effectForButton(btnCancel, 2.75);
      }
    };
    exports.uiChallenge = uiChallenge;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  ui_power_item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df16bHJ+5RPKr+2U0ZjM8rn", "ui_power_item");
    "use strict";
    exports.__esModule = true;
    exports.uiPowerItem = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var uiPowerItem = {
      triplePoint: false,
      totalBom: 0,
      totalRelocated: 0,
      totalTriple: 0,
      init: function init() {
        _GAME.login.addLoginDataField("TotalBom");
        _GAME.login.addLoginDataField("TotalRelocated");
        _GAME.login.addLoginDataField("TotalTriple");
        this.bgTotalBom = cc.find("Canvas/play_area/btn_bomb/bg_total_bom");
        this.bgTotalRotate = cc.find("Canvas/play_area/btn_relocated/bg_total_relocated");
        this.bgTotalTriple = cc.find("Canvas/play_area/btn_triple/bg_total_triple");
        _GAME.login.addCallback(function(data) {
          _GAME.uiPowerItem.totalBom = _GAME.uiPowerItem.totalBom && 0 != _GAME.uiPowerItem.totalBom ? _GAME.uiPowerItem.totalBom : 0;
          _GAME.uiPowerItem.totalRelocated = _GAME.uiPowerItem.totalRelocated && 0 != _GAME.uiPowerItem.totalRelocated ? _GAME.uiPowerItem.totalRelocated : 0;
          _GAME.uiPowerItem.totalTriple = _GAME.uiPowerItem.totalTriple && 0 != _GAME.uiPowerItem.totalTriple ? _GAME.uiPowerItem.totalTriple : 0;
          if (data.isNewUser) {
            _GAME.uiPowerItem.totalBom = 2;
            _GAME.uiPowerItem.totalRelocated = 2;
            _GAME.uiPowerItem.totalTriple = 2;
          } else {
            _GAME.uiPowerItem.totalBom = data.TotalBom ? data.TotalBom : 0;
            _GAME.uiPowerItem.totalRelocated = data.TotalRelocated ? data.TotalRelocated : 0;
            _GAME.uiPowerItem.totalTriple = data.TotalTriple ? data.TotalTriple : 0;
          }
          _GAME.data.saveData({
            TotalBom: _GAME.uiPowerItem.totalBom
          });
          _GAME.data.saveData({
            TotalRelocated: _GAME.uiPowerItem.totalRelocated
          });
          _GAME.data.saveData({
            TotalTriple: _GAME.uiPowerItem.totalTriple
          });
          _GAME.uiPowerItem.updatePowerItem();
        });
        this.btnBom = cc.find("Canvas/play_area/btn_bomb");
        this.btnRotate = cc.find("Canvas/play_area/btn_relocated");
        this.btnTriple = cc.find("Canvas/play_area/btn_triple");
        _GAME.utils.addButtonComp(this.btnBom, function() {
          return _GAME.uiPowerItem.onClickBom();
        });
        _GAME.utils.addButtonComp(this.btnRotate, function() {
          return _GAME.uiPowerItem.onClickRelocated();
        });
        _GAME.utils.addButtonComp(this.btnTriple, function() {
          return _GAME.uiPowerItem.onClickTriple();
        });
        if (_GAME.configs.off_power_item) {
          this.btnBom.active = false;
          this.btnRotate.active = false;
          this.btnTriple.active = false;
        }
      },
      updatePowerItem: function updatePowerItem() {
        if (this.bgTotalBom) {
          this.bgTotalBom.children.map(function(item) {
            item.active = false;
          });
          if (_GAME.uiPowerItem.totalBom && _GAME.uiPowerItem.totalBom > 0) {
            this.bgTotalBom.active = true;
            this.bgTotalBom.getChildByName("total").active = true;
            _GAME.utils.setLabelText(this.bgTotalBom.getChildByName("total"), _GAME.uiPowerItem.totalBom);
          } else {
            this.bgTotalBom.active = true;
            this.bgTotalBom.getChildByName("video").active = true;
          }
        }
        if (this.bgTotalRotate) {
          this.bgTotalRotate.children.map(function(item) {
            item.active = false;
          });
          if (_GAME.uiPowerItem.totalRelocated && _GAME.uiPowerItem.totalRelocated > 0) {
            this.bgTotalRotate.active = true;
            this.bgTotalRotate.getChildByName("total").active = true;
            _GAME.utils.setLabelText(this.bgTotalRotate.getChildByName("total"), _GAME.uiPowerItem.totalRelocated);
          } else {
            this.bgTotalRotate.active = true;
            this.bgTotalRotate.getChildByName("video").active = true;
          }
        }
        if (this.bgTotalTriple) {
          this.bgTotalTriple.children.map(function(item) {
            item.active = false;
          });
          if (_GAME.uiPowerItem.totalTriple && _GAME.uiPowerItem.totalTriple > 0) {
            this.bgTotalTriple.active = true;
            this.bgTotalTriple.getChildByName("total").active = true;
            _GAME.utils.setLabelText(this.bgTotalTriple.getChildByName("total"), _GAME.uiPowerItem.totalTriple);
          } else if (_GAME.game.triplePoint) this.bgTotalTriple.active = false; else {
            this.bgTotalTriple.active = true;
            this.bgTotalTriple.getChildByName("video").active = true;
          }
        }
      },
      onClickBom: function onClickBom() {
        _GAME.ui.showLayer("layer_anim");
        _GAME.utilsFB.log("power_item_bom_click", 1);
        if (_GAME.uiPowerItem.totalBom && _GAME.uiPowerItem.totalBom > 0) {
          _GAME.utilsFB.log("power_item_bom_using_success", 1);
          _GAME.game.actionPowerItemBom(function() {
            return _GAME.uiPowerItem.updatePowerItem();
          });
        } else {
          _GAME.utilsFB.log("power_item_bom_open_ads", 1);
          if (_GAME.configs.off_inter_ads) {
            _GAME.utilsFB.log("power_item_bom_fail", 1);
            _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
              return _GAME.uiPowerItem.addItemBom();
            });
          } else _GAME.video.showVideo(function() {
            _GAME.utilsFB.log("power_item_bom_watch_video_success", 1);
            _GAME.uiPowerItem.addItemBom();
          }, function(result, isFormal) {
            if (isFormal) {
              _GAME.utilsFB.log("power_item_bom_fail", 1);
              _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
                return _GAME.ui.hideLayer("layer_anim");
              });
            } else {
              _GAME.utilsFB.log("power_item_bom_quit", 1);
              _GAME.ui.showAlert("BOM FAil : " + result.message, function() {
                return _GAME.uiPowerItem.addItemBom();
              });
            }
          });
        }
      },
      addItemBom: function addItemBom() {
        _GAME.uiPowerItem.totalBom += 1;
        _GAME.data.saveData({
          TotalBom: _GAME.uiPowerItem.totalBom
        });
        _GAME.ui.showLayer("layer_anim");
        _GAME.game.actionPowerItemBom();
        _GAME.uiPowerItem.updatePowerItem();
        _GAME.uiPowerItem.flyingMove(cc.find("Canvas/play_area/btn_bomb"), function() {}, "plus");
      },
      onClickRelocated: function onClickRelocated() {
        _GAME.ui.showLayer("layer_anim");
        _GAME.utilsFB.log("power_item_relocated_click", 1);
        if (_GAME.uiPowerItem.totalRelocated && _GAME.uiPowerItem.totalRelocated > 0) {
          _GAME.utilsFB.log("power_item_relocated_using_success", 1);
          _GAME.game.actionPowerItemRelocated(function() {
            return _GAME.uiPowerItem.updatePowerItem();
          });
        } else {
          _GAME.utilsFB.log("power_item_relocated_open_ads", 1);
          if (_GAME.configs.off_inter_ads) {
            _GAME.utilsFB.log("power_item_relocated_fail", 1);
            _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
              return _GAME.uiPowerItem.addItemRelocated();
            });
          } else _GAME.video.showVideo(function() {
            _GAME.utilsFB.log("power_item_relocated_watch_video_success", 1);
            _GAME.uiPowerItem.addItemRelocated();
          }, function(result, isFormal) {
            if (isFormal) {
              _GAME.utilsFB.log("power_item_relocated_fail", 1);
              _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
                return _GAME.ui.hideLayer("layer_anim");
              });
            } else {
              _GAME.utilsFB.log("power_item_relocated_quit", 1);
              _GAME.ui.showAlert("RELOCATED FAil : " + result.message, function() {
                return _GAME.uiPowerItem.addItemRelocated();
              });
            }
          });
        }
      },
      addItemRelocated: function addItemRelocated() {
        _GAME.uiPowerItem.totalRelocated += 1;
        _GAME.data.saveData({
          TotalRelocated: _GAME.uiPowerItem.totalRelocated
        });
        _GAME.ui.showLayer("layer_anim");
        _GAME.uiPowerItem.updatePowerItem();
        _GAME.game.actionPowerItemRelocated();
        _GAME.uiPowerItem.flyingMove(cc.find("Canvas/play_area/btn_relocated"), function() {}, "plus");
      },
      onClickTriple: function onClickTriple() {
        if (_GAME.game.triplePoint) return;
        _GAME.ui.showLayer("layer_anim");
        _GAME.utilsFB.log("power_item_triple_click", 1);
        if (_GAME.uiPowerItem.totalTriple && _GAME.uiPowerItem.totalTriple > 0) {
          _GAME.utilsFB.log("power_item_triple_using_success", 1);
          _GAME.game.actionPowerItemTriple();
        } else {
          _GAME.utilsFB.log("power_item_triple_open_ads", 1);
          if (_GAME.configs.off_inter_ads) {
            _GAME.utilsFB.log("power_item_triple_fail", 1);
            _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
              return _GAME.uiPowerItem.addItemTriple();
            });
          } else _GAME.video.showVideo(function() {
            _GAME.utilsFB.log("power_item_triple_watch_video_success", 1);
            _GAME.uiPowerItem.addItemTriple();
          }, function(result, isFormal) {
            if (isFormal) {
              _GAME.utilsFB.log("power_item_triple_fail", 1);
              _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
                return _GAME.ui.hideLayer("layer_anim");
              });
            } else {
              _GAME.utilsFB.log("power_item_triple_quit", 1);
              _GAME.ui.showAlert("TRIPLE FAil : " + result.message, function() {
                return _GAME.uiPowerItem.addItemTriple();
              });
            }
          });
        }
      },
      addItemTriple: function addItemTriple() {
        _GAME.uiPowerItem.totalTriple += 1;
        _GAME.data.saveData({
          TotalTriple: _GAME.uiPowerItem.totalTriple
        });
        _GAME.uiPowerItem.updatePowerItem();
        _GAME.uiPowerItem.flyingMove(cc.find("Canvas/play_area/btn_triple"), function() {}, "plus");
        _GAME.utils.setTimeout(function() {
          _GAME.game.actionPowerItemTriple();
        }, 1e3);
      },
      validateBoomSuccess: function validateBoomSuccess() {
        _GAME.uiPowerItem.totalBom--;
        _GAME.data.saveData({
          TotalBom: _GAME.uiPowerItem.totalBom
        });
        _GAME.uiPowerItem.updatePowerItem();
      },
      validateTripleSuccess: function validateTripleSuccess() {
        _GAME.uiPowerItem.totalTriple--;
        _GAME.data.saveData({
          TotalTriple: _GAME.uiPowerItem.totalTriple
        });
        _GAME.uiPowerItem.updatePowerItem();
      },
      validateRelocatedSuccess: function validateRelocatedSuccess() {
        _GAME.uiPowerItem.totalRelocated--;
        _GAME.data.saveData({
          TotalRelocated: _GAME.uiPowerItem.totalRelocated
        });
        _GAME.uiPowerItem.updatePowerItem();
      },
      flyingMove: function flyingMove(nodeParent, callback, key) {
        var nodeClone = cc.find("Canvas/play_area/clone_fly");
        if (nodeClone) {
          var clone = cc.instantiate(nodeClone);
          nodeParent && nodeParent.addChild(clone);
          "plus" == key ? _GAME.utils.setLabelText(clone, "+1") : "minus" == key && _GAME.utils.setLabelText(clone, "-1");
          clone.scale = 2;
          clone.x = 0;
          clone.y = 0;
          false == clone.active && (clone.active = true);
          _GAME.fx.nodeMoveAndHidden(clone, callback);
        }
      }
    };
    exports.uiPowerItem = uiPowerItem;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  ui: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ba12rmZ0ZN3J73uy5JMvr9", "ui");
    "use strict";
    exports.__esModule = true;
    exports.ui = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var ui = {
      hideNagTimer: null,
      hideLoadingRealServerTimer: null,
      init: function init() {
        _GAME.ui.initButtonHandler();
      },
      initButtonHandler: function initButtonHandler() {
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/header/btn_brag"), function(e) {
          _GAME.utilsFB.log("ev_click_button_brag_top");
          _GAME.social.share(_GAME.user.score);
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/content_bg/bottom_container/btn_share"), function(e) {
          _GAME.utilsFB.log("ev_click_button_brag_bottom");
          _GAME.social.share(_GAME.user.score);
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/content_bg/bottom_container/btn_replay"), function(e) {
          _GAME.utilsFB.log("ev_click_button_replay_leaderboard");
          _GAME.ui.hideLayer("layer_leaderboard");
          _GAME.game.replay();
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/content_bg/bottom_container/btn_invite"), function(e) {
          _GAME.utilsFB.log("ev_click_button_invite_leaderboard");
          _GAME.social.invite(function(contextId) {
            _GAME.social.playerIdSendMessage = contextId;
          });
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/tabs/friends"), function(e) {
          return _GAME.leaderboard.onClickTab("friends");
        }, false);
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/content_bg/middle_container/leaderboard/tabs/global"), function(e) {
          return _GAME.leaderboard.onClickTab("global");
        }, false);
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_pause/btn_restart"), function(e) {
          _GAME.utilsFB.log("ev_click_button_replay_pause");
          _GAME.interAd.showInterAds("Canvas/layer_pause/btn_restart", function() {
            _GAME.game.triplePoint = false;
            _GAME.fx.effectTriple(false);
            _GAME.ui.hideLayer("layer_pause");
            _GAME.game.replay();
          });
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_pause/btn_continue"), function(e) {
          _GAME.utilsFB.log("ev_click_button_continue_pause");
          _GAME.ui.hideLayer("layer_pause");
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_pause/btn_localize"), function() {
          console.log("Clickk Localize");
          _GAME.localize.onClickChangeLocalize();
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/play_area/btn_pause"), function(e) {
          if (!_GAME.tut.isTutDone) return;
          if (_GAME.tutTriple.showing) return;
          if (_GAME.tutBom.showing) return;
          if (_GAME.tutRolated.showing) return;
          if (_GAME.tutRelocated.showing) return;
          _GAME.utilsFB.log("ev_click_button_pause");
          _GAME.ui.showLayer("layer_pause");
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_alert/btn_ok"), function(e) {
          _GAME.ui.hideLayer("layer_alert");
          if (_GAME.ui.alertCloseCallback) {
            _GAME.ui.alertCloseCallback();
            _GAME.utils.setTimeout(function() {
              _GAME.ui.alertCloseCallback = null;
            }, 1e3);
          }
        });
        _GAME.fx.bubbleForever(cc.find("Canvas/layer_result/btn_brag"));
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_result/btn_replay"), function() {
          _GAME.utilsFB.log("ev_click_button_replay_result");
          _GAME.ui.hideLayer("layer_result");
          _GAME.game.replay();
          _GAME.interAd.checkToShowReplayAd();
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_result/btn_brag"), function() {
          _GAME.utilsFB.log("ev_click_button_brag_result");
          _GAME.social.share(_GAME.user.score);
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_challenge/content/btn_c_play"), function() {
          _GAME.utilsFB.log("ev_click_button_context");
          _GAME.social.createContext(_GAME.uiChallenge.selectedFriend.id, function() {
            _GAME.social.playerIdSendMessage = _GAME.uiChallenge.selectedFriend.id;
            _GAME.ui.hideLayer("layer_challenge");
            _GAME.uiChallenge.resetCountCancel();
            _GAME.game.replay();
          });
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_challenge/content/btn_c_play_another"), function() {
          _GAME.utilsFB.log("ev_click_button_invite_another_friend");
          _GAME.social.invite(function(contextId) {
            _GAME.social.playerIdSendMessage = contextId;
            _GAME.ui.hideLayer("layer_challenge");
            _GAME.game.replay();
            _GAME.uiChallenge.resetCountCancel();
            _log(" onBtnPlayWithAnother >> _GAME.challenge.resetChallengCancelTimeArr(); ");
          });
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_challenge/content/btn_c_cancel"), function() {
          _GAME.utilsFB.log("ev_click_button_cancel_comback_result");
          _GAME.ui.hideLayer("layer_challenge");
          _GAME.uiChallenge.saveCountCancel();
          _GAME.uiChallenge.countCancelChallenge++;
          _GAME.utils.setTimeout(function() {
            _GAME.ui.showLayer("layer_result");
          }, 200);
        });
        var btnSaveMe = cc.find("Canvas/layer_video_continue/btn_save_me");
        _GAME.fx.bubbleForever(btnSaveMe);
        _GAME.utils.addButtonComp(btnSaveMe, function() {
          _GAME.ui.hideLayer("layer_video_continue");
          _GAME.utilsFB.log("ev_click_video_continue");
          1 == _GAME.game.videoContinueLeft && _GAME.utilsFB.log("ev_click_video_continue_3rd");
          _GAME.configs.off_inter_ads ? _GAME.ui.showAlert("Oops!\n\nSomething went wrong", function() {
            return _GAME.game.onVideoContinueSuccess();
          }) : _GAME.video.showVideo(_GAME.game.onVideoContinueSuccess, _GAME.game.onVideoContinueFail);
        });
        _GAME.utils.addButtonComp(cc.find("Canvas/layer_video_continue/btn_cancel"), function() {
          _GAME.utilsFB.log("ev_cancel_video_continue");
          _GAME.ui.hideLayer("layer_video_continue");
          _GAME.game.realGameOver();
        });
      },
      showLayer: function showLayer(layerName) {
        var layerNode = cc.find("Canvas/" + layerName);
        layerNode && (layerNode.active = true);
      },
      hideLayer: function hideLayer(layerName) {
        var layerNode = cc.find("Canvas/" + layerName);
        layerNode && (layerNode.active = false);
      },
      showAlert: function showAlert(content, closeCallback) {
        _GAME.ui.showLayer("layer_alert");
        _GAME.utils.setLabelText(cc.find("Canvas/layer_alert/label_message"), content);
        _GAME.ui.alertCloseCallback = closeCallback;
      },
      showLoading: function showLoading() {
        _GAME.ui.showLayer("layer_loading");
        _GAME.ui.hideLoadingTimer && clearTimeout(_GAME.ui.hideLoadingTimer);
        _GAME.ui.hideLoadingTimer = setTimeout(function() {
          return _GAME.ui.hideLoading();
        }, 1e4);
      },
      hideLoading: function hideLoading() {
        _GAME.ui.hideLayer("layer_loading");
        _GAME.ui.hideLoadingTimer && clearTimeout(_GAME.ui.hideLoadingTimer);
      },
      showNagScreen: function showNagScreen(compName) {
        cc.find("Canvas/nag_screen").active = true;
      },
      hideNagScreen: function hideNagScreen(compName) {
        cc.find("Canvas/nag_screen").active = false;
      },
      disableButton: function disableButton(but) {
        but.getComponent(cc.Button) || _log("KHoong ton tai button component");
        but.getComponent(cc.Button) && (but.getComponent(cc.Button).enabled = false);
        but.opacity = parseInt(76.5);
      },
      enableButton: function enableButton(but) {
        but.getComponent(cc.Button) && (but.getComponent(cc.Button).enabled = true);
        but.opacity = 255;
      },
      showCompliment: function showCompliment(text) {
        var container = cc.find("Canvas/play_area/labels/compliment");
        var label = container.getChildByName("label");
        _GAME.utils.setLabelText(label, text);
        container.stopAllActions();
        container.scale = 0;
        container.runAction(cc.sequence(cc.scaleTo(.2, 1.15).easing(cc.easeOut(3)), cc.scaleTo(.1, 1).easing(cc.easeIn(1)), cc.delayTime(2), cc.scaleTo(.1, 1.15).easing(cc.easeOut(1)), cc.scaleTo(.2, 0).easing(cc.easeIn(3))));
      },
      updateScore: function updateScore(score) {
        var playAreaLabelScore = cc.find("Canvas/play_area/labels/label_score");
        var userScoreResult = cc.find("Canvas/layer_result/score");
        playAreaLabelScore.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.callFunc(function() {
          return _GAME.utils.setLabelText(playAreaLabelScore, _GAME.utils.localizeNumber(score) + "");
        }), cc.scaleTo(.17, 1)));
        _GAME.utils.setLabelText(userScoreResult, _GAME.utils.localizeNumber(score) + "");
        _GAME.utils.setLabelText(cc.find("Canvas/layer_leaderboard/label_your_score"), _GAME.utils.localizeNumber(score) + "");
      },
      updateHighScore: function updateHighScore() {
        var playAreaLabelBestScore = cc.find("Canvas/play_area/labels/label_best_score");
        var userBestScoreResultt = cc.find("Canvas/layer_result/best_score");
        playAreaLabelBestScore.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.callFunc(function() {
          return _GAME.utils.setLabelText(playAreaLabelBestScore, _GAME.utils.localizeNumber(_GAME.user.bestScore) + "");
        }), cc.scaleTo(.17, 1)));
        _GAME.utils.setLabelText(userBestScoreResultt, _GAME.utils.localizeNumber(_GAME.user.bestScore) + "");
      }
    };
    exports.ui = ui;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  user: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3916Cr0xZNR4wdZkgex0oE", "user");
    "use strict";
    exports.__esModule = true;
    exports.user = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var user = {
      id: 0,
      name: 0,
      score: 0,
      bestScore: 0,
      init: function init() {
        if (window.FBInstant) {
          _GAME.user.id = FBInstant.player.getID();
          _GAME.user.name = FBInstant.player.getName();
          _GAME.user.photo = FBInstant.player.getPhoto();
          window.canPromo = ("IOS" == FBInstant.getPlatform(), false);
        } else {
          _GAME.user.id = "xxxxaa111";
          _GAME.user.name = "Tkgiet";
          _GAME.user.photo = "";
        }
      },
      initNewUser: function initNewUser(data) {
        Object.assign(data, {
          LoginTime: 0,
          PlayerExp: 0,
          PlayerLevel: 0
        });
        _GAME.data.saveData(data);
      }
    };
    exports.user = user;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  utils_facebook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b138caZD9P56PDxVG2UzIA", "utils_facebook");
    "use strict";
    exports.__esModule = true;
    exports.utilsFB = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var utilsFB = {
      init: function init() {
        _GAME.utilsFB.startLogSessionTime();
        if (window.FBInstant) {
          FBInstant.onPause(function() {});
          window.fbSupportedAPIs = FBInstant.getSupportedAPIs();
        }
      },
      log: function log(eventName, quantity, dataObj) {
        void 0 === quantity && (quantity = 1);
        if (!window.FBInstant) return;
        FBInstant.logEvent(eventName, quantity, dataObj);
      },
      setSessionId: function setSessionId(playerId) {
        window.FBInstant && FBInstant.setSessionData({
          player_id: playerId
        });
      },
      isSupportedAPI: function isSupportedAPI(name) {
        if (!window.FBInstant) return false;
        var arr = FBInstant.getSupportedAPIs();
        return -1 != arr.indexOf(name);
      },
      startLogSessionTime: function startLogSessionTime() {
        var logEventTimePassedTotal = function logEventTimePassedTotal(time) {
          _GAME.utilsFB.log("ev_session_time_total", 1, {
            timePassed: time
          });
        };
        var logEventTimePassed5 = function logEventTimePassed5(time) {
          _GAME.utilsFB.log("ev_session_time_5", 1, {
            timePassed: time
          });
        };
        var logEventTimePassed10 = function logEventTimePassed10(time) {
          _GAME.utilsFB.log("ev_session_time_10", 1, {
            timePassed: time
          });
        };
        var logEventTimePassed15 = function logEventTimePassed15(time) {
          _GAME.utilsFB.log("ev_session_time_15", 1, {
            timePassed: time
          });
        };
        var logEventTimePassed20 = function logEventTimePassed20(time) {
          _GAME.utilsFB.log("ev_session_time_20", 1, {
            timePassed: time
          });
        };
        var logEventTimePassed25 = function logEventTimePassed25(time) {
          _GAME.utilsFB.log("ev_session_time_25", 1, {
            timePassed: time
          });
        };
        var logEventTimePassed30 = function logEventTimePassed30(time) {
          _GAME.utilsFB.log("ev_session_time_30", 1, {
            timePassed: time
          });
        };
        logEventTimePassedTotal(0);
        logEventTimePassed5(0);
        logEventTimePassed10(0);
        logEventTimePassed15(0);
        logEventTimePassed20(0);
        logEventTimePassed25(0);
        logEventTimePassed30(0);
        var passedTime = 0;
        var passedTime5 = 0;
        var passedTime10 = 0;
        var passedTime15 = 0;
        var passedTime20 = 0;
        var passedTime25 = 0;
        var passedTime30 = 0;
        setInterval(function() {
          passedTime += 30;
          logEventTimePassedTotal(passedTime);
        }, 3e4);
        setTimeout(function() {
          passedTime5 += 5;
          logEventTimePassed5(passedTime5);
        }, 5e3);
        setTimeout(function() {
          passedTime10 += 10;
          logEventTimePassed10(passedTime10);
        }, 1e4);
        setTimeout(function() {
          passedTime15 += 15;
          logEventTimePassed15(passedTime15);
        }, 15e3);
        setTimeout(function() {
          passedTime20 += 20;
          logEventTimePassed20(passedTime20);
        }, 2e4);
        setTimeout(function() {
          passedTime25 += 25;
          logEventTimePassed25(passedTime25);
        }, 25e3);
        setTimeout(function() {
          passedTime30 += 30;
          logEventTimePassed30(passedTime30);
        }, 3e4);
      }
    };
    exports.utilsFB = utilsFB;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  utils_instant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e565NOhCJBaLiVqI5Gq/x3", "utils_instant");
    "use strict";
    window._NO_CONSOLE_LOG = true;
    window._soundVolume = 1;
    window._isANDROID = cc.sys.os == cc.sys.OS_ANDROID;
    window._isIOS = cc.sys.os == cc.sys.OS_IOS;
    window._max = Math.max;
    window._min = Math.min;
    window._round = Math.round;
    window._floor = Math.floor;
    window._ceil = Math.ceil;
    window._abs = Math.abs;
    window._random = Math.random;
    window._sqrt = Math.sqrt;
    window._atan2 = Math.atan2;
    window._PI = Math.PI;
    window._removeArrItem = function(Arr, item) {
      var index = Arr.indexOf(item);
      if (-1 == index) return;
      Arr.splice(index, 1);
      return true;
    };
    window._time = function() {
      return new Date().getTime();
    };
    window._isString = function(x) {
      return "string" === typeof x;
    };
    window._isFunction = function(functionToCheck) {
      return functionToCheck && "[object Function]" === {}.toString.call(functionToCheck);
    };
    window._log = function() {
      if (!window._NO_CONSOLE_LOG) try {
        var _console;
        (_console = console).log.apply(_console, arguments);
      } catch (e) {}
    };
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6af40wv8gxJMqHDcnTCm7qO", "utils");
    "use strict";
    exports.__esModule = true;
    exports.utils = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          it && (o = it);
          var i = 0;
          return function() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var uuidIndex = 1e5;
    var utils = {
      textureCaches: {},
      init: function init() {
        _GAME.utils.canvasNode = cc.find("Canvas");
      },
      setTimeout: function setTimeout(callback, timeInMillisecond) {
        void 0 === timeInMillisecond && (timeInMillisecond = 0);
        var target = {
          _id: uuidIndex++,
          __instanceId: uuidIndex
        };
        target.callback = function() {
          callback(target);
        };
        cc.director.getScheduler().schedule(target.callback, target, timeInMillisecond / 1e3, 0, 0, false);
        return target;
      },
      clearTimeout: function clearTimeout(target) {
        if (!target || !target._id || !target.callback) return;
        cc.director.getScheduler().unschedule(target.callback, target);
      },
      addButtonComp: function addButtonComp(node, handlerFunc, isBubble, playSound) {
        void 0 === isBubble && (isBubble = true);
        void 0 === playSound && (playSound = true);
        setTimeout(function() {
          node.getComponent("free_button_comp") || node.addComponent("free_button_comp");
          var butComp = node.addComponent(cc.Button);
          butComp.transition = isBubble ? cc.Button.Transition.SCALE : null;
          var eventHandler = new cc.Component.EventHandler();
          eventHandler.target = node;
          eventHandler.component = "free_button_comp";
          eventHandler.handler = "freeHandler";
          butComp.clickEvents.push(eventHandler);
          node.freeButtonHandlerFunc = function() {
            handlerFunc();
            _GAME.audio.playSoundClickButton();
          };
        });
      },
      getNodePath: function getNodePath(node) {
        var pathArr = [ node.name ];
        var parent = node.parent;
        var safeCount = 0;
        while (parent && safeCount++ < 50) {
          if (!parent.parent) break;
          pathArr.push(parent.name);
          parent = parent.parent;
        }
        return pathArr.reverse().join("/");
      },
      getChildByPath: function getChildByPath(node, path) {
        try {
          var result = node;
          path.split("/").map(function(childName) {
            result = result.getChildByName(childName);
          });
          return result;
        } catch (e) {
          console.warn(" Error calling getChildByPath(" + path + ") : " + e.message + " ");
          return null;
        }
      },
      getComponentName: function getComponentName(mixedName) {
        return mixedName.split("<")[1].replace(">", "");
      },
      setOrgPos: function setOrgPos(node) {
        if (!node) return;
        node.orgPos || (node.orgPos = node.getPosition());
        node.setPosition(node.orgPos);
      },
      getGlobalPosition: function getGlobalPosition(node) {
        var parent = node.parent, x = node.x, y = node.y, safeCount = 0;
        parent || _log(" parent=null // node = " + node + " ");
        while (parent && "Canvas" != parent.name && safeCount++ < 100) {
          x = x * parent.scaleX + parent.x;
          y = y * parent.scaleY + parent.y;
          parent = parent.parent;
        }
        return cc.v2(x, y);
      },
      global2LocalPosDiff: function global2LocalPosDiff(node, gPosX, gPosY) {
        var parent = node.parent, parentArr = [], safeCount = 0;
        while ("Canvas" != parent.name && safeCount++ < 100) {
          parentArr.push(parent);
          parent = parent.parent;
        }
        var x = gPosX, y = gPosY;
        parentArr.reverse().map(function(parent) {
          x = (x - parent.x) / parent.scaleX;
          y = (y - parent.y) / parent.scaleY;
        });
        return cc.v2(x - node.x, y - node.y);
      },
      setGlobalPositionToNode: function setGlobalPositionToNode(sourceNode, targetNode) {
        var gPos = _GAME.utils.getGlobalPosition(targetNode);
        var posDiff = _GAME.utils.global2LocalPosDiff(sourceNode, gPos.x, gPos.y);
        sourceNode.x += posDiff.x;
        sourceNode.y += posDiff.y;
        return gPos;
      },
      randomArrItem: function randomArrItem(Arr, removeItem) {
        void 0 === removeItem && (removeItem = false);
        var iRandom = _floor(_random() * Arr.length);
        return removeItem ? Arr.splice(iRandom, 1)[0] : Arr[iRandom];
      },
      randomObjectProp: function randomObjectProp(obj, removeItem) {
        void 0 === removeItem && (removeItem = false);
        var arr = Array.from(Object.keys(obj)), prop = _GAME.utils.randomArrItem(arr);
        var val = obj[prop];
        removeItem && delete obj[prop];
        return val;
      },
      getRandomInt: function getRandomInt(min, max) {
        return min + Math.random() * (max - min);
      },
      randomItemFromRatioSet: function randomItemFromRatioSet(itemArr) {
        var lastSum = 0;
        var ratioScaleArr = [];
        itemArr.map(function(item) {
          lastSum += item.ratio;
          ratioScaleArr.push(lastSum);
        });
        var rnd = parseInt(_random() * lastSum);
        var keyIndex = 0;
        ratioScaleArr.some(function(val, index) {
          if (rnd < val) {
            keyIndex = index;
            return true;
          }
        });
        return itemArr[keyIndex];
      },
      secondsToTime: function secondsToTime(secs) {
        var days = Math.floor(secs / 86400);
        var hours = Math.floor(secs % 86400 / 3600);
        var minutes = Math.floor(secs % 3600 / 60);
        var seconds = secs % 60;
        return {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
      },
      secondsToTimeString: function secondsToTimeString(secs) {
        var _this$secondsToTime = this.secondsToTime(secs), days = _this$secondsToTime.days, hours = _this$secondsToTime.hours, minutes = _this$secondsToTime.minutes, seconds = _this$secondsToTime.seconds;
        if (days > 0) return days + " day" + (days > 1 ? "s" : "");
        if (hours > 0) return hours + " hr" + (hours > 1 ? "s" : "");
        if (minutes > 0) return minutes + " min" + (minutes > 1 ? "s" : "");
        return (seconds || 0) + " sec" + (seconds > 1 ? "s" : "");
      },
      secondsToTimeCountdown: function secondsToTimeCountdown(secs) {
        if (secs <= 0) return "00:00";
        var _this$secondsToTime2 = this.secondsToTime(secs), days = _this$secondsToTime2.days, hours = _this$secondsToTime2.hours, minutes = _this$secondsToTime2.minutes, seconds = _this$secondsToTime2.seconds;
        if (days > 0) return days + " day" + (days > 1 ? "s" : "");
        var ret = "";
        hours > 0 && (ret = ("0" + hours).slice(-2) + ":");
        ret += ("0" + minutes).slice(-2) + ":";
        ret += ("0" + seconds).slice(-2);
        return ret;
      },
      setLabelCountDownTimer: function setLabelCountDownTimer(node, targetUTC, timeoutCallback, template) {
        var N = node;
        _isString(N) && (N = cc.find(N));
        N.countDownTimerVar && clearInterval(N.countDownTimerVar);
        var timerFunc = function timerFunc() {
          if (!N.parent) {
            clearInterval(N.countDownTimerVar);
            return;
          }
          var currentTime = _time();
          var timeDiff = targetUTC - currentTime;
          var timeDiffStr = _GAME.utils.secondsToTimeCountdown(_floor(timeDiff / 1e3));
          var str = (template || "xxx").replace("xxx", timeDiffStr);
          _GAME.utils.setLabelText(N, str);
          if (timeDiff <= 0) {
            clearInterval(N.countDownTimerVar);
            timeoutCallback && timeoutCallback();
          }
        };
        N.countDownTimerVar = setInterval(timerFunc, 500);
        timerFunc();
      },
      waitToRun: function waitToRun(callback, propertyName, mainObject, interval, maxTimeWait, timeoutCallback) {
        void 0 === mainObject && (mainObject = window);
        void 0 === interval && (interval = .1);
        var isRunSuccess = false;
        var waitInterval = setInterval(function() {
          if (propertyName.includes("()")) {
            if (!mainObject[propertyName.replace("()", "")]()) return;
          } else if (!mainObject[propertyName]) return;
          clearInterval(waitInterval);
          isRunSuccess = true;
          callback();
        }, 1e3 * interval);
        maxTimeWait && _GAME.utils.setTimeout(function() {
          clearInterval(waitInterval);
          timeoutCallback && !isRunSuccess && timeoutCallback();
        }, 1e3 * maxTimeWait);
      },
      extendObj: function extendObj(orgObj, newObj, propArr) {
        propArr.map(function(prop) {
          newObj[prop] = orgObj[prop];
        });
      },
      setNodeProps: function setNodeProps(N, width, height, x, y, scale) {
        width && (N.width = width);
        height && (N.height = height);
        x && (N.x = x);
        y && (N.y = y);
        scale && (N.scale = scale);
      },
      preloadImage: function preloadImage(imgPath, callback) {
        if (_GAME.utils.textureCaches[imgPath]) return callback && callback(_GAME.utils.textureCaches[imgPath]);
        cc.loader.loadRes(imgPath, cc.SpriteFrame, function(e, texture) {
          if (e) callback && callback(false); else {
            _GAME.utils.textureCaches[imgPath] = texture;
            callback && callback(texture);
          }
        });
      },
      copyTexture: function copyTexture(sourceNode, destNode) {
        var sComp = destNode.getComponent(cc.Sprite) || destNode.addComponent(cc.Sprite);
        sComp.spriteFrame = sourceNode.getComponent(cc.Sprite).spriteFrame;
      },
      setNodeImgFromUrl: function setNodeImgFromUrl(node, url) {
        node.isTextureFromURL = true;
        _GAME.utils.textureCaches[url] || (_GAME.utils.textureCaches[url] = new cc.SpriteFrame(url));
        _GAME.utils.setNodeImgFromSpriteFrame(node, _GAME.utils.textureCaches[url]);
      },
      setNodeImgFromResources: function setNodeImgFromResources(node, imgPath, isResetOrgSize, callback) {
        void 0 === isResetOrgSize && (isResetOrgSize = false);
        node.isTextureFromResource = true;
        node.currentTexturePath = imgPath;
        if (_GAME.utils.textureCaches[imgPath]) {
          node.getComponent(cc.Sprite).enabled = true;
          _GAME.utils.setNodeImgFromSpriteFrame(node, _GAME.utils.textureCaches[imgPath], !isResetOrgSize, isResetOrgSize);
          callback && callback();
        } else cc.loader.loadRes(imgPath, cc.SpriteFrame, function(e, texture) {
          if (e) return;
          _GAME.utils.textureCaches[imgPath] = texture;
          if (node.currentTexturePath == imgPath) {
            node.getComponent(cc.Sprite).enabled = true;
            _GAME.utils.setNodeImgFromSpriteFrame(node, _GAME.utils.textureCaches[imgPath], !isResetOrgSize, isResetOrgSize);
            callback && callback();
          }
        });
      },
      setNodeImgFromSpriteFrame: function setNodeImgFromSpriteFrame(node, frame, keepOldSize, isSizedToNewSFrame) {
        void 0 === keepOldSize && (keepOldSize = true);
        void 0 === isSizedToNewSFrame && (isSizedToNewSFrame = false);
        var orgW = node.width, orgH = node.height;
        node.getComponent(cc.Sprite) || node.addComponent(cc.Sprite);
        _GAME.utils.waitToRun(function() {
          node.getComponent(cc.Sprite).spriteFrame = frame;
          if (keepOldSize) {
            node.width = 0 != orgW ? orgW : frame._originalSize.width;
            node.height = 0 != orgH ? orgH : frame._originalSize.height;
          } else {
            0 != frame._originalSize.width && (node.width = frame._originalSize.width);
            0 != frame._originalSize.height && (node.height = frame._originalSize.height);
          }
          if (isSizedToNewSFrame) {
            var sFrame = node.getComponent(cc.Sprite).spriteFrame;
            node.width = sFrame._originalSize.width;
            node.height = sFrame._originalSize.height;
          }
        }, "textureLoaded()", frame);
      },
      setNodeImg: function setNodeImg(node, img, keepOldSize, isSizedToNewSFrame) {
        void 0 === keepOldSize && (keepOldSize = true);
        void 0 === isSizedToNewSFrame && (isSizedToNewSFrame = false);
        if ("string" === typeof img) this.isURL(img) ? _GAME.utils.setNodeImgFromUrl(node, img) : _GAME.utils.setNodeImgFromResources(node, img, isSizedToNewSFrame); else if (img instanceof cc.SpriteFrame) _GAME.utils.setNodeImgFromSpriteFrame(node, img, keepOldSize, isSizedToNewSFrame); else if (img instanceof cc.Node) {
          var sComp = img.getComponent(cc.Sprite);
          if (!sComp) return;
          _GAME.utils.setNodeImgFromSpriteFrame(node, sComp.spriteFrame, keepOldSize, isSizedToNewSFrame);
        }
      },
      setLabelText: function setLabelText(label, str) {
        if (!label) return;
        if ("string" == typeof str) {
          if ("number" == typeof str) {
            label.getComponent(cc.Label).string = str;
            return;
          }
          var newStr = "";
          for (var index = 0; index < str.length; index++) {
            var element = str[index];
            " " != element && (newStr += element);
          }
          var valueCompare = newStr.toUpperCase();
          var value = _GAME.localize.convertPosition(valueCompare);
          0 != value.length ? label.getComponent(cc.Label).string = value : label.getComponent(cc.Label).string = str;
        } else label.getComponent(cc.Label).string = str;
      },
      setLabelTextBigNumber: function setLabelTextBigNumber(label, num) {
        if (!label) return;
        isNaN(num) && (num = 0);
        label.getComponent(cc.Label).string = _GAME.utils.formatCurrency(num, 999999999999999);
      },
      setLabelTextPrice: function setLabelTextPrice(label, number, maxSize) {
        if (!label) return;
        var isStartedWPlus = _isString(number) && number.startsWith("+");
        var num = isStartedWPlus ? parseInt(number.replace("+", "")) : number;
        var str = _GAME.utils.formatCurrency(num, maxSize);
        label.getComponent(cc.Label).string = (isStartedWPlus ? "+" : "") + str;
      },
      setLabelTextShotcut: function setLabelTextShotcut(node, text) {
        if (node) {
          if (!text.length) return;
          var newText = text.length > 6 ? text.slice(0, 6) : text;
          var compNode = node.getComponent(cc.Label);
          compNode.string = newText + "...";
        }
      },
      moveNodeTo: function moveNodeTo(node, newParent, copy) {
        void 0 === copy && (copy = false);
        var N = copy ? cc.instantiate(node) : node;
        if (newParent && N.parent != newParent) {
          N.removeFromParent(false);
          newParent.addChild(N);
        }
        return N;
      },
      copyNodeTo: function copyNodeTo(node, newParent) {
        var N = _GAME.utils.moveNodeTo(node, newParent, true);
        var originalSComps = node.getComponentsInChildren(cc.Sprite);
        var newSComps = N.getComponentsInChildren(cc.Sprite);
        originalSComps.map(function(comp, i) {
          var orgNode = comp.node, newNode = newSComps[i].node;
          _GAME.utils.extendObj(orgNode, newNode, [ "width", "height" ]);
          orgNode.onTouchEnd && newNode.on("touchend", orgNode.onTouchEnd);
        });
        return N;
      },
      prefabToNode: function prefabToNode(name) {
        var N = cc.instantiate(_GAME.prefabList[name]);
        return N;
      },
      preloadPrefabToNode: function preloadPrefabToNode(prefabName, nodeName, parent) {
        var node = _GAME.utils.prefabToNode(prefabName);
        node.name = nodeName;
        node.parent = parent;
        node.setPosition(0, 0);
        node.active = false;
      },
      formatNumber: function formatNumber(value) {
        return value.toLocaleString("en");
      },
      formatCurrency: function formatCurrency(value, maxSize) {
        var SUFFIXES = [ "K", "M", "B", "T", "aa", "ab", "ad", "ae", "af" ];
        var x = Math.floor(value);
        var endValueStr = "";
        if (x > maxSize) for (var _iterator = _createForOfIteratorHelperLoose(SUFFIXES), _step; !(_step = _iterator()).done; ) {
          var suffix = _step.value;
          x /= 1e3;
          if (x < maxSize) {
            endValueStr = suffix;
            break;
          }
        }
        return x.toFixed(0).replace(",", ".").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + endValueStr;
      },
      isURL: function isURL(str) {
        var pattern = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
        return !!pattern.test(str);
      },
      singleTouchSet: function singleTouchSet(N, touchStartFunc, touchMoveFunc, touchEndFunc) {
        var scrW2 = cc.winSize.width / 2;
        var scrH2 = cc.winSize.height / 2;
        var callFuncWithEvent = function callFuncWithEvent(func, event) {
          var pos = event.touch.getLocation();
          var realPos = cc.v2(pos.x - scrW2, pos.y - scrH2);
          func(realPos, event);
        };
        N.on("touchstart", function(event) {
          if (N.touchingID) return;
          N.touchingID = event.touch._id + 1;
          touchStartFunc && callFuncWithEvent(touchStartFunc, event);
        });
        touchMoveFunc && N.on("touchmove", function(event) {
          var tID = event.touch._id + 1;
          tID == N.touchingID && touchMoveFunc && callFuncWithEvent(touchMoveFunc, event);
        });
        var touchDestroy = function touchDestroy(event) {
          var tID = event.touch._id + 1;
          if (tID == N.touchingID) {
            N.touchingID = null;
            touchEndFunc && callFuncWithEvent(touchEndFunc, event);
          }
        };
        N.on("touchend", touchDestroy);
        N.on("touchcancel", touchDestroy);
      },
      removeTouchHandler: function removeTouchHandler(node) {
        node.isDraggable = false;
        node.touchStartHandlerArr = node.touchMoveHandlerArr = node.touchEndHandlerArr = null;
        node.off("touchstart");
        node.off("touchend");
        node.off("touchmove");
        node.off("touchcancel");
      },
      localizeNumber: function localizeNumber(text) {
        var local = "";
        local = window.FBInstant ? FBInstant.getLocale() : "en_US";
        var txtFormat = ".";
        switch (local) {
         case "en_US":
         case "en_GB":
         case "th_TH":
          txtFormat = ",";
          break;

         case "fr_FR":
         case "fr_CA":
         case "ru_RU":
          txtFormat = " ";
          break;

         case "pl_PL":
         case "it_IT":
         case "hu_HU":
          txtFormat = "";
        }
        var s = "";
        var g = text;
        var count = 0;
        var c = "";
        while (g >= 10) {
          count > 0 && count % 3 == 0 && (s = txtFormat + s);
          var i = g % 10;
          c = i + "";
          s = c + s;
          g = (g - i) / 10;
          count++;
        }
        count > 0 && count % 3 == 0 && (s = txtFormat + s);
        c = g + "";
        s = c + s;
        return s;
      }
    };
    exports.utils = utils;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  video: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ba842dWP9Cx51qrZxFVQdg", "video");
    "use strict";
    exports.__esModule = true;
    exports.video = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var video = {
      isAvailable: false,
      loadingVideo: false,
      rewardedVideo: null,
      init: function init() {
        var _this = this;
        window.FBInstant || (this.isAvailable = true);
        _GAME.video.preloadVideo(function() {
          _log("PRELOAD VIDEO OK");
          _this.isAvailable = true;
        }, function(err) {
          _log("PRELOAD VIDEO ERROR", err);
        });
      },
      preloadVideo: function preloadVideo(successCallBack, failCallBack) {
        if (!window.FBInstant) {
          failCallBack && failCallBack({
            code: "OFFLINE"
          });
          return;
        }
        if (!_GAME.utilsFB.isSupportedAPI("getRewardedVideoAsync")) {
          failCallBack && failCallBack({
            code: "NOT_SUPPORTED"
          });
          return;
        }
        if (_GAME.video.loadingVideo) {
          failCallBack && failCallBack({
            code: "LOADING"
          });
          return;
        }
        _GAME.video.loadingVideo = true;
        FBInstant.getRewardedVideoAsync(_GAME.configs.videoRewardId).then(function(rewardedVideo) {
          rewardedVideo.loadAsync().then(function() {
            _GAME.video.rewardedVideo = rewardedVideo;
            _GAME.video.loadingVideo = false;
            successCallBack && successCallBack();
          })["catch"](function(err) {
            _GAME.video.rewardedVideo = null;
            _GAME.video.loadingVideo = false;
            failCallBack && failCallBack(err);
          });
        })["catch"](function(err) {
          _GAME.video.rewardedVideo = null;
          _GAME.video.loadingVideo = false;
          failCallBack && failCallBack(err);
        });
      },
      showVideo: function showVideo(orgSuccessCallBack, orgFailCallBack, videoPos) {
        void 0 === videoPos && (videoPos = "");
        var successCallBack = function successCallBack() {
          orgSuccessCallBack && orgSuccessCallBack();
        };
        var failCallBack = function failCallBack(err, errorUser) {
          orgFailCallBack && orgFailCallBack(err, errorUser);
        };
        if (!window.FBInstant) return successCallBack();
        if (_GAME.video.rewardedVideo) {
          _GAME.utilsFB.log("ev_video_click_show");
          _GAME.video.rewardedVideo.showAsync().then(function() {
            _GAME.utilsFB.log("ev_watch_video_success", 1, {});
            _GAME.utilsFB.log("Ads-Total-Video", 1, {
              videoPos: videoPos
            });
            _GAME.utilsFB.log("Ads-Total");
            successCallBack();
            _GAME.video.preloadVideo();
          })["catch"](function(err) {
            console.log("VAO CASE NAY CO !!!", err.code, " !!! ", err.message);
            _GAME.video.isErrRewardNotCompleted(err) ? _GAME.utilsFB.log("ev_video_err_reward_not_completed") : _GAME.utilsFB.log("ev_video_err_other");
            failCallBack(err, _GAME.video.isErrRewardNotCompleted(err));
            _GAME.video.preloadVideo();
          });
        } else _GAME.video.loadingVideo ? _GAME.utils.setTimeout(function() {
          return _GAME.video.showVideo(successCallBack, failCallBack, videoPos);
        }, 200) : failCallBack({
          code: "VIDEO_IS_NULL"
        });
      },
      isErrRewardNotCompleted: function isErrRewardNotCompleted(err) {
        return "USER_INPUT" == err.code;
      }
    };
    exports.video = video;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ]
}, {}, [ "all_modules", "canvas_init", "configs", "block_collision_handler", "cell_links", "control", "map", "map_visual", "data", "game", "login", "user", "friend", "leaderboard", "message", "promo", "share", "social", "tut", "tut_bom", "tut_relocated", "tut_rolated", "tut_triple", "blockAsset", "fx", "label_listener", "load_optimize", "ui", "ui_challenge", "ui_power_item", "audio", "free_button_comp", "inter_ad", "localize", "localize_auto_tranform", "localize_config", "md5", "utils", "utils_facebook", "utils_instant", "video" ]);