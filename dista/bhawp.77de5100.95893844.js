// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"bhawp.77de5100.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;

        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};
      var module = cache[name] = new newRequire.Module(name);
      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;

  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "vec2.ts": [function (require, module, exports) {
    "use strict";

    exports.__esModule = true;

    var Vec2 =
    /** @class */
    function () {
      function Vec2(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
      }

      Vec2.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
      };

      Vec2.prototype.clone = function () {
        return new Vec2(this.x, this.y);
      };

      Vec2.addTwo = function (a, b) {
        return new Vec2(a.x + b.x, a.y + b.y);
      };

      return Vec2;
    }();

    exports["default"] = Vec2;
  }, {}],
  "sprite.ts": [function (require, module, exports) {
    "use strict";

    exports.__esModule = true;

    var Sprite =
    /** @class */
    function () {
      function Sprite(img) {
        this.img = img;
        this.img = img;
      }

      Sprite.prototype.draw = function (context, position) {
        context.drawImage(this.img, position.x + 0.5, position.y + 0.5); // 0.5 needed foro canvas not positioning correctly
      };

      return Sprite;
    }();

    exports["default"] = Sprite;
  }, {}],
  "entity.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var vec2_1 = __importDefault(require("./vec2"));

    var sprite_1 = __importDefault(require("./sprite"));

    var cross = new Image();
    cross.src = 'cross.png';

    var Entity =
    /** @class */
    function () {
      function Entity(position, half) {
        this.centerSprite = new sprite_1["default"](cross);
        this.position = position;
        this.half = new vec2_1["default"](half.x, half.y);
        this.xRemainder = 0;
        this.yRemainder = 0;
      }

      Entity.prototype.intersectPoint = function (point, half) {
        var dx = point.x - this.position.x;
        var px = half.x + this.half.x - Math.abs(dx);

        if (px <= 0) {
          return false;
        }

        var dy = point.y - this.position.y;
        var py = half.y + this.half.y - Math.abs(dy);

        if (py <= 0) {
          return false;
        }

        return true;
      };

      Entity.prototype.intersectEntity = function (other) {
        var dx = other.position.x - this.position.x;
        var px = other.half.x + this.half.x - Math.abs(dx);

        if (px <= 0) {
          return false;
        }

        var dy = other.position.y - this.position.y;
        var py = other.half.y + this.half.y - Math.abs(dy);

        if (py <= 0) {
          return false;
        }

        return true;
      };

      Entity.prototype.update = function (dt) {};

      Entity.prototype.drawAABB = function (context, color, thickness) {
        if (color === void 0) {
          color = '#fff';
        }

        if (thickness === void 0) {
          thickness = 1;
        }

        var x1 = Math.floor(this.position.x - this.half.x);
        var y1 = Math.floor(this.position.y - this.half.y);
        var x2 = Math.floor(this.position.x + this.half.x);
        var y2 = Math.floor(this.position.y + this.half.y);
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y1);
        context.lineTo(x2, y2);
        context.lineTo(x1, y2);
        context.lineTo(x1, y1);
        context.closePath();
        context.lineWidth = thickness;
        context.strokeStyle = color;
        context.stroke();
        this.centerSprite.draw(context, new vec2_1["default"](this.position.x - 2, this.position.y - 2));
      };

      Entity.prototype.left = function () {
        return this.position.x - this.half.x;
      };

      Entity.prototype.right = function () {
        return this.position.x + this.half.x;
      };

      Entity.prototype.top = function () {
        return this.position.y - this.half.y;
      };

      Entity.prototype.bottom = function () {
        return this.position.y + this.half.y;
      };

      return Entity;
    }();

    exports["default"] = Entity;
  }, {
    "./vec2": "vec2.ts",
    "./sprite": "sprite.ts"
  }],
  "utils.ts": [function (require, module, exports) {
    "use strict";

    exports.__esModule = true;
    exports.CONSTANTS = {
      WIDTH: 320,
      HEIGHT: 180,
      SCALE: 4,
      GRID_SIZE: 32
    };

    exports.collideAt = function (solids, position, half) {
      for (var _i = 0, solids_1 = solids; _i < solids_1.length; _i++) {
        var solid = solids_1[_i];

        if (solid.collidable && solid.intersectPoint(position, half)) {
          return {
            collided: true,
            collider: solid
          };
        }
      }

      return {
        collided: false,
        collider: null
      };
    };

    exports.overlap = function (solid, actor) {
      return solid.intersectEntity(actor);
    };
    /**
     * Approach the target number from a given starting point in max movement steps, without exceeding it.
     */


    exports.approach = function (val, target, max) {
      return val > target ? Math.max(val - max, target) : Math.min(val + max, target);
    };

    exports.clearDraw = function (context) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.fillStyle = '#302831';
      context.fillRect(0, 0, exports.CONSTANTS.WIDTH, exports.CONSTANTS.HEIGHT);
    };

    exports.lerp = function (a, b, amount) {
      amount = Math.max(0, amount);
      amount = Math.min(1, amount);
      return a + (b - a) * amount;
    };

    exports.clamp = function (v, min, max) {
      return Math.min(max, Math.max(min, v));
    };

    exports.debug = function (s) {
      document.getElementById('debug').textContent = s;
    };
  }, {}],
  "solid.ts": [function (require, module, exports) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var entity_1 = __importDefault(require("./entity"));

    var level_1 = __importDefault(require("./level"));

    var utils_1 = require("./utils");

    var Solid =
    /** @class */
    function (_super) {
      __extends(Solid, _super);

      function Solid(position, half) {
        var _this = _super.call(this, position, half) || this;

        _this.position = position;
        _this.half = half;
        _this.collidable = true;
        return _this;
      }

      Solid.prototype.moveX = function (amount) {
        this.xRemainder += amount;
        var move = Math.round(this.xRemainder);

        if (move !== 0) {
          var riding = this.getAllRidingActors();
          var sign = Math.sign(move);
          this.xRemainder -= move;
          this.collidable = false;

          while (move !== 0) {
            this.position.x += sign;

            if (move > 0) {
              for (var _i = 0, _a = level_1["default"].actors; _i < _a.length; _i++) {
                var actor = _a[_i];

                if (utils_1.overlap(this, actor)) {
                  // Push right
                  actor.moveX(this.right() - actor.left(), actor.squish);
                } else if (riding.includes(actor)) {
                  // Carry
                  actor.moveX(sign, null);
                }
              }
            } else {
              for (var _b = 0, _c = level_1["default"].actors; _b < _c.length; _b++) {
                var actor = _c[_b];

                if (utils_1.overlap(this, actor)) {
                  // Push left
                  actor.moveX(this.left() - actor.right(), actor.squish);
                } else if (riding.includes(actor)) {
                  // Carry
                  actor.moveX(sign, null);
                }
              }
            }

            move -= sign;
          }

          this.collidable = true;
        }
      };

      Solid.prototype.moveY = function (amount) {
        this.yRemainder += amount;
        var move = Math.round(this.yRemainder);

        if (move !== 0) {
          var riding = this.getAllRidingActors();
          var sign = Math.sign(move);
          this.yRemainder -= move;
          this.collidable = false;

          while (move !== 0) {
            this.position.y += sign;

            if (move > 0) {
              for (var _i = 0, _a = level_1["default"].actors; _i < _a.length; _i++) {
                var actor = _a[_i];

                if (utils_1.overlap(this, actor)) {
                  // Push top
                  actor.moveY(this.bottom() - actor.top(), actor.squish);
                } else if (riding.includes(actor)) {
                  // Carry
                  actor.moveY(sign, null);
                }
              }
            } else {
              for (var _b = 0, _c = level_1["default"].actors; _b < _c.length; _b++) {
                var actor = _c[_b];

                if (utils_1.overlap(this, actor)) {
                  // Push bottom
                  actor.moveY(this.top() - actor.bottom(), actor.squish);
                } else if (riding.includes(actor)) {
                  // Carry
                  actor.moveY(sign, null);
                }
              }
            }

            move -= sign;
          }

          this.collidable = true;
        }
      };

      Solid.prototype.getAllRidingActors = function () {
        var _this = this;

        return level_1["default"].actors.filter(function (actor) {
          return actor.isRiding(_this);
        });
      };

      return Solid;
    }(entity_1["default"]);

    exports["default"] = Solid;
  }, {
    "./entity": "entity.ts",
    "./level": "level.ts",
    "./utils": "utils.ts"
  }],
  "tile.ts": [function (require, module, exports) {
    "use strict";

    exports.__esModule = true;

    var Tile =
    /** @class */
    function () {
      function Tile(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
      }

      Tile.prototype.draw = function (context, tileset) {
        context.drawImage(tileset, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
      };

      return Tile;
    }();

    exports["default"] = Tile;
  }, {}],
  "movingwall.ts": [function (require, module, exports) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var solid_1 = __importDefault(require("./solid"));

    var vec2_1 = __importDefault(require("./vec2"));

    var UPDATE_RATE = 1 / 60; // 60 frames / s

    /**
     * A * ( sin ( B * ( x – C ) ) ) + D
     * A = Amplitude (Tallness) of the wave.
     * B = How many waves there are for each cycle.
     * C = How far to shift the wave’s X position.
     * D = How far to shift the wave’s Y position.
     **/

    var MovingWall =
    /** @class */
    function (_super) {
      __extends(MovingWall, _super);

      function MovingWall(position, half, moveBy, speed, direction) {
        var _this = _super.call(this, position, half) || this;

        var signX = Math.sign(moveBy.x);
        var signY = Math.sign(moveBy.y);
        _this.moveBy = new vec2_1["default"](signX * Math.abs(moveBy.x), signY * Math.abs(moveBy.y));
        _this.speed = speed;
        _this.direction = direction;
        _this.prevDelta = new vec2_1["default"](0, 0);
        _this.t = 0;
        _this.elapsed = 0;
        return _this;
      }

      MovingWall.prototype.update = function (dt) {
        this.t += dt;
        this.elapsed += dt;

        if (this.elapsed >= 1) {
          this.elapsed %= 1;
        }

        var sin = Math.sin(this.t * this.speed);
        var cos = Math.cos(this.t * this.speed);
        var x = sin * this.moveBy.x;
        var y = cos * this.moveBy.y;
        var deltaX = x - this.prevDelta.x;
        var deltaY = y - this.prevDelta.y;
        this.moveX(deltaX);
        this.moveY(deltaY);
        this.prevDelta.x = x;
        this.prevDelta.y = y;
      };

      return MovingWall;
    }(solid_1["default"]);

    exports["default"] = MovingWall;
  }, {
    "./solid": "solid.ts",
    "./vec2": "vec2.ts"
  }],
  "spike.ts": [function (require, module, exports) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var solid_1 = __importDefault(require("./solid"));

    var Spike =
    /** @class */
    function (_super) {
      __extends(Spike, _super);

      function Spike() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Spike.prototype.drawAABB = function (context, color, thickness) {
        if (thickness === void 0) {
          thickness = 1;
        }

        _super.prototype.drawAABB.call(this, context, "#979797", thickness);
      };

      return Spike;
    }(solid_1["default"]);

    exports["default"] = Spike;
  }, {
    "./solid": "solid.ts"
  }],
  "aseprite.ts": [function (require, module, exports) {
    "use strict";

    exports.__esModule = true;

    var Aseprite =
    /** @class */
    function () {
      function Aseprite(data) {
        var _this = this;

        this.data = data;
        this.activeTag = {
          name: null,
          from: 0,
          to: 0
        };
        this.img = new Image();
        this.loaded = false;
        this.data = data;
        this.img.src = "./sprites/" + this.data.meta.image;
        this.img.addEventListener('load', function () {
          _this.loaded = true;
        });
      }

      Aseprite.prototype.initAnimation = function (tag) {
        var frameTags = this.data.meta.frameTags;
        this.activeTag = frameTags.find(function (ft) {
          return ft.name === tag;
        });
        this.frameCount = this.activeTag.to - this.activeTag.from + 1;
        this.activeFrame = 0;
        this.setFrameDuration();
      };

      Aseprite.prototype.setFrameDuration = function () {
        var frames = this.data.frames;
        var frame = frames[this.activeTag.from + this.activeFrame];

        if (frame) {
          this.duration = frames[this.activeTag.from + this.activeFrame].duration / 1000;
        }
      };

      Aseprite.prototype.play = function (tag) {
        if (this.activeTag.name !== tag) {
          this.initAnimation(tag);
        }
      };

      Aseprite.prototype.nextFrame = function () {
        this.activeFrame = (this.activeFrame + 1) % this.frameCount;
      };

      Aseprite.prototype.render = function (context, position) {
        if (!this.loaded) {
          return;
        }

        var frames = this.data.frames;
        var frame = frames[this.activeTag.from + this.activeFrame].frame;
        context.drawImage(this.img, frame.x, frame.y, frame.w, frame.h, position.x - frame.w / 2 + 0.5, position.y - frame.h / 2 - 10 + 0.5, frame.w, frame.h);
      };

      Aseprite.prototype.update = function (dt) {
        if (!this.loaded || this.frameCount === 0) {
          return;
        }

        if (this.duration > 0) {
          this.duration -= dt;
          return;
        }

        this.nextFrame();
        this.setFrameDuration();
      };

      return Aseprite;
    }();

    exports["default"] = Aseprite;
  }, {}],
  "sprites/waterfall_32.json": [function (require, module, exports) {
    module.exports = {
      "frames": [{
        "filename": "Waterfall_BottomAnim 0.gif",
        "frame": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "sourceSize": {
          "w": 16,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "Waterfall_BottomAnim 1.gif",
        "frame": {
          "x": 16,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "sourceSize": {
          "w": 16,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "Waterfall_BottomAnim 2.gif",
        "frame": {
          "x": 32,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "sourceSize": {
          "w": 16,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "Waterfall_BottomAnim 3.gif",
        "frame": {
          "x": 48,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "sourceSize": {
          "w": 16,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "Waterfall_BottomAnim 4.gif",
        "frame": {
          "x": 64,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "sourceSize": {
          "w": 16,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "Waterfall_BottomAnim 5.gif",
        "frame": {
          "x": 80,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 16,
          "h": 32
        },
        "sourceSize": {
          "w": 16,
          "h": 32
        },
        "duration": 100
      }],
      "meta": {
        "app": "http://www.aseprite.org/",
        "version": "1.2.19.2-x64",
        "image": "waterfall_32.png",
        "format": "RGBA8888",
        "size": {
          "w": 96,
          "h": 32
        },
        "scale": "1",
        "frameTags": [{
          "name": "Loop",
          "from": 0,
          "to": 5,
          "direction": "forward"
        }],
        "layers": [{
          "name": "Layer",
          "opacity": 255,
          "blendMode": "normal"
        }],
        "slices": []
      }
    };
  }, {}],
  "waterfall_bottom.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var aseprite_1 = __importDefault(require("./aseprite"));

    var waterfall_32_json_1 = __importDefault(require("./sprites/waterfall_32.json"));

    var WaterfallBottom =
    /** @class */
    function () {
      function WaterfallBottom(pos) {
        this.sprite = new aseprite_1["default"](waterfall_32_json_1["default"]);
        this.pos = pos;
      }

      WaterfallBottom.prototype.render = function (context) {
        this.sprite.play('Loop');
        this.sprite.render(context, this.pos);
      };

      WaterfallBottom.prototype.update = function (dt) {
        this.sprite.update(dt);
      };

      return WaterfallBottom;
    }();

    exports["default"] = WaterfallBottom;
  }, {
    "./aseprite": "aseprite.ts",
    "./sprites/waterfall_32.json": "sprites/waterfall_32.json"
  }],
  "level.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var solid_1 = __importDefault(require("./solid"));

    var tile_1 = __importDefault(require("./tile"));

    var vec2_1 = __importDefault(require("./vec2"));

    var movingwall_1 = __importDefault(require("./movingwall"));

    var spike_1 = __importDefault(require("./spike"));

    var utils_1 = require("./utils");

    var waterfall_bottom_1 = __importDefault(require("./waterfall_bottom"));

    var xBuf = utils_1.CONSTANTS.WIDTH / 2;

    var Level =
    /** @class */
    function () {
      function Level() {
        var _this = this;

        this.loaded = false;
        this.levelWidth = 320;
        this.levelHeight = 180;
        this.tileset = new Image();
        this.player = null;
        this.actors = [];
        this.solids = [];
        this.decals = [];
        this.tileLayers = {};
        this.tileset.src = './maps/tileset.png';
        this.tileset.addEventListener('load', function () {
          _this.loaded = true;
        });
      }

      Level.prototype.clear = function () {
        this.solids = [];
        this.decals = [];
        this.tileLayers = {};
        this.createBounds();
      };

      Level.prototype.createBounds = function () {
        // Bounds
        this.addSolid(new solid_1["default"](new vec2_1["default"](this.levelWidth / 2, 0), new vec2_1["default"](this.levelWidth / 2, 0))); // TOP

        this.addSolid(new solid_1["default"](new vec2_1["default"](this.levelWidth - 1, this.levelHeight / 2), new vec2_1["default"](0, this.levelHeight / 2))); // RIGHT

        this.addSolid(new solid_1["default"](new vec2_1["default"](this.levelWidth / 2, this.levelHeight - 1), new vec2_1["default"](this.levelWidth / 2, 0))); // BOTTOM

        this.addSolid(new solid_1["default"](new vec2_1["default"](0, this.levelHeight / 2), new vec2_1["default"](0, this.levelHeight / 2))); // LEFT
      };

      Level.prototype.createTiles = function (layer, tiles) {
        var gridCellWidth = tiles.gridCellWidth,
            gridCellHeight = tiles.gridCellHeight,
            data = tiles.data,
            gridCellsX = tiles.gridCellsX,
            gridCellsY = tiles.gridCellsY;
        var tileLayer = [];

        for (var row = 0; row < gridCellsY - 1; row++) {
          for (var col = 0; col < gridCellsX; col++) {
            var tile = data[gridCellsX * row + col];

            if (tile === -1) {
              continue;
            }

            var sx = tile % 16;
            var sy = Math.floor(tile / 16);
            var half = new vec2_1["default"](8 / 2, 8 / 2);
            var pos = new vec2_1["default"](col * 8 + half.x, row * 8 + half.y);
            tileLayer.push(new tile_1["default"](sx * 8, sy * 8, 8, 8, pos.x - half.x + 0.5, pos.y - half.y + 0.5, 8, 8));
          }
        }

        this.tileLayers[layer] = tileLayer;
      };

      Level.prototype.createEntities = function (entities) {
        var gridCellWidth = entities.gridCellWidth,
            gridCellHeight = entities.gridCellHeight;

        for (var _i = 0, _a = entities.entities; _i < _a.length; _i++) {
          var entity = _a[_i];
          var x = entity.x,
              y = entity.y,
              width = entity.width,
              height = entity.height,
              values = entity.values,
              name = entity.name;
          var half = new vec2_1["default"](width / 2, height / 2);
          var pos = new vec2_1["default"](x + half.x, y + half.y);

          switch (name) {
            case 'blocking_wall':
              this.solids.push(new solid_1["default"](pos, half));
              break;

            case 'moving_platform':
              var distance = values.distance,
                  direction = values.direction,
                  speed = values.speed;
              this.solids.push(new movingwall_1["default"](pos, half, new vec2_1["default"](distance, 0), speed, direction));
              break;

            case 'spikes':
              this.solids.push(new spike_1["default"](pos, half));
              break;

            case 'player':
              this.player.position.x = x;
              this.player.position.y = y;
              break;

            case 'waterfall_bottom':
              this.decals.push(new waterfall_bottom_1["default"](new vec2_1["default"](x + 8, y + 24)));
              break;

            default:
              break;
          }
        }
      };

      Level.prototype.draw = function (context) {
        if (!this.loaded) {
          return;
        }

        for (var _i = 0, _a = this.tileLayers.back; _i < _a.length; _i++) {
          var tile = _a[_i];
          tile.draw(context, this.tileset);
        }

        for (var _b = 0, _c = this.tileLayers.middle; _b < _c.length; _b++) {
          var tile = _c[_b];
          tile.draw(context, this.tileset);
        }

        this.player.render(context);

        for (var _d = 0, _e = this.tileLayers.front; _d < _e.length; _d++) {
          var tile = _e[_d];
          tile.draw(context, this.tileset);
        }

        for (var _f = 0, _g = this.decals; _f < _g.length; _f++) {
          var decal = _g[_f];
          decal.render(context);
        }
      };

      Level.prototype.load = function (context, level) {
        console.log(level);
        this.levelWidth = level.width;
        this.levelHeight = level.height;
        this.createBounds();
        this.createEntities(level.layers.find(function (layer) {
          return layer.name === 'entities';
        }));
        this.createTiles('back', level.layers.find(function (layer) {
          return layer.name === 'back';
        }));
        this.createTiles('middle', level.layers.find(function (layer) {
          return layer.name === 'middle';
        }));
        this.createTiles('front', level.layers.find(function (layer) {
          return layer.name === 'front';
        }));
      };

      Level.prototype.addPlayer = function (player) {
        this.actors.push(player);
        this.player = player;
      };

      Level.prototype.addActor = function (actor) {
        this.actors.push(actor);
      };

      Level.prototype.addSolid = function (solid) {
        this.solids.push(solid);
      };

      Level.prototype.render = function (context) {
        var camPosX = -utils_1.clamp(this.player.position.x - this.player.half.x - xBuf, 0, this.levelWidth - utils_1.CONSTANTS.WIDTH);
        context.translate(camPosX + 0.5, 0.5);

        for (var _i = 0, _a = this.solids; _i < _a.length; _i++) {
          var solid = _a[_i];

          if (solid instanceof movingwall_1["default"]) {
            solid.drawAABB(context, '#ff0000');
          }
        }

        this.player.render(context);
        this.draw(context);
      };

      Level.prototype.update = function (dt) {
        for (var _i = 0, _a = this.decals; _i < _a.length; _i++) {
          var decal = _a[_i];
          decal.update(dt);
        }
      };

      return Level;
    }();

    exports["default"] = new Level();
  }, {
    "./solid": "solid.ts",
    "./tile": "tile.ts",
    "./vec2": "vec2.ts",
    "./movingwall": "movingwall.ts",
    "./spike": "spike.ts",
    "./utils": "utils.ts",
    "./waterfall_bottom": "waterfall_bottom.ts"
  }],
  "actor.ts": [function (require, module, exports) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var entity_1 = __importDefault(require("./entity"));

    var level_1 = __importDefault(require("./level"));

    var utils_1 = require("./utils");

    var vec2_1 = __importDefault(require("./vec2"));
    /**
     * Actors are are physics objects, such as Players, projectiles.
     * Anything that has to move and interact with the level.
     */


    var Actor =
    /** @class */
    function (_super) {
      __extends(Actor, _super);

      function Actor() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Actor.prototype.moveX = function (amount, onCollide) {
        this.xRemainder += amount;
        var move = Math.round(this.xRemainder);

        if (move !== 0) {
          this.xRemainder -= move;
          var sign = Math.sign(move);

          while (move !== 0) {
            var collision = utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, new vec2_1["default"](sign, 0)), this.half);

            if (!collision.collided) {
              // No solid immeidately beside us
              this.position.x += sign;
              move -= sign;
            } else {
              if (typeof onCollide === "function") {
                onCollide(collision.collider, sign);
              }

              break;
            }
          }
        }
      };

      Actor.prototype.moveY = function (amount, onCollide) {
        this.yRemainder += amount;
        var move = Math.round(this.yRemainder);

        if (move !== 0) {
          this.yRemainder -= move;
          var sign = Math.sign(move);

          while (move !== 0) {
            var collision = utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, new vec2_1["default"](0, sign)), this.half);

            if (!collision.collided) {
              // No solid immeidately beside us
              this.position.y += sign;
              move -= sign;
            } else {
              if (typeof onCollide === "function") {
                onCollide(collision.collider, sign);
              }

              break;
            }
          }
        }
      };
      /**
       * Checks whether or not this actor is riding the given sold.
       * This should be overriden by actors.
       * @param {Solid} solid
       */


      Actor.prototype.isRiding = function (solid) {
        var down = vec2_1["default"].addTwo(this.position, new vec2_1["default"](0, 1));
        return solid.collidable && solid.intersectPoint(down, this.half);
      };
      /**
       * A callback that is called when the actor is squished between solids.
       * This should be overriden by actors.
       */


      Actor.prototype.squish = function () {};

      return Actor;
    }(entity_1["default"]);

    exports["default"] = Actor;
  }, {
    "./entity": "entity.ts",
    "./level": "level.ts",
    "./utils": "utils.ts",
    "./vec2": "vec2.ts"
  }],
  "keys.ts": [function (require, module, exports) {
    "use strict";

    exports.__esModule = true;

    var Keyboard =
    /** @class */
    function () {
      function Keyboard() {
        var _this = this;

        this.previous = {};
        this.current = {};
        this.next = {};
        window.addEventListener('keydown', function (event) {
          _this.next[event.code] = true;
        });
        window.addEventListener('keyup', function (event) {
          _this.next[event.code] = false;
        });
      }

      Keyboard.prototype.update = function () {
        for (var _i = 0, _a = Object.keys(this.next); _i < _a.length; _i++) {
          var key = _a[_i];
          this.previous[key] = this.current[key];
          this.current[key] = this.next[key];
        }
      };

      Keyboard.prototype.check = function (key) {
        for (var _i = 0, _a = key.codes; _i < _a.length; _i++) {
          var code = _a[_i];

          if (this.current[code]) {
            return true;
          }
        }

        return false;
      };

      Keyboard.prototype.pressed = function (key) {
        for (var _i = 0, _a = key.codes; _i < _a.length; _i++) {
          var code = _a[_i];

          if (this.current[code] && !this.previous[code]) {
            return true;
          }
        }

        return false;
      };

      Keyboard.prototype.released = function (key) {
        for (var _i = 0, _a = key.codes; _i < _a.length; _i++) {
          var code = _a[_i];

          if (!this.current[code] && this.previous[code]) {
            return true;
          }
        }

        return false;
      };

      return Keyboard;
    }();

    var Key =
    /** @class */
    function () {
      function Key(name) {
        var codes = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          codes[_i - 1] = arguments[_i];
        }

        this.codes = [];
        this.name = name;
        this.codes = codes;
      }

      return Key;
    }();

    exports.keyboard = new Keyboard();
    exports.JUMP = new Key('jump', 'Space', 'KeyC');
    exports.LEFT = new Key('left', 'KeyA', 'ArrowLeft');
    exports.RIGHT = new Key('right', 'KeyD', 'ArrowRight');
    exports.TELEPORT = new Key('teleport', 'KeyX');
  }, {}],
  "sprites/player_v2.json": [function (require, module, exports) {
    module.exports = {
      "frames": [{
        "filename": "player_test 0.aseprite",
        "frame": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 1.aseprite",
        "frame": {
          "x": 32,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 2.aseprite",
        "frame": {
          "x": 64,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 3.aseprite",
        "frame": {
          "x": 96,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 4.aseprite",
        "frame": {
          "x": 128,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 5.aseprite",
        "frame": {
          "x": 160,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 6.aseprite",
        "frame": {
          "x": 192,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }, {
        "filename": "player_test 7.aseprite",
        "frame": {
          "x": 224,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {
          "x": 0,
          "y": 0,
          "w": 32,
          "h": 32
        },
        "sourceSize": {
          "w": 32,
          "h": 32
        },
        "duration": 100
      }],
      "meta": {
        "app": "http://www.aseprite.org/",
        "version": "1.2.13-x64",
        "image": "player_v2.png",
        "format": "RGBA8888",
        "size": {
          "w": 256,
          "h": 32
        },
        "scale": "1",
        "frameTags": [{
          "name": "IdleLeft",
          "from": 0,
          "to": 0,
          "direction": "forward"
        }, {
          "name": "IdleRight",
          "from": 1,
          "to": 1,
          "direction": "forward"
        }, {
          "name": "RunLeft",
          "from": 2,
          "to": 4,
          "direction": "forward"
        }, {
          "name": "RunRight",
          "from": 5,
          "to": 7,
          "direction": "forward"
        }],
        "layers": [{
          "name": "Player",
          "opacity": 255,
          "blendMode": "normal"
        }],
        "slices": []
      }
    };
  }, {}],
  "playersprite.ts": [function (require, module, exports) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var aseprite_1 = __importDefault(require("./aseprite"));

    var player_v2_json_1 = __importDefault(require("./sprites/player_v2.json"));

    var PlayerSprite =
    /** @class */
    function (_super) {
      __extends(PlayerSprite, _super);

      function PlayerSprite() {
        return _super.call(this, player_v2_json_1["default"]) || this;
      }

      return PlayerSprite;
    }(aseprite_1["default"]);

    exports["default"] = PlayerSprite;
  }, {
    "./aseprite": "aseprite.ts",
    "./sprites/player_v2.json": "sprites/player_v2.json"
  }],
  "player.ts": [function (require, module, exports) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var actor_1 = __importDefault(require("./actor"));

    var level_1 = __importDefault(require("./level"));

    var vec2_1 = __importDefault(require("./vec2"));

    var keys_1 = require("./keys");

    var utils_1 = require("./utils");

    var playersprite_1 = __importDefault(require("./playersprite"));

    var spike_1 = __importDefault(require("./spike"));

    var MAX_RUN = 90;
    var RUN_ACCEL = 1000;
    var RUN_REDUCE = 400;
    var AIR_MULT = 0.65;
    var MAX_FALL = 160;
    var GRAVITY = 900;
    var HALF_GRAV_THRESHOLD = 40;
    var FAST_MAX_ACCEL = 300;
    var JUMP_GRACE_TIME = 0.1;
    var JUMP_SPEED = -105;
    var JUMP_H_BOOST = 40;
    var VAR_JUMP_TIME = 0.2;
    var CEILING_VAR_JUMP_GRACE = 0.05;
    var WALL_SLIDE_START_MAX = 20;
    var WALL_SLIDE_TIME = 1.2;
    var WALL_JUMP_CHECK_DIST = 3;
    var WALL_JUMP_FORCE_TIME = 0.16;
    var WALL_JUMP_H_SPEED = MAX_RUN + JUMP_H_BOOST;
    var WALL_SPEED_RENTENTION_TIME = 0.06;
    var AUTO_JUMP_TIME = 0.16;
    var TELEPORT_DISTANCE = 54;
    var TELEPORT_TIME = 1.5;

    var Player =
    /** @class */
    function (_super) {
      __extends(Player, _super);

      function Player() {
        var _this = _super.call(this, new vec2_1["default"](4, 150), new vec2_1["default"](4, 6)) || this;

        _this.sprite = new playersprite_1["default"]();
        _this.speed = new vec2_1["default"](0, 0);
        _this.moveDir = 0;
        _this.facing = 1;
        _this.moveXAmount = 0;
        _this.grounded = false;
        _this.forceMoveX = 0;
        _this.forceMoveXTimer = 0;
        _this.maxFall = MAX_FALL;
        _this.jumpGraceTimer = JUMP_GRACE_TIME;
        _this.varJumpSpeed = 0;
        _this.varJumpTimer = VAR_JUMP_TIME;
        _this.wallSlideTimer = WALL_SLIDE_TIME;
        _this.wallSlideDir = 0;
        _this.wallBoostDir = 0;
        _this.wallBoostTimer = 0;
        _this.wallSpeedRententionTimer = WALL_SPEED_RENTENTION_TIME;
        _this.wallSpeedRetained = 0;
        _this.autoJump = true;
        _this.autoJumpTimer = AUTO_JUMP_TIME;
        _this.teleportTimer = 0;
        _this.onCollideH = _this.onCollideH.bind(_this);
        _this.onCollideV = _this.onCollideV.bind(_this);
        return _this;
      }

      Player.prototype.shouldDie = function (collider) {
        if (collider instanceof spike_1["default"]) {
          console.log('Touched spike!');
          this.squish();
        }
      };

      Player.prototype.onCollideH = function (collider) {
        this.shouldDie(collider);

        if (this.wallSpeedRententionTimer <= 0) {
          this.wallSpeedRetained = this.speed.x;
          this.wallSpeedRententionTimer = WALL_SPEED_RENTENTION_TIME;
        }

        this.speed.x = 0;
      };

      Player.prototype.onCollideV = function (collider) {
        this.shouldDie(collider);

        if (this.speed.y < 0) {
          if (this.varJumpTimer < VAR_JUMP_TIME - CEILING_VAR_JUMP_GRACE) {
            this.varJumpTimer = 0;
          }
        }

        this.speed.y = 0;
      };

      Player.prototype.isGrounded = function () {
        var down = vec2_1["default"].addTwo(this.position, new vec2_1["default"](0, 1));

        var _a = utils_1.collideAt(level_1["default"].solids, down, this.half),
            collider = _a.collider,
            collided = _a.collided;

        this.shouldDie(collider);
        return collided;
      };

      Player.prototype.render = function (context) {
        if (this.moveDir !== 0) {
          this.facing = this.moveDir;
        }

        var pos = this.position.clone();

        if (this.facing === 1) {
          pos.x = pos.x - this.half.x - 4;
        } else {
          pos.x = pos.x - this.half.x;
        }

        if (this.isGrounded()) {
          if (this.speed.x < 0) {
            this.sprite.play('RunLeft');
          } else if (this.speed.x > 0) {
            this.sprite.play('RunRight');
          } else if (this.facing === 1) {
            this.sprite.play('IdleRight');
          } else {
            this.sprite.play('IdleLeft');
          }
        } else {
          if (this.facing === 1) {
            this.sprite.play('IdleRight');
          } else {
            this.sprite.play('IdleLeft');
          }
        }

        this.sprite.render(context, this.position);
      };

      Player.prototype.update = function (dt) {
        if (this.speed.y >= 0) {
          this.grounded = this.isGrounded();
        } else {
          this.grounded = false;
        }

        if (this.wallSlideDir !== 0) {
          this.wallSlideTimer = Math.max(this.wallSlideTimer - dt, 0);
          this.wallSlideDir = 0;
        }

        if (this.wallBoostTimer > 0) {
          this.wallBoostTimer -= dt;

          if (this.moveXAmount === this.wallBoostDir) {
            this.speed.x = WALL_JUMP_H_SPEED * this.moveXAmount;
            this.wallBoostTimer = 0;
          }
        }

        if (this.grounded) {
          this.jumpGraceTimer = JUMP_GRACE_TIME;
          this.wallSlideTimer = WALL_SLIDE_TIME;
          this.autoJump = false;
        } else if (this.jumpGraceTimer > 0) {
          this.jumpGraceTimer -= dt;
        }

        if (this.varJumpTimer > 0) {
          this.varJumpTimer -= dt;
        }

        if (this.autoJumpTimer > 0) {
          if (this.autoJump) {
            this.autoJumpTimer -= dt;

            if (this.autoJumpTimer <= 0) {
              this.autoJump = false;
            }
          } else {
            this.autoJumpTimer = 0;
          }
        }

        if (this.forceMoveXTimer > 0) {
          this.forceMoveXTimer -= dt;
          this.moveXAmount = this.forceMoveX;
        } else {
          this.moveXAmount = this.moveDir;
        } // Retain moving speed if there is no further collision ahead


        if (this.wallSpeedRententionTimer > 0) {
          if (Math.sign(this.speed.x) === -Math.sign(this.wallSpeedRetained)) {
            this.wallSpeedRententionTimer = 0;
          } else if (!utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, new vec2_1["default"](Math.sign(this.wallSpeedRetained), 0)), this.half).collided) {
            this.speed.x = this.wallSpeedRetained;
            this.wallSpeedRententionTimer = 0;
          } else {
            this.wallSpeedRententionTimer -= dt;
          }
        }

        this.normalUpdate(dt);
        this.moveX(this.speed.x * dt, this.onCollideH);
        this.moveY(this.speed.y * dt, this.onCollideV);
        this.handleInput();
        this.sprite.update(dt);
      };

      Player.prototype.normalUpdate = function (dt) {
        var mult = this.grounded ? 1 : AIR_MULT; // H-movement

        if (Math.abs(this.speed.x) > MAX_RUN && Math.sign(this.speed.x) === this.moveXAmount) {
          this.speed.x = utils_1.approach(this.speed.x, MAX_RUN * this.moveXAmount, RUN_REDUCE * mult * dt);
        } else {
          this.speed.x = utils_1.approach(this.speed.x, MAX_RUN * this.moveXAmount, RUN_ACCEL * mult * dt);
        } // V-movement


        this.maxFall = utils_1.approach(this.maxFall, MAX_FALL, FAST_MAX_ACCEL * dt);

        if (!this.grounded) {
          var max = this.maxFall;

          if (this.moveXAmount === this.facing) {
            var wallPos = new vec2_1["default"](this.facing, 0);

            if (this.speed.y >= 0 && this.wallSlideTimer > 0 && utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, wallPos), this.half).collided) {
              this.wallSlideDir = this.facing;
            }

            if (this.wallSlideDir !== 0) {
              max = utils_1.lerp(MAX_FALL, WALL_SLIDE_START_MAX, this.wallSlideTimer / WALL_SLIDE_TIME);

              if (this.wallSlideTimer / WALL_SLIDE_TIME > 0.65) {// spawn wall sliding particles here
              }
            }
          }

          var mult_1 = Math.abs(this.speed.y) < HALF_GRAV_THRESHOLD && (keys_1.keyboard.check(keys_1.JUMP) || this.autoJump) ? 0.5 : 1;
          this.speed.y = utils_1.approach(this.speed.y, max, GRAVITY * mult_1 * dt);
        }

        if (this.varJumpTimer > 0) {
          if (this.autoJump && !keys_1.keyboard.check(keys_1.JUMP)) {
            console.log('auto jumping');
          }

          if (this.autoJump || keys_1.keyboard.check(keys_1.JUMP)) {
            this.speed.y = Math.min(this.speed.y, this.varJumpSpeed);
          } else {
            this.varJumpTimer = 0;
          }
        }

        if (this.teleportTimer > 0) {
          this.teleportTimer -= dt;
        }
      };

      Player.prototype.teleport = function () {
        if (this.teleportTimer <= 0) {
          this.moveX(TELEPORT_DISTANCE * this.facing, function () {});
          this.teleportTimer = TELEPORT_TIME;
        }
      };

      Player.prototype.jump = function () {
        this.varJumpTimer = VAR_JUMP_TIME;
        this.jumpGraceTimer = 0;
        this.autoJump = false;
        this.speed.x += JUMP_H_BOOST * this.moveXAmount;
        this.speed.y = JUMP_SPEED;
        this.varJumpSpeed = this.speed.y;
        this.wallSlideTimer = WALL_SLIDE_TIME;
        this.wallBoostTimer = 0;
      };

      Player.prototype.wallJumpCheck = function (dir) {
        var wallDist = new vec2_1["default"](dir * WALL_JUMP_CHECK_DIST, 0);
        return utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, wallDist), this.half).collided;
      };

      Player.prototype.wallJump = function (dir) {
        this.jumpGraceTimer = 0;
        this.varJumpTimer = VAR_JUMP_TIME;
        this.wallSlideTimer = WALL_SLIDE_TIME;
        this.wallBoostTimer = 0;
        this.autoJump = false;

        if (this.moveXAmount !== 0) {
          this.forceMoveX = dir;
          this.forceMoveXTimer = WALL_JUMP_FORCE_TIME;
        } // TODO: Lift?


        this.speed.x = WALL_JUMP_H_SPEED * dir;
        this.speed.y = JUMP_SPEED;
        this.varJumpSpeed = this.speed.y;
      };

      Player.prototype.handleInput = function () {
        keys_1.keyboard.update();

        if (keys_1.keyboard.pressed(keys_1.LEFT)) {
          this.moveDir = -1;
        } else if (keys_1.keyboard.released(keys_1.LEFT)) {
          if (keys_1.keyboard.check(keys_1.RIGHT)) {
            this.moveDir = 1;
          } else {
            this.moveDir = 0;
          }
        }

        if (keys_1.keyboard.pressed(keys_1.RIGHT)) {
          this.moveDir = 1;
        } else if (keys_1.keyboard.released(keys_1.RIGHT)) {
          if (keys_1.keyboard.check(keys_1.LEFT)) {
            this.moveDir = -1;
          } else {
            this.moveDir = 0;
          }
        }

        if (keys_1.keyboard.pressed(keys_1.JUMP)) {
          if (this.jumpGraceTimer > 0) {
            this.jump();
            this.autoJumpTimer = AUTO_JUMP_TIME;
          } else {
            if (this.wallJumpCheck(1)) {
              this.wallJump(-1);
            } else if (this.wallJumpCheck(-1)) {
              this.wallJump(1);
            } else {
              this.grounded = false;
            }
          }
        }

        if (keys_1.keyboard.pressed(keys_1.TELEPORT)) {
          this.teleport();
        }
      };

      Player.prototype.squish = function () {
        document.location.reload();
        alert('You died');
      };

      return Player;
    }(actor_1["default"]);

    exports["default"] = Player;
  }, {
    "./actor": "actor.ts",
    "./level": "level.ts",
    "./vec2": "vec2.ts",
    "./keys": "keys.ts",
    "./utils": "utils.ts",
    "./playersprite": "playersprite.ts",
    "./spike": "spike.ts"
  }],
  "mouse.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var utils_1 = require("./utils");

    var sprite_1 = __importDefault(require("./sprite"));

    var vec2_1 = __importDefault(require("./vec2"));

    var level_1 = __importDefault(require("./level"));

    var cross = new Image();
    cross.src = "cross.png";
    var sprite = new sprite_1["default"](cross);
    var debug = document.getElementById("debug");
    exports.mouse = {
      x: 0,
      y: 0,
      gridX: 0,
      gridY: 0
    };

    exports.init = function (canvas) {
      var rect = canvas.getBoundingClientRect();
      var WIDTH = utils_1.CONSTANTS.WIDTH,
          HEIGHT = utils_1.CONSTANTS.HEIGHT,
          GRID_SIZE = utils_1.CONSTANTS.GRID_SIZE,
          SCALE = utils_1.CONSTANTS.SCALE;
      var realGridSize = GRID_SIZE / SCALE;
      canvas.addEventListener("click", function () {
        level_1["default"].fill((exports.mouse.gridX - 4) / 8, (exports.mouse.gridY - 4) / 8);
      });
      canvas.addEventListener("mousemove", function (e) {
        exports.mouse.x = (e.clientX - rect.left) / (rect.right - rect.left) * WIDTH;
        exports.mouse.y = (e.clientY - rect.top) / (rect.bottom - rect.top) * HEIGHT;
        exports.mouse.gridX = exports.mouse.x - exports.mouse.x % realGridSize + realGridSize / 2;
        exports.mouse.gridY = exports.mouse.y - exports.mouse.y % realGridSize + realGridSize / 2;
      });
    };

    exports.draw = function (context) {
      sprite.draw(context, new vec2_1["default"](exports.mouse.gridX - 2, exports.mouse.gridY - 2));
    };
  }, {
    "./utils": "utils.ts",
    "./sprite": "sprite.ts",
    "./vec2": "vec2.ts",
    "./level": "level.ts"
  }],
  "maps/large_level.json": [function (require, module, exports) {
    module.exports = {
      "ogmoVersion": "3.3.0",
      "width": 1280,
      "height": 180,
      "offsetX": 0,
      "offsetY": 0,
      "layers": [{
        "name": "entities",
        "_eid": "44243081",
        "offsetX": 0,
        "offsetY": 0,
        "gridCellWidth": 8,
        "gridCellHeight": 8,
        "gridCellsX": 160,
        "gridCellsY": 24,
        "entities": [{
          "name": "blocking_wall",
          "id": 1,
          "_eid": "02404015",
          "x": 0,
          "y": 128,
          "width": 48,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 2,
          "_eid": "02404015",
          "x": 32,
          "y": 136,
          "width": 120,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 3,
          "_eid": "02404015",
          "x": 0,
          "y": 48,
          "width": 48,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 5,
          "_eid": "02404015",
          "x": 0,
          "y": 16,
          "width": 32,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 8,
          "_eid": "02404015",
          "x": 48,
          "y": 16,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 10,
          "_eid": "02404015",
          "x": 24,
          "y": 8,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 11,
          "_eid": "02404015",
          "x": 24,
          "y": 0,
          "width": 32,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 12,
          "_eid": "02404015",
          "x": 48,
          "y": 8,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 13,
          "_eid": "02404015",
          "x": 48,
          "y": 16,
          "width": 184,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 14,
          "_eid": "02404015",
          "x": 96,
          "y": 48,
          "width": 48,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 15,
          "_eid": "02404015",
          "x": 48,
          "y": 16,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "spikes",
          "id": 19,
          "_eid": "62536995",
          "x": 152,
          "y": 152,
          "width": 48,
          "height": 8,
          "originX": 0,
          "originY": 0
        }, {
          "name": "blocking_wall",
          "id": 20,
          "_eid": "02404015",
          "x": 144,
          "y": 144,
          "width": 8,
          "height": 16,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 22,
          "_eid": "02404015",
          "x": 200,
          "y": 136,
          "width": 64,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 23,
          "_eid": "02404015",
          "x": 200,
          "y": 144,
          "width": 8,
          "height": 16,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "waterfall_bottom",
          "id": 26,
          "_eid": "92842537",
          "x": 0,
          "y": 144,
          "originX": 0,
          "originY": 0
        }, {
          "name": "player",
          "id": 27,
          "_eid": "93527378",
          "x": 8,
          "y": 104,
          "originX": 0,
          "originY": 0
        }, {
          "name": "blocking_wall",
          "id": 28,
          "_eid": "02404015",
          "x": 176,
          "y": 72,
          "width": 16,
          "height": 16,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "blocking_wall",
          "id": 29,
          "_eid": "02404015",
          "x": 232,
          "y": 96,
          "width": 48,
          "height": 24,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "flippedX": false,
          "flippedY": false
        }, {
          "name": "moving_platform",
          "id": 30,
          "_eid": "53535118",
          "x": 224,
          "y": 24,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "values": {
            "distance": 0,
            "direction": 1,
            "speed": 1
          }
        }, {
          "name": "moving_platform",
          "id": 31,
          "_eid": "53535118",
          "x": 224,
          "y": 32,
          "width": 40,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "values": {
            "distance": 0,
            "direction": 1,
            "speed": 1
          }
        }, {
          "name": "moving_platform",
          "id": 32,
          "_eid": "53535118",
          "x": 256,
          "y": 16,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "values": {
            "distance": 0,
            "direction": 1,
            "speed": 1
          }
        }, {
          "name": "moving_platform",
          "id": 33,
          "_eid": "53535118",
          "x": 256,
          "y": 24,
          "width": 8,
          "height": 8,
          "originX": 0,
          "originY": 0,
          "rotation": 0,
          "values": {
            "distance": 0,
            "direction": 1,
            "speed": 1
          }
        }]
      }, {
        "name": "front",
        "_eid": "91787141",
        "offsetX": 0,
        "offsetY": 0,
        "gridCellWidth": 8,
        "gridCellHeight": 8,
        "gridCellsX": 160,
        "gridCellsY": 24,
        "tileset": "ancient_temple",
        "data": [-1, -1, 54, 55, 30, 31, 90, 91, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 66, 67, 68, 69, 140, 141, 64, 65, 66, 12, 13, 14, 15, 6, 7, 12, 13, 6, 7, 12, 13, 6, 7, 64, 65, 66, 67, 68, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 82, 83, 84, 85, -1, -1, 80, 81, 82, 28, 29, 30, 31, 22, 23, 28, 29, 22, 23, 28, 29, 22, 23, 80, 81, 82, 83, 84, 48, -1, -1, -1, 52, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 140, 141, 142, -1, -1, -1, -1, 143, -1, -1, -1, -1, -1, 142, 143, -1, 136, 137, 138, 139, 64, 65, 66, -1, 68, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 159, -1, -1, -1, -1, -1, 158, 159, -1, 152, 153, 154, 155, 80, 81, 82, 83, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1, 8, 9, 8, 9, 8, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 137, 138, 102, 103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 152, 118, 119, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 198, 199, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 198, 199, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 214, 215, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 230, 231, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 246, 247, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 18, 19, 18, 19, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 262, 263, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 80, 84, 85, 82, 83, 85, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 121, 122, 123, 120, 278, 279, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 9, 6, 7, -1, -1, -1, -1, 120, 121, 123, 121, 120, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 120, 121, 122, 123, 122, 121, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, 0, 1, 2, 2, 3, 2, 3, 0, 1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1, 0, 1, 0, 1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 21, -1, -1, -1, -1, -1, -1, 16, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, 37, -1, -1, -1, -1, -1, -1, 32, 33, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 53, -1, -1, -1, -1, -1, -1, 32, 33, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 48, 49, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 65, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        "exportMode": 0,
        "arrayMode": 0
      }, {
        "name": "middle",
        "_eid": "91773913",
        "offsetX": 0,
        "offsetY": 0,
        "gridCellWidth": 8,
        "gridCellHeight": 8,
        "gridCellsX": 160,
        "gridCellsY": 24,
        "tileset": "ancient_temple",
        "data": [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 100, 101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 116, 117, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 196, 197, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 212, 213, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 228, 229, -1, 98, 99, 44, 45, 62, 63, 94, 95, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 100, 101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 114, 115, 60, 61, 78, 79, 39, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 116, 117, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 132, 133, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 148, 149, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 164, 165, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 180, 181, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 196, 197, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 212, 213, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 228, 229, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 244, 245, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 260, 261, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 276, 277, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        "exportMode": 0,
        "arrayMode": 0
      }, {
        "name": "back",
        "_eid": "44245481",
        "offsetX": 0,
        "offsetY": 0,
        "gridCellWidth": 8,
        "gridCellHeight": 8,
        "gridCellsX": 160,
        "gridCellsY": 24,
        "tileset": "ancient_temple",
        "data": [50, 51, 34, 35, 35, 50, 51, 50, 34, 35, 34, 35, 34, 35, 34, 34, 35, 34, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 34, 35, 34, 35, 34, 34, 34, 34, 34, 35, 34, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 34, 35, 50, 34, 130, 131, 34, 35, 34, 128, 129, 128, 129, 128, 34, 35, 43, 34, 35, 34, 34, 34, 34, 35, 112, 113, 112, 113, 112, 34, 35, 34, 35, 34, 34, 34, 34, 35, 34, 34, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 50, 51, 51, 50, 146, 147, 50, 51, 50, 144, 145, 144, 145, 144, 145, 58, 59, 50, 51, 50, 50, 50, 50, 51, 96, 97, 96, 97, 96, 39, 40, 41, 96, 34, 35, 34, 34, 34, 34, 34, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 130, 131, 130, 131, 162, 163, 42, 43, 128, 129, 128, 129, 128, 129, 42, 43, 128, 129, 128, 129, 128, 129, 42, 43, 98, 99, 44, 45, 112, 60, 60, 61, 112, 34, 34, 34, 34, 35, 34, 34, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 130, 131, 146, 147, 162, 163, 58, 59, 144, 145, 144, 145, 144, 145, 58, 59, 144, 145, 144, 145, 144, 145, 58, 59, 114, 115, 60, 61, 96, 97, 96, 97, 96, 34, 34, 34, 34, 34, 34, 34, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 146, 147, 147, 131, 178, 179, 96, 97, 66, 67, 66, 67, 78, 79, 78, 79, 78, 79, 130, 131, 130, 131, 46, 47, 35, 34, 50, 51, 46, 47, 96, 96, 97, 96, 97, 34, 35, 34, 34, 35, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 161, 162, 163, 50, 51, 50, 112, 113, 78, 79, 67, 78, 94, 95, 94, 95, 94, 95, 146, 147, 146, 147, 62, 63, 146, 147, 146, 147, 62, 63, 112, 112, 113, 112, 113, 35, 34, 34, 34, 35, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 16, 17, 179, 19, 139, 67, 96, 97, 94, 95, 35, 94, 24, 25, 24, 25, 24, 25, 146, 147, 146, 147, 146, 147, 160, 161, 146, 147, 160, 161, 162, 96, 97, 44, 45, 35, 34, 35, 34, 35, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 32, 161, 162, 163, 96, 97, 112, 113, 160, 161, 160, 161, 162, 163, 160, 161, 162, 163, 160, 161, 162, 163, 160, 161, 176, 177, 162, 163, 176, 177, 178, 98, 99, 60, 61, 34, 34, 35, 34, 35, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 176, 177, 178, 179, 112, 113, 96, 97, 176, 177, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 44, 45, 160, 161, 44, 45, 96, 114, 115, 97, 163, 34, 34, 35, 34, 35, 35, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 129, 177, 98, 99, 96, 97, 112, 113, 128, 129, 128, 129, 42, 43, 128, 129, 42, 43, 128, 129, 42, 43, 128, 129, 60, 61, 176, 177, 60, 61, 112, 113, 112, 113, 179, 34, 34, 34, 34, 35, 35, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 145, 177, 114, 115, 112, 113, 96, 97, 144, 145, 144, 145, 58, 59, 144, 145, 58, 59, 144, 145, 58, 59, 144, 145, 34, 34, 44, 45, 73, 160, 161, 96, 97, 96, 97, 34, 34, 34, 34, 35, 35, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 160, 161, 162, 163, 96, 97, 112, 113, 160, 161, 162, 163, 160, 161, 162, 163, 160, 161, 162, 163, 160, 161, 162, 163, 160, 161, 60, 61, 163, 176, 177, 112, 113, 112, 113, 34, 34, 34, 35, 35, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 176, 177, 178, 179, 112, 113, 96, 97, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 86, 87, 179, 34, 34, 34, 34, 35, 34, 34, 35, 34, 34, 34, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 160, 161, 162, 163, 96, 97, 112, 113, 96, 97, 98, 99, 96, 97, 98, 99, 96, 97, 98, 99, 96, 97, 98, 99, 34, 34, 44, 45, 131, 34, 34, 35, 34, 34, 34, 34, 35, 34, 34, 34, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 176, 177, 178, 179, 112, 113, 96, 97, 112, 113, 114, 115, 112, 113, 114, 115, 112, 113, 114, 115, 112, 113, 114, 115, 160, 161, 60, 61, 161, 176, 177, 161, 162, 163, 177, 34, 35, 34, 34, 34, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 34, 35, 34, 35, 34, 35, 112, 113, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 178, 179, 176, 177, 35, 176, 177, 176, 177, 177, 161, 162, 163, 34, 34, 34, 34, 34, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 98, 99, 24, 25, 50, 51, 50, 51, 50, 51, 34, 35, 34, 34, 34, 34, 35, 35, 34, 35, 34, 34, 34, 35, 147, 113, 112, 113, 112, 113, 112, 113, 34, 35, 34, 35, 34, 35, 34, 34, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 114, 115, 46, 47, 128, 129, 16, 17, 18, 19, 18, 19, 18, 50, 146, 147, 98, 99, 50, 160, 161, 160, 161, 162, 163, 97, 34, 98, 99, 46, 47, 98, 99, 35, 35, 35, 34, 35, 35, 34, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 130, 131, 62, 63, 144, 145, 32, 160, 161, 160, 161, 34, 35, 35, 34, 34, 114, 115, 259, 258, 259, 258, 259, 258, 259, 258, 112, 114, 115, 62, 63, 114, 115, 35, 35, 35, 35, 34, 34, 35, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 130, 131, 160, 161, 162, 160, 161, 162, 160, 161, 162, 163, 130, 131, 131, 130, 131, 52, 274, 274, 275, 274, 275, 274, 275, 274, 34, 43, 96, 97, 44, 45, 78, 35, 35, 35, 35, 34, 34, 35, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 258, 259, 258, 259, 258, 259, 258, 259, 258, 259, 258, 259, 258, 259, 258, 259, 258, 259, 274, 274, 275, 275, 274, 275, 274, 274, 34, 59, 112, 113, 60, 61, 94, 35, 34, 34, 34, 35, 34, 34, 34, 34, 35, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 113, 112, 274, 275, 275, 275, 274, 275, 275, 275, 274, 275, 275, 275, 274, 275, 275, 275, 274, 274, 275, 275, 275, 274, 275, 274, 275, 274, -1, 34, 34, 34, 34, 35, 34, 34, 34, 35, 34, 35, 34, 35, 34, 34, 35, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96],
        "exportMode": 0,
        "arrayMode": 0
      }]
    };
  }, {}],
  "node_modules/stats.js/build/stats.min.js": [function (require, module, exports) {
    var define; // stats.js - http://github.com/mrdoob/stats.js

    (function (f, e) {
      "object" === _typeof(exports) && "undefined" !== typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define(e) : f.Stats = e();
    })(this, function () {
      var f = function f() {
        function e(a) {
          c.appendChild(a.dom);
          return a;
        }

        function u(a) {
          for (var d = 0; d < c.children.length; d++) {
            c.children[d].style.display = d === a ? "block" : "none";
          }

          l = a;
        }

        var l = 0,
            c = document.createElement("div");
        c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
        c.addEventListener("click", function (a) {
          a.preventDefault();
          u(++l % c.children.length);
        }, !1);
        var k = (performance || Date).now(),
            g = k,
            a = 0,
            r = e(new f.Panel("FPS", "#0ff", "#002")),
            h = e(new f.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));
        u(0);
        return {
          REVISION: 16,
          dom: c,
          addPanel: e,
          showPanel: u,
          begin: function begin() {
            k = (performance || Date).now();
          },
          end: function end() {
            a++;
            var c = (performance || Date).now();
            h.update(c - k, 200);

            if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
              var d = performance.memory;
              t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
            }

            return c;
          },
          update: function update() {
            k = this.end();
          },
          domElement: c,
          setMode: u
        };
      };

      f.Panel = function (e, f, l) {
        var c = Infinity,
            k = 0,
            g = Math.round,
            a = g(window.devicePixelRatio || 1),
            r = 80 * a,
            h = 48 * a,
            t = 3 * a,
            v = 2 * a,
            d = 3 * a,
            m = 15 * a,
            n = 74 * a,
            p = 30 * a,
            q = document.createElement("canvas");
        q.width = r;
        q.height = h;
        q.style.cssText = "width:80px;height:48px";
        var b = q.getContext("2d");
        b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
        b.textBaseline = "top";
        b.fillStyle = l;
        b.fillRect(0, 0, r, h);
        b.fillStyle = f;
        b.fillText(e, t, v);
        b.fillRect(d, m, n, p);
        b.fillStyle = l;
        b.globalAlpha = .9;
        b.fillRect(d, m, n, p);
        return {
          dom: q,
          update: function update(h, w) {
            c = Math.min(c, h);
            k = Math.max(k, h);
            b.fillStyle = l;
            b.globalAlpha = 1;
            b.fillRect(0, 0, r, m);
            b.fillStyle = f;
            b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);
            b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
            b.fillRect(d + n - a, m, a, p);
            b.fillStyle = l;
            b.globalAlpha = .9;
            b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
          }
        };
      };

      return f;
    });
  }, {}],
  "index.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    exports.__esModule = true;

    var level_1 = __importDefault(require("./level"));

    var player_1 = __importDefault(require("./player"));

    var utils_1 = require("./utils");

    var mouse_1 = require("./mouse");

    var large_level_json_1 = __importDefault(require("./maps/large_level.json"));

    var level_2 = __importDefault(require("./level"));

    var stats_js_1 = __importDefault(require("stats.js"));

    var levelLoader = document.getElementById('level');
    var loadButton = document.getElementById('load');
    var stats = new stats_js_1["default"]();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);
    var canvas = document.getElementById('canvas');
    canvas.width = utils_1.CONSTANTS.WIDTH;
    canvas.height = utils_1.CONSTANTS.HEIGHT;
    var context = canvas.getContext('2d');
    context.translate(0.5, 0.5);
    context.imageSmoothingEnabled = false;
    loadButton.addEventListener('click', function () {
      var data = JSON.parse(levelLoader.value);
      level_1["default"].clear();
      level_1["default"].load(context, data);
    });
    var player = new player_1["default"]();
    level_2["default"].addPlayer(player);
    level_1["default"].load(context, large_level_json_1["default"]);
    var start;

    var init = function init() {
      start = performance.now();
      mouse_1.init(canvas);
    };

    var update = function update(dt) {
      for (var _i = 0, _a = level_1["default"].actors; _i < _a.length; _i++) {
        var actor = _a[_i];
        actor.update(dt);
      }

      for (var _b = 0, _c = level_1["default"].solids; _b < _c.length; _b++) {
        var solid = _c[_b];
        solid.update(dt);
      }

      level_2["default"].update(dt);
    };

    var xBuf = utils_1.CONSTANTS.WIDTH / 2;

    var render = function render() {
      utils_1.clearDraw(context);
      level_2["default"].render(context); // for (const actor of Level.actors) {
      // actor.drawAABB(context, "#eb34de");
      // }

      mouse_1.draw(context);
    };

    var tick = function tick(now) {
      stats.begin();
      var dt = (now - start) / 1000;
      start = now;
      update(dt);
      render();
      stats.end();
      requestAnimationFrame(tick);
    };

    init();
    requestAnimationFrame(tick);
  }, {
    "./level": "level.ts",
    "./player": "player.ts",
    "./utils": "utils.ts",
    "./mouse": "mouse.ts",
    "./maps/large_level.json": "maps/large_level.json",
    "stats.js": "node_modules/stats.js/build/stats.min.js"
  }],
  "node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };
      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var checkedAssets, assetsToAccept;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = "" || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "54958" + '/');

      ws.onmessage = function (event) {
        checkedAssets = {};
        assetsToAccept = [];
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          var handled = false;
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

              if (didAccept) {
                handled = true;
              }
            }
          }); // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js;
          });

          if (handled) {
            console.clear();
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset);
            });
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1]);
            });
          } else {
            window.location.reload();
          }
        }

        if (data.type === 'reload') {
          ws.close();

          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');
          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
          removeErrorOverlay();
          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);

      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID; // html encode message and stack trace

      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAcceptCheck(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id);
      }

      if (checkedAssets[id]) {
        return;
      }

      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToAccept.push([bundle, id]);

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id);
      });
    }

    function hmrAcceptRun(bundle, id) {
      var cached = bundle.cache[id];
      bundle.hotData = {};

      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);
      cached = bundle.cache[id];

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });

        return true;
      }
    }
  }, {}]
}, {}, ["node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "index.ts"], null);
},{}]