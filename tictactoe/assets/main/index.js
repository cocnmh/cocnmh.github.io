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
  box: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e44df5DctORbCvXHd8lwS4", "box");
    "use strict";
    var _game = require("./game");
    cc.Class({
      extends: cc.Component,
      onPress: function onPress(e) {
        var _this$node$parent$nam = this.node.parent.name.split("-"), x = _this$node$parent$nam[0], y = _this$node$parent$nam[1];
        _game.game.change({
          x: x,
          y: y,
          cell: this
        });
      },
      onChangeGameType: function onChangeGameType(e, typeOfGame) {
        _game.game.init(Number(typeOfGame));
      }
    });
    cc._RF.pop();
  }, {
    "./game": "game"
  } ],
  canvas_init: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8bd3cunDFI9pgOuHkE2PZo", "canvas_init");
    "use strict";
    var _game = require("./UIcomponent/game");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        _game.game.init();
      }
    });
    cc._RF.pop();
  }, {
    "./UIcomponent/game": "game"
  } ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e0041LqUpIP5tFOrIbPAh/", "config");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18c61MqxCpIAZ45f0z2GE2a", "game");
    "use strict";
    exports.__esModule = true;
    exports.game = void 0;
    var _utils = require("../utils");
    var game_data = {
      current: 1,
      board: [],
      gameSize: 5,
      cellHaveValue: 0,
      assetsXO: [],
      maxIndexToCreateBoard: 0,
      numberCellToWin: 4,
      tempArray: [],
      winner: 0,
      boardHeight: 0
    };
    var game = {
      init: function init(gameSize) {
        void 0 === gameSize && (gameSize = game_data.gameSize);
        !game_data.assetsXO.length && cc.resources.load([ "img/x", "img/o" ], cc.SpriteFrame, function(err, spriteFrames) {
          err || (game_data.assetsXO = spriteFrames);
        });
        if (!game_data.boardHeight) {
          var boardCanvas = cc.find("Canvas/play_area/board");
          null != boardCanvas && boardCanvas.height && (game_data.boardHeight = null == boardCanvas ? void 0 : boardCanvas.height);
        }
        game_data.gameSize = gameSize;
        var gameType = cc.find("Canvas/play_area/gameType");
        gameType.getComponent(cc.Label).string = gameSize + "x" + gameSize;
        game_data.current = 1;
        game_data.cellHaveValue = 0;
        game_data.winner = 0;
        game_data.numberCellToWin = gameSize >= 5 ? 4 : 3;
        game_data.maxIndexToCreateBoard = gameSize - game_data.numberCellToWin;
        game_data.tempArray = new Array(game_data.numberCellToWin).fill("");
        game_data.board = new Array(gameSize).fill(0);
        game.resetPlayArea();
        var node = cc.find("Canvas/play_area/-1-1");
        game_data.board.map(function(el, row) {
          game_data.board[row] = new Array(gameSize).fill(0);
          game_data.board[row].map(function(r, col) {
            setTimeout(function() {
              var newNode = cc.instantiate(node);
              var cellHeight = game_data.boardHeight / gameSize;
              var center = Math.round(gameSize / 2) - 1;
              newNode.name = row + "-" + col;
              newNode.active = true;
              newNode.height = cellHeight;
              newNode.width = cellHeight;
              newNode.x = cellHeight * (center - row);
              newNode.y = cellHeight * (center - col);
              newNode.children[0].getComponent(cc.Sprite).spriteFrame = game_data.assetsXO[(row + col) % 2];
              _utils.utils.copyNode(newNode, node.parent);
            }, 500);
          });
        });
        setTimeout(function() {
          game.resetPlayArea();
        }, 1500);
      },
      resetPlayArea: function resetPlayArea() {
        var _board$children;
        var board = cc.find("Canvas/play_area");
        null == board ? void 0 : null == (_board$children = board.children) ? void 0 : _board$children.map(function(cell) {
          "-1-1" != (null == cell ? void 0 : cell.name) && /-/.test(null == cell ? void 0 : cell.name) && cell.destroy();
        });
      },
      change: function change(_ref) {
        var x = _ref.x, y = _ref.y, cell = _ref.cell;
        if (game_data.board[x][y]) return;
        var cellValue = game_data.current;
        cell.node.getComponent(cc.Sprite).spriteFrame = game_data.assetsXO[cellValue > 0 ? 0 : 1];
        game_data.board[x][y] = cellValue;
        game_data.cellHaveValue++;
        game.getWinUser({
          x: x,
          y: y
        }).then(function(winner) {
          if (winner) {
            console.log("====================================");
            console.log(winner > 0 ? "X" : "0");
            console.log("====================================");
            game.init();
            game.resetPlayArea();
          } else game_data.current = -cellValue;
        });
      },
      getWinUser: function getWinUser(_ref2) {
        var x = _ref2.x, y = _ref2.y;
        var maxIndexToCreateBoard = game_data.maxIndexToCreateBoard, numberCellToWin = game_data.numberCellToWin, board = game_data.board, tempArray = game_data.tempArray;
        var subX = x - numberCellToWin + 1;
        var subY = y - numberCellToWin + 1;
        var from = {
          x: subX > 0 ? subX : 0,
          y: subY > 0 ? subY : 0
        };
        var to = {
          x: x > maxIndexToCreateBoard ? maxIndexToCreateBoard : x,
          y: y > maxIndexToCreateBoard ? maxIndexToCreateBoard : y
        };
        return new Promise(function(resolve, reject) {
          var _loop = function _loop(_x) {
            if (game_data.winner) return {
              v: resolve(game_data.winner)
            };
            var tempPromise = [];
            var _loop2 = function _loop2(_y) {
              if (game_data.winner) return {
                v: {
                  v: resolve(game_data.winner)
                }
              };
              var tempBoard = [];
              tempArray.map(function(el, index) {
                var tempX = _x + index;
                var rows = [].concat(board[tempX].slice(_y, _y + numberCellToWin));
                tempBoard.push(rows);
              });
              tempPromise.push(game.checkBoard(tempBoard));
            };
            for (var _y = from.y; _y <= to.y; _y++) {
              var _ret2 = _loop2(_y);
              if ("object" === typeof _ret2) return _ret2.v;
            }
            Promise.all(tempPromise).then(function(rs) {
              resolve(game_data.winner);
            });
          };
          for (var _x = from.x; _x <= to.x; _x++) {
            var _ret = _loop(_x);
            if ("object" === typeof _ret) return _ret.v;
          }
        });
      },
      checkBoard: function checkBoard(_board) {
        var numberCellToWin = game_data.numberCellToWin, current = game_data.current;
        var rows = new Array(numberCellToWin).fill(0);
        var cols = new Array(numberCellToWin).fill(0);
        var LTR = 0;
        var RTL = 0;
        return new Promise(function(resolve, reject) {
          _board.map(function(row, idRow) {
            if (game_data.winner) return resolve(game_data.winner);
            row.map(function(val, idCol) {
              if (game_data.winner) return resolve(game_data.winner);
              rows[idRow] += val || 0;
              cols[idCol] += val || 0;
              idRow == idCol && (LTR += val || 0);
              idRow + idCol == numberCellToWin - 1 && (RTL += val || 0);
              if ((idRow == numberCellToWin - 1 || idCol == numberCellToWin - 1) && (Math.abs(rows[idRow]) == numberCellToWin || Math.abs(cols[idCol]) == numberCellToWin || Math.abs(LTR) == numberCellToWin || Math.abs(RTL) == numberCellToWin)) {
                game_data.winner = current;
                resolve(current);
              }
              idRow == numberCellToWin - 1 && idCol == numberCellToWin - 1 && resolve(0);
            });
          });
        });
      }
    };
    exports.game = game;
    cc._RF.pop();
  }, {
    "../utils": "utils"
  } ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f60c7hPJq9HY6mCtjyX4BJL", "utils");
    "use strict";
    exports.__esModule = true;
    exports.utils = void 0;
    var utils = {
      copyNode: function copyNode(node, parent) {
        parent || (parent = node.parent);
        parent.addChild(node);
      }
    };
    exports.utils = utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "box", "game", "canvas_init", "config", "utils" ]);