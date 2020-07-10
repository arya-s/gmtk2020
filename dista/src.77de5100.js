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
})({"../node_modules/stats.js/build/stats.min.js":[function(require,module,exports) {
var define;
// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){"object"===typeof exports&&"undefined"!==typeof module?module.exports=e():"function"===typeof define&&define.amd?define(e):f.Stats=e()})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});

},{}],"vec2.ts":[function(require,module,exports) {
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

  Vec2.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
  };

  return Vec2;
}();

exports["default"] = Vec2;
},{}],"grid.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var vec2_1 = __importDefault(require("./vec2"));

var GridCell;

(function (GridCell) {
  GridCell["Empty"] = "0";
  GridCell["Blocking"] = "1";
})(GridCell = exports.GridCell || (exports.GridCell = {}));

var Grid =
/** @class */
function () {
  function Grid() {
    this.grid = [[]];
    this.collisionGrid = {};
    this.loaded = false;
  }

  Grid.prototype.init = function (_a) {
    var _this = this;

    var grid = _a.grid,
        gridCellWidth = _a.gridCellWidth,
        gridCellHeight = _a.gridCellHeight,
        gridCellsX = _a.gridCellsX,
        gridCellsY = _a.gridCellsY;
    this.cellSize = new vec2_1["default"](gridCellWidth, gridCellHeight);
    this.width = gridCellsX;
    this.height = gridCellsY;
    this.grid = Array(this.height).fill(GridCell.Empty).map(function () {
      return Array(_this.width).fill(GridCell.Empty);
    });
    var x = 0;
    var y = 0;

    for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
      var gridCell = grid_1[_i];
      this.set(x, y, gridCell);
      x++;

      if (x >= this.width) {
        x = 0;
        y++;
      }
    }

    this.loaded = true;
  };

  Grid.prototype.get = function (columnOrPos, row) {
    var x;
    var y;

    if (typeof columnOrPos === 'number' && typeof row === 'number') {
      x = columnOrPos;
      y = row;
    } else {
      x = columnOrPos.x;
      y = columnOrPos.y;
    }

    if (x < 0 || x > this.width - 1) {
      throw new Error("column " + x + " out of bounds: " + this.width);
    }

    if (y < 0 || y > this.height - 1) {
      throw new Error("row " + y + " out of bounds: " + this.height);
    }

    return this.grid[y][x];
  };

  Grid.prototype.set = function (columnOrPos, rowOrGridCell, gridCell) {
    var x;
    var y;
    var value;

    if (typeof columnOrPos === 'number' && typeof rowOrGridCell === 'number') {
      x = columnOrPos;
      y = rowOrGridCell;
      value = gridCell;
    } else {
      x = columnOrPos.x;
      y = columnOrPos.y;
      value = rowOrGridCell;
    }

    if (x < 0 || x > this.width - 1) {
      throw new Error("column " + x + " out of bounds: " + this.width);
    }

    if (y < 0 || y > this.height - 1) {
      throw new Error("row " + y + " out of bounds: " + this.height);
    }

    this.grid[y][x] = value;
  };

  Grid.prototype.isInBounds = function (pos) {
    return pos.x >= 0 && pos.x < this.width && pos.y >= 0 && pos.y < this.height;
  };

  Grid.prototype.collideAt = function (posOrEntity, offset) {
    if (posOrEntity instanceof vec2_1["default"]) {
      var pos = posOrEntity;
      var gridPos = new vec2_1["default"](Math.round(pos.x / this.cellSize.x), Math.round(pos.y / this.cellSize.y));
      return this.isInBounds(gridPos) && this.get(gridPos) !== GridCell.Empty;
    } else {
      var entity = posOrEntity;
      var gridPosFrom = new vec2_1["default"](Math.floor((entity.left() + offset.x) / this.cellSize.x), Math.floor((entity.top() + offset.y) / this.cellSize.y));
      var gridPosTo = new vec2_1["default"](Math.ceil((entity.right() + offset.x) / this.cellSize.x), Math.ceil((entity.bottom() + offset.y) / this.cellSize.y));
      this.collisionGrid = {};

      for (var y = gridPosFrom.y; y < gridPosTo.y; y++) {
        for (var x = gridPosFrom.x; x < gridPosTo.x; x++) {
          var gridPos = new vec2_1["default"](x, y);
          this.collisionGrid[x + ":" + y] = true;

          if (this.isInBounds(gridPos) && this.get(gridPos) !== GridCell.Empty) {
            return true;
          }
        }
      }

      return false;
    }
  };

  Grid.prototype.renderCell = function (context, pos) {
    context.beginPath();
    context.moveTo(pos.x, pos.y);
    context.lineTo(pos.x + this.cellSize.x, pos.y);
    context.lineTo(pos.x + this.cellSize.x, pos.y + this.cellSize.y);
    context.lineTo(pos.x, pos.y + this.cellSize.y);
    context.lineTo(pos.x, pos.y);
    context.closePath();
    context.stroke();
  };

  Grid.prototype.render = function (context, color) {
    if (color === void 0) {
      color = '#cacaca';
    }

    if (this.context === undefined) {
      this.context = context;
    }

    if (!this.loaded) {
      return;
    }

    context.lineWidth = 1;

    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var pos = new vec2_1["default"](x * this.cellSize.x, y * this.cellSize.y);

        if (this.get(x, y) !== GridCell.Empty) {
          context.strokeStyle = '#f00';
          this.renderCell(context, pos);
        }

        if (this.collisionGrid[x + ":" + y]) {
          context.strokeStyle = '#0f0';
          this.renderCell(context, pos);
        }
      }
    }
  };

  return Grid;
}();

exports["default"] = Grid;
},{"./vec2":"vec2.ts"}],"sprite.ts":[function(require,module,exports) {
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
    context.drawImage(this.img, position.x + 0.5, position.y + 0.5); // 0.5 needed for canvas not positioning correctly
  };

  return Sprite;
}();

exports["default"] = Sprite;
},{}],"entity.ts":[function(require,module,exports) {
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
},{"./vec2":"vec2.ts","./sprite":"sprite.ts"}],"utils.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var grid_1 = __importDefault(require("./grid"));

exports.CONSTANTS = {
  WIDTH: 320,
  HEIGHT: 180,
  SCALE: 4,
  GRID_SIZE: 32
};

exports.collideOutsideAt = function (solids, position, half, nextPos) {
  for (var _i = 0, solids_1 = solids; _i < solids_1.length; _i++) {
    var solid = solids_1[_i];

    if (solid.collidable && !solid.intersectPoint(position, half) && solid.intersectPoint(nextPos, half)) {
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

exports.collideAt = function (gridOrSolids, positionOrEntity, halfOrOffset) {
  if (gridOrSolids instanceof grid_1["default"]) {
    var grid = gridOrSolids;
    var entity = positionOrEntity;

    if (grid.collideAt(entity, halfOrOffset)) {
      return {
        collided: true,
        collider: grid
      };
    }
  } else {
    var position = positionOrEntity; // Todo: only test for intersection if the solid is within the camera view

    for (var _i = 0, _a = gridOrSolids; _i < _a.length; _i++) {
      var solid = _a[_i];

      if (solid.collidable && solid.intersectPoint(position, halfOrOffset)) {
        return {
          collided: true,
          collider: solid
        };
      }
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
},{"./grid":"grid.ts"}],"solid.ts":[function(require,module,exports) {
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
},{"./entity":"entity.ts","./level":"level.ts","./utils":"utils.ts"}],"death.ts":[function(require,module,exports) {
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

var Death =
/** @class */
function (_super) {
  __extends(Death, _super);

  function Death() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Death;
}(solid_1["default"]);

exports["default"] = Death;
},{"./solid":"solid.ts"}],"tile.ts":[function(require,module,exports) {
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
},{}],"movingwall.ts":[function(require,module,exports) {
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
},{"./solid":"solid.ts","./vec2":"vec2.ts"}],"spike.ts":[function(require,module,exports) {
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

var KillFrom;

(function (KillFrom) {
  KillFrom[KillFrom["TOP"] = 0] = "TOP";
  KillFrom[KillFrom["TOP_BOTTOM_RIGHT"] = 1] = "TOP_BOTTOM_RIGHT";
  KillFrom[KillFrom["BOTTOM"] = 2] = "BOTTOM";
  KillFrom[KillFrom["TOP_BOTTOM_LEFT"] = 3] = "TOP_BOTTOM_LEFT";
  KillFrom[KillFrom["ALL"] = 4] = "ALL";
})(KillFrom = exports.KillFrom || (exports.KillFrom = {}));

var Spike =
/** @class */
function (_super) {
  __extends(Spike, _super);

  function Spike(pos, half, killFrom) {
    var _this = _super.call(this, pos, half) || this;

    _this.killFrom = KillFrom.TOP;
    _this.killFrom = killFrom;
    return _this;
  }

  Spike.prototype.drawAABB = function (context, color, thickness) {
    if (color === void 0) {
      color = '#979';
    }

    if (thickness === void 0) {
      thickness = 1;
    }

    _super.prototype.drawAABB.call(this, context, color, thickness);
  };

  return Spike;
}(solid_1["default"]);

exports["default"] = Spike;
},{"./solid":"solid.ts"}],"jump_through.ts":[function(require,module,exports) {
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

var level_1 = __importDefault(require("./level"));

var utils_1 = require("./utils");

var JumpThrough =
/** @class */
function (_super) {
  __extends(JumpThrough, _super);

  function JumpThrough() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  JumpThrough.prototype.moveX = function (amount) {
    this.xRemainder += amount;
    var move = Math.round(this.xRemainder);

    if (move !== 0) {
      var riding = this.getAllRidingActors();
      var sign = Math.sign(move);
      this.xRemainder -= move;

      while (move !== 0) {
        this.position.x += sign;

        for (var _i = 0, riding_1 = riding; _i < riding_1.length; _i++) {
          var actor = riding_1[_i];
          actor.moveX(sign, null);
        }
      }

      move -= sign;
    }
  };

  JumpThrough.prototype.moveY = function (amount) {
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
              actor.moveY(sign, null);
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
              actor.moveY(this.top() + sign - actor.bottom(), null);
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

  return JumpThrough;
}(solid_1["default"]);

exports["default"] = JumpThrough;
},{"./solid":"solid.ts","./level":"level.ts","./utils":"utils.ts"}],"aseprite.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var vec2_1 = __importDefault(require("./vec2"));

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

  Aseprite.prototype.render = function (context, position, half) {
    if (half === void 0) {
      half = new vec2_1["default"](0, 10);
    }

    if (!this.loaded) {
      return;
    }

    var frames = this.data.frames;
    var frame = frames[this.activeTag.from + this.activeFrame].frame;
    context.drawImage(this.img, frame.x, frame.y, frame.w, frame.h, position.x - frame.w / 2 + 0.5, position.y - frame.h / 2 - half.y + 0.5, frame.w, frame.h);
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
},{"./vec2":"vec2.ts"}],"../data/sprites/waterfall_32.json":[function(require,module,exports) {
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
},{}],"waterfall_bottom.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var aseprite_1 = __importDefault(require("./aseprite"));

var waterfall_32_json_1 = __importDefault(require("../data/sprites/waterfall_32.json"));

var WaterfallBottom =
/** @class */
function () {
  function WaterfallBottom(pos) {
    this.sprite = new aseprite_1["default"](waterfall_32_json_1["default"]);
    this.pos = pos;
    this.sprite.play('Loop');
  }

  WaterfallBottom.prototype.render = function (context) {
    this.sprite.render(context, this.pos);
  };

  WaterfallBottom.prototype.update = function (dt) {
    this.sprite.update(dt);
  };

  return WaterfallBottom;
}();

exports["default"] = WaterfallBottom;
},{"./aseprite":"aseprite.ts","../data/sprites/waterfall_32.json":"../data/sprites/waterfall_32.json"}],"../data/sprites/SmallProps_Torch.json":[function(require,module,exports) {
module.exports = {
  "frames": [{
    "filename": "SmallProps_Torch 0.gif",
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
    "duration": 90
  }, {
    "filename": "SmallProps_Torch 1.gif",
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
    "duration": 90
  }, {
    "filename": "SmallProps_Torch 2.gif",
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
    "duration": 90
  }, {
    "filename": "SmallProps_Torch 3.gif",
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
    "duration": 90
  }, {
    "filename": "SmallProps_Torch 4.gif",
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
    "duration": 90
  }, {
    "filename": "SmallProps_Torch 5.gif",
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
    "duration": 90
  }],
  "meta": {
    "app": "http://www.aseprite.org/",
    "version": "1.2.19.2-x64",
    "image": "SmallProps_Torch.png",
    "format": "RGBA8888",
    "size": {
      "w": 192,
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
},{}],"small_torch.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var aseprite_1 = __importDefault(require("./aseprite"));

var SmallProps_Torch_json_1 = __importDefault(require("../data/sprites/SmallProps_Torch.json"));

var SmallTorch =
/** @class */
function () {
  function SmallTorch(pos) {
    this.sprite = new aseprite_1["default"](SmallProps_Torch_json_1["default"]);
    this.pos = pos;
    this.sprite.play('Loop');
  }

  SmallTorch.prototype.render = function (context) {
    this.sprite.render(context, this.pos);
  };

  SmallTorch.prototype.update = function (dt) {
    this.sprite.update(dt);
  };

  return SmallTorch;
}();

exports["default"] = SmallTorch;
},{"./aseprite":"aseprite.ts","../data/sprites/SmallProps_Torch.json":"../data/sprites/SmallProps_Torch.json"}],"level.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

exports.__esModule = true;

var grid_1 = __importDefault(require("./grid"));

var solid_1 = __importDefault(require("./solid"));

var death_1 = __importDefault(require("./death"));

var tile_1 = __importDefault(require("./tile"));

var vec2_1 = __importDefault(require("./vec2"));

var movingwall_1 = __importDefault(require("./movingwall"));

var spike_1 = __importStar(require("./spike"));

var jump_through_1 = __importDefault(require("./jump_through"));

var utils_1 = require("./utils");

var waterfall_bottom_1 = __importDefault(require("./waterfall_bottom"));

var small_torch_1 = __importDefault(require("./small_torch"));

var xBuf = utils_1.CONSTANTS.WIDTH / 2;
var yBuf = utils_1.CONSTANTS.HEIGHT / 4;

var Level =
/** @class */
function () {
  function Level() {
    var _this = this;

    this.grid = new grid_1["default"]();
    this.loaded = false;
    this.tileset = new Image();
    this.camPos = new vec2_1["default"](0, 0);
    this.player = null;
    this.actors = [];
    this.solids = [];
    this.jumpThroughs = [];
    this.decals = [];
    this.tileLayers = {};
    this.entityLayers = {};
    this.tileset.src = './maps/tileset.png';
    this.tileset.addEventListener('load', function () {
      _this.loaded = true;
    });
  }

  Level.prototype.clear = function () {
    this.solids = [];
    this.jumpThroughs = [];
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
    var data = tiles.data,
        gridCellsX = tiles.gridCellsX,
        gridCellsY = tiles.gridCellsY;
    var tileLayer = [];

    for (var row = 0; row < gridCellsY; row++) {
      for (var col = 0; col < gridCellsX; col++) {
        var tile = data[gridCellsX * row + col];

        if (tile === -1) {
          continue;
        }

        var sx = tile % 16;
        var sy = Math.floor(tile / 16);
        var half = new vec2_1["default"](this.gridCellWidth / 2, this.gridCellHeight / 2);
        var pos = new vec2_1["default"](col * this.gridCellWidth + half.x, row * this.gridCellHeight + half.y);
        tileLayer.push(new tile_1["default"](sx * this.gridCellWidth, sy * this.gridCellHeight, this.gridCellWidth, this.gridCellHeight, pos.x - half.x + 0.5, pos.y - half.y + 0.5, this.gridCellWidth, this.gridCellHeight));
      }
    }

    this.tileLayers[layer] = tileLayer;
  };

  Level.prototype.createGrid = function (gridData) {
    this.grid.init(gridData);
  };

  Level.prototype.createEntities = function (layer, entities) {
    var gridCellWidth = entities.gridCellWidth,
        gridCellHeight = entities.gridCellHeight;
    var decalLayer = [];

    for (var _i = 0, _a = entities.entities; _i < _a.length; _i++) {
      var entity = _a[_i];
      var x = entity.x,
          y = entity.y,
          width = entity.width,
          height = entity.height,
          originX = entity.originX,
          originY = entity.originY,
          values = entity.values,
          name = entity.name;
      var half = new vec2_1["default"](width / 2, height / 2);
      var pos = new vec2_1["default"](x + half.x - originX, y + half.y - originY);

      switch (name) {
        case 'blocking_wall':
          this.solids.push(new solid_1["default"](pos, half));
          break;

        case 'jump_through':
          this.jumpThroughs.push(new jump_through_1["default"](pos, half));
          break;

        case 'moving_platform':
          var distance = values.distance,
              direction = values.direction,
              speed = values.speed;
          this.solids.push(new movingwall_1["default"](pos, half, new vec2_1["default"](distance, 0), speed, direction));
          break;

        case 'spikes':
          this.solids.push(new spike_1["default"](pos, half, spike_1.KillFrom.TOP));
          break;

        case 'spikes_top':
          this.solids.push(new spike_1["default"](pos, half, spike_1.KillFrom.BOTTOM));
          break;

        case 'spikes_bottom':
          this.solids.push(new spike_1["default"](pos, half, spike_1.KillFrom.TOP));
          break;

        case 'spikes_left':
          this.solids.push(new spike_1["default"](pos, half, spike_1.KillFrom.TOP_BOTTOM_RIGHT));
          break;

        case 'spikes_right':
          this.solids.push(new spike_1["default"](pos, half, spike_1.KillFrom.TOP_BOTTOM_LEFT));
          break;

        case 'spikes_all':
          this.solids.push(new spike_1["default"](pos, half, spike_1.KillFrom.ALL));
          break;

        case 'death':
          this.solids.push(new death_1["default"](pos, half));
          break;

        case 'waterfall_bottom':
          decalLayer.push(new waterfall_bottom_1["default"](new vec2_1["default"](x + this.gridCellWidth, y + this.gridCellHeight * 3)));
          break;

        case 'small_torch':
          decalLayer.push(new small_torch_1["default"](new vec2_1["default"](x + 16, y + 24)));
          break;

        case 'respawn':
          this.respawnPoint = new vec2_1["default"](x, y);
          break;

        default:
          break;
      }
    }

    if (layer) {
      this.entityLayers[layer] = decalLayer;
    }
  };

  Level.prototype.draw = function (context) {
    if (!this.loaded) {
      return;
    }

    for (var _i = 0, _a = this.tileLayers.back; _i < _a.length; _i++) {
      var tile = _a[_i];

      if (tile.dx >= this.camPos.x - 8 && tile.dx <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && tile.dy >= this.camPos.y - 8 && tile.dy <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
        tile.draw(context, this.tileset);
      }
    }

    for (var _b = 0, _c = this.entityLayers.entity_back; _b < _c.length; _b++) {
      var decal = _c[_b];

      if (decal.pos.x >= this.camPos.x - 8 && decal.pos.x <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && decal.pos.y >= this.camPos.y - 8 && decal.pos.y <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
        decal.render(context);
      }
    }

    for (var _d = 0, _e = this.tileLayers.middle; _d < _e.length; _d++) {
      var tile = _e[_d];

      if (tile.dx >= this.camPos.x - 8 && tile.dx <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && tile.dy >= this.camPos.y - 8 && tile.dy <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
        tile.draw(context, this.tileset);
      }
    }

    for (var _f = 0, _g = this.entityLayers.entity_middle; _f < _g.length; _f++) {
      var decal = _g[_f];

      if (decal.pos.x >= this.camPos.x - 8 && decal.pos.x <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && decal.pos.y >= this.camPos.y - 8 && decal.pos.y <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
        decal.render(context);
      }
    }

    this.player.render(context); // this.player.drawAABB(context)

    for (var _h = 0, _j = this.tileLayers.front; _h < _j.length; _h++) {
      var tile = _j[_h];

      if (tile.dx >= this.camPos.x - 8 && tile.dx <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && tile.dy >= this.camPos.y - 8 && tile.dy <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
        tile.draw(context, this.tileset);
      }
    }

    for (var _k = 0, _l = this.entityLayers.entity_front; _k < _l.length; _k++) {
      var decal = _l[_k];

      if (decal.pos.x >= this.camPos.x - 8 && decal.pos.x <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && decal.pos.y >= this.camPos.y - 8 && decal.pos.y <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
        decal.render(context);
      }
    } // this.grid.render(context)

  };

  Level.prototype.load = function (context, level) {
    console.log(level);
    this.levelWidth = level.width;
    this.levelHeight = level.height;
    this.gridCellWidth = level.layers[0].gridCellWidth;
    this.gridCellHeight = level.layers[1].gridCellWidth;
    this.createBounds();
    this.createGrid(level.layers.find(function (layer) {
      return layer.name === 'grid';
    }));
    this.createEntities(null, level.layers.find(function (layer) {
      return layer.name === 'entities';
    }));
    this.createEntities('entity_back', level.layers.find(function (layer) {
      return layer.name === 'entity_back';
    }));
    this.createTiles('back', level.layers.find(function (layer) {
      return layer.name === 'back';
    }));
    this.createEntities('entity_middle', level.layers.find(function (layer) {
      return layer.name === 'entity_middle';
    }));
    this.createTiles('middle', level.layers.find(function (layer) {
      return layer.name === 'middle';
    }));
    this.createEntities('entity_front', level.layers.find(function (layer) {
      return layer.name === 'entity_front';
    }));
    this.createTiles('front', level.layers.find(function (layer) {
      return layer.name === 'front';
    }));
  };

  Level.prototype.addPlayer = function (player) {
    this.actors.push(player);
    this.player = player;
    this.player.position = new vec2_1["default"](this.respawnPoint.x - this.player.half.x, this.respawnPoint.y);
  };

  Level.prototype.addActor = function (actor) {
    this.actors.push(actor);
  };

  Level.prototype.addSolid = function (solid) {
    this.solids.push(solid);
  };

  Level.prototype.render = function (context) {
    this.camPos.x = utils_1.clamp(this.player.position.x - this.player.half.x - xBuf, 0, this.levelWidth - utils_1.CONSTANTS.WIDTH);
    this.camPos.y = utils_1.clamp(this.player.position.y - this.player.half.y - yBuf, 0, this.levelHeight - utils_1.CONSTANTS.HEIGHT);
    context.translate(-this.camPos.x + 0.5, -this.camPos.y + 0.5);
    this.draw(context);
  };

  Level.prototype.update = function (dt) {
    for (var _i = 0, _a = Object.entries(this.entityLayers); _i < _a.length; _i++) {
      var _b = _a[_i],
          layer = _b[0],
          decals = _b[1];

      for (var _c = 0, decals_1 = decals; _c < decals_1.length; _c++) {
        var decal = decals_1[_c];

        if (decal.pos.x >= this.camPos.x - 8 && decal.pos.x <= this.camPos.x + utils_1.CONSTANTS.WIDTH + 8 && decal.pos.y >= this.camPos.y - 8 && decal.pos.y <= this.camPos.y + utils_1.CONSTANTS.HEIGHT + 8) {
          decal.update(dt);
        }
      }
    }
  };

  Level.prototype.spawnPlayer = function () {
    this.player.position = new vec2_1["default"](this.respawnPoint.x - this.player.half.x, this.respawnPoint.y);
  };

  return Level;
}();

exports["default"] = new Level();
},{"./grid":"grid.ts","./solid":"solid.ts","./death":"death.ts","./tile":"tile.ts","./vec2":"vec2.ts","./movingwall":"movingwall.ts","./spike":"spike.ts","./jump_through":"jump_through.ts","./utils":"utils.ts","./waterfall_bottom":"waterfall_bottom.ts","./small_torch":"small_torch.ts"}],"actor.ts":[function(require,module,exports) {
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
        var checkPos = vec2_1["default"].addTwo(this.position, new vec2_1["default"](sign, 0));
        var collision = utils_1.collideAt(level_1["default"].solids, checkPos, this.half);

        if (!collision.collided) {
          collision = utils_1.collideAt(level_1["default"].grid, this, new vec2_1["default"](sign, 0));
        }

        if (!collision.collided) {
          this.position.x += sign;
          move -= sign;
        } else {
          if (typeof onCollide === 'function') {
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
        var checkPos = vec2_1["default"].addTwo(this.position, new vec2_1["default"](0, sign));
        var collision = utils_1.collideAt(level_1["default"].solids, checkPos, this.half); // check if we hit a jump through top

        if (sign === 1 && !collision.collided) {
          collision = utils_1.collideOutsideAt(level_1["default"].jumpThroughs, this.position, this.half, checkPos);
        }

        if (!collision.collided) {
          collision = utils_1.collideAt(level_1["default"].grid, this, new vec2_1["default"](0, sign));
        }

        if (!collision.collided) {
          // No solid immeidately beside us
          this.position.y += sign;
          move -= sign;
        } else {
          if (typeof onCollide === 'function') {
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
},{"./entity":"entity.ts","./level":"level.ts","./utils":"utils.ts","./vec2":"vec2.ts"}],"keys.ts":[function(require,module,exports) {
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
},{}],"../data/sprites/new_player.json":[function(require,module,exports) {
module.exports = {
  "frames": [{
    "filename": "new_player 0.ase",
    "frame": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 1.ase",
    "frame": {
      "x": 24,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 2.ase",
    "frame": {
      "x": 48,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 3.ase",
    "frame": {
      "x": 72,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 4.ase",
    "frame": {
      "x": 96,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 5.ase",
    "frame": {
      "x": 120,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 6.ase",
    "frame": {
      "x": 144,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 7.ase",
    "frame": {
      "x": 168,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 8.ase",
    "frame": {
      "x": 192,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 9.ase",
    "frame": {
      "x": 216,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 10.ase",
    "frame": {
      "x": 240,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 11.ase",
    "frame": {
      "x": 264,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 12.ase",
    "frame": {
      "x": 288,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 13.ase",
    "frame": {
      "x": 312,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 14.ase",
    "frame": {
      "x": 336,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 15.ase",
    "frame": {
      "x": 360,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 16.ase",
    "frame": {
      "x": 384,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 17.ase",
    "frame": {
      "x": 408,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 18.ase",
    "frame": {
      "x": 432,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 19.ase",
    "frame": {
      "x": 456,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 20.ase",
    "frame": {
      "x": 480,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 21.ase",
    "frame": {
      "x": 504,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 22.ase",
    "frame": {
      "x": 528,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 23.ase",
    "frame": {
      "x": 552,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 24.ase",
    "frame": {
      "x": 576,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 25.ase",
    "frame": {
      "x": 600,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 26.ase",
    "frame": {
      "x": 624,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 27.ase",
    "frame": {
      "x": 648,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 28.ase",
    "frame": {
      "x": 672,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 29.ase",
    "frame": {
      "x": 696,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 30.ase",
    "frame": {
      "x": 720,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 31.ase",
    "frame": {
      "x": 744,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 32.ase",
    "frame": {
      "x": 768,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 33.ase",
    "frame": {
      "x": 792,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 34.ase",
    "frame": {
      "x": 816,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 35.ase",
    "frame": {
      "x": 840,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 36.ase",
    "frame": {
      "x": 864,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 37.ase",
    "frame": {
      "x": 888,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 38.ase",
    "frame": {
      "x": 912,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 39.ase",
    "frame": {
      "x": 936,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 40.ase",
    "frame": {
      "x": 960,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 41.ase",
    "frame": {
      "x": 984,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 42.ase",
    "frame": {
      "x": 1008,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 43.ase",
    "frame": {
      "x": 1032,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 44.ase",
    "frame": {
      "x": 1056,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 45.ase",
    "frame": {
      "x": 1080,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 46.ase",
    "frame": {
      "x": 1104,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 47.ase",
    "frame": {
      "x": 1128,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 48.ase",
    "frame": {
      "x": 1152,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 49.ase",
    "frame": {
      "x": 1176,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 50.ase",
    "frame": {
      "x": 1200,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 51.ase",
    "frame": {
      "x": 1224,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 52.ase",
    "frame": {
      "x": 1248,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 53.ase",
    "frame": {
      "x": 1272,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 54.ase",
    "frame": {
      "x": 1296,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 55.ase",
    "frame": {
      "x": 1320,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 56.ase",
    "frame": {
      "x": 1344,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 57.ase",
    "frame": {
      "x": 1368,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 58.ase",
    "frame": {
      "x": 1392,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 59.ase",
    "frame": {
      "x": 1416,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 60.ase",
    "frame": {
      "x": 1440,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 61.ase",
    "frame": {
      "x": 1464,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 62.ase",
    "frame": {
      "x": 1488,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 63.ase",
    "frame": {
      "x": 1512,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 64.ase",
    "frame": {
      "x": 1536,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 65.ase",
    "frame": {
      "x": 1560,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 66.ase",
    "frame": {
      "x": 1584,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 67.ase",
    "frame": {
      "x": 1608,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 68.ase",
    "frame": {
      "x": 1632,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 69.ase",
    "frame": {
      "x": 1656,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 70.ase",
    "frame": {
      "x": 1680,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 71.ase",
    "frame": {
      "x": 1704,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 72.ase",
    "frame": {
      "x": 1728,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 73.ase",
    "frame": {
      "x": 1752,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 74.ase",
    "frame": {
      "x": 1776,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 75.ase",
    "frame": {
      "x": 1800,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 76.ase",
    "frame": {
      "x": 1824,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 77.ase",
    "frame": {
      "x": 1848,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 78.ase",
    "frame": {
      "x": 1872,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 79.ase",
    "frame": {
      "x": 1896,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 80.ase",
    "frame": {
      "x": 1920,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 81.ase",
    "frame": {
      "x": 1944,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 82.ase",
    "frame": {
      "x": 1968,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 83.ase",
    "frame": {
      "x": 1992,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 84.ase",
    "frame": {
      "x": 2016,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 85.ase",
    "frame": {
      "x": 2040,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 86.ase",
    "frame": {
      "x": 2064,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 87.ase",
    "frame": {
      "x": 2088,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 88.ase",
    "frame": {
      "x": 2112,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 89.ase",
    "frame": {
      "x": 2136,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 90.ase",
    "frame": {
      "x": 2160,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }, {
    "filename": "new_player 91.ase",
    "frame": {
      "x": 2184,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {
      "x": 0,
      "y": 0,
      "w": 24,
      "h": 35
    },
    "sourceSize": {
      "w": 24,
      "h": 35
    },
    "duration": 60
  }],
  "meta": {
    "app": "http://www.aseprite.org/",
    "version": "1.2.20-x64",
    "image": "new_player.png",
    "format": "RGBA8888",
    "size": {
      "w": 2208,
      "h": 35
    },
    "scale": "1",
    "frameTags": [{
      "name": "IdleBlinkRight",
      "from": 0,
      "to": 2,
      "direction": "forward"
    }, {
      "name": "IdleBlinkLeft",
      "from": 3,
      "to": 5,
      "direction": "forward"
    }, {
      "name": "FallRight",
      "from": 6,
      "to": 9,
      "direction": "forward"
    }, {
      "name": "FallLeft",
      "from": 10,
      "to": 13,
      "direction": "forward"
    }, {
      "name": "IdleRight",
      "from": 14,
      "to": 14,
      "direction": "forward"
    }, {
      "name": "IdleLeft",
      "from": 15,
      "to": 15,
      "direction": "forward"
    }, {
      "name": "RollRight",
      "from": 16,
      "to": 35,
      "direction": "forward"
    }, {
      "name": "RollLeft",
      "from": 36,
      "to": 55,
      "direction": "forward"
    }, {
      "name": "JumpRight",
      "from": 56,
      "to": 59,
      "direction": "forward"
    }, {
      "name": "JumpLeft",
      "from": 60,
      "to": 63,
      "direction": "forward"
    }, {
      "name": "WallSlideRight",
      "from": 64,
      "to": 67,
      "direction": "forward"
    }, {
      "name": "WallSlideLeft",
      "from": 68,
      "to": 71,
      "direction": "forward"
    }, {
      "name": "RunRight",
      "from": 72,
      "to": 81,
      "direction": "forward"
    }, {
      "name": "RunLeft",
      "from": 82,
      "to": 91,
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
},{}],"playersprite.ts":[function(require,module,exports) {
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

var new_player_json_1 = __importDefault(require("../data/sprites/new_player.json"));

var PlayerSprite =
/** @class */
function (_super) {
  __extends(PlayerSprite, _super);

  function PlayerSprite() {
    return _super.call(this, new_player_json_1["default"]) || this;
  }

  return PlayerSprite;
}(aseprite_1["default"]);

exports["default"] = PlayerSprite;
},{"./aseprite":"aseprite.ts","../data/sprites/new_player.json":"../data/sprites/new_player.json"}],"sound.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Sound =
/** @class */
function () {
  function Sound(src) {
    this.audio = document.createElement('audio');
    this.audio.src = src;
    document.body.appendChild(this.audio);
  }

  Sound.prototype.play = function () {
    this.audio.play();
  };

  Sound.prototype.stop = function () {
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  return Sound;
}();

exports["default"] = Sound;
},{}],"../data/sounds/jump.mp3":[function(require,module,exports) {
module.exports = "/jump.d0486b1a.mp3";
},{}],"../data/sounds/death.mp3":[function(require,module,exports) {
module.exports = "/death.6adecf6c.mp3";
},{}],"player.ts":[function(require,module,exports) {
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

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

exports.__esModule = true;

var actor_1 = __importDefault(require("./actor"));

var level_1 = __importDefault(require("./level"));

var vec2_1 = __importDefault(require("./vec2"));

var keys_1 = require("./keys");

var utils_1 = require("./utils");

var playersprite_1 = __importDefault(require("./playersprite"));

var spike_1 = __importStar(require("./spike"));

var death_1 = __importDefault(require("./death"));

var level_2 = __importDefault(require("./level"));

var sound_1 = __importDefault(require("./sound"));

var jump_mp3_1 = __importDefault(require("../data/sounds/jump.mp3"));

var death_mp3_1 = __importDefault(require("../data/sounds/death.mp3"));

var MAX_RUN = 90;
var RUN_ACCEL = 1000;
var RUN_REDUCE = 400;
var AIR_MULT = 0.65; // Gives you slightly less control of horizontal motion in the air

var MAX_FALL = 160;
var GRAVITY = 900;
var HALF_GRAV_THRESHOLD = 40; // Halves gravity at the peak of a jump, if the jump button is held

var FAST_MAX_ACCEL = 300;
var JUMP_GRACE_TIME = 0.1; // Time after leaving a ledge when you can still jump

var JUMP_SPEED = -105;
var JUMP_H_BOOST = 40; // If left or right is held at the moment of a jump, this horizontal speed boost is applied

var VAR_JUMP_TIME = 0.2; // Time after jumping that you can hold the jump button to continue gaining upward speed

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
var JUMP_THROUGH_ASSIST_SPEED = -40;

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
    _this.jumpSound = new sound_1["default"](jump_mp3_1["default"]);
    _this.deathSound = new sound_1["default"](death_mp3_1["default"]);
    _this.onCollideH = _this.onCollideH.bind(_this);
    _this.onCollideV = _this.onCollideV.bind(_this);
    return _this;
  }

  Player.prototype.shouldDie = function (collider, dir) {
    if (collider instanceof spike_1["default"]) {
      var killFrom = collider.killFrom;

      if (killFrom === spike_1.KillFrom.ALL) {
        this.squish();
      } else if (dir.x === 0) {
        if (dir.y === 1 && killFrom === spike_1.KillFrom.TOP) {
          this.squish();
        } else if (dir.y === -1 && killFrom === spike_1.KillFrom.BOTTOM) {
          this.squish();
        } else {
          this.squish();
        }
      } else {
        if (dir.x === 1 && killFrom === spike_1.KillFrom.TOP_BOTTOM_LEFT) {
          this.squish();
        } else if (dir.x === -1 && killFrom === spike_1.KillFrom.TOP_BOTTOM_RIGHT) {
          this.squish();
        }
      }
    } else if (collider instanceof death_1["default"]) {
      this.squish();
    }
  };

  Player.prototype.onCollideH = function (collider, sign) {
    this.shouldDie(collider, new vec2_1["default"](sign, 0));

    if (this.wallSpeedRententionTimer <= 0) {
      this.wallSpeedRetained = this.speed.x;
      this.wallSpeedRententionTimer = WALL_SPEED_RENTENTION_TIME;
    }

    this.speed.x = 0;
  };

  Player.prototype.onCollideV = function (collider, sign) {
    this.shouldDie(collider, new vec2_1["default"](0, sign));

    if (this.speed.y < 0) {
      if (this.varJumpTimer < VAR_JUMP_TIME - CEILING_VAR_JUMP_GRACE) {
        this.varJumpTimer = 0;
      }
    }

    this.speed.y = 0;
  };

  Player.prototype.isGrounded = function () {
    var down = vec2_1["default"].addTwo(this.position, new vec2_1["default"](0, 1));
    var collision = utils_1.collideAt(level_1["default"].solids, down, this.half);

    if (!collision.collided) {
      collision = utils_1.collideOutsideAt(level_1["default"].jumpThroughs, this.position, this.half, down);
    }

    if (!collision.collided) {
      collision = utils_1.collideAt(level_1["default"].grid, this, new vec2_1["default"](0, 1));
    }

    return collision.collided;
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
      if (this.speed.x !== 0 && utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, new vec2_1["default"](this.facing, 0)), this.half).collided) {
        if (this.facing === 1) {
          this.sprite.play('IdleRight');
        } else {
          this.sprite.play('IdleLeft');
        }
      } else if (this.speed.x < 0) {
        this.sprite.play('RunLeft');
      } else if (this.speed.x > 0) {
        this.sprite.play('RunRight');
      } else if (this.speed.x === 0) {
        if (this.facing === 1) {
          this.sprite.play('IdleRight');
        } else {
          this.sprite.play('IdleLeft');
        }
      }
    } else {
      if (this.wallSlideDir !== 0) {
        if (this.wallSlideDir === 1) {
          this.sprite.play('WallSlideRight');
        } else {
          this.sprite.play('WallSlideLeft');
        }
      } else {
        if (this.speed.y < 0) {
          if (this.facing === 1) {
            this.sprite.play('JumpRight');
          } else {
            this.sprite.play('JumpLeft');
          }
        } else {
          if (this.facing === 1) {
            this.sprite.play('FallRight');
          } else {
            this.sprite.play('FallLeft');
          }
        }
      }
    }

    this.sprite.render(context, this.position, new vec2_1["default"](this.half.x, this.half.y - 2));
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

    if (!this.grounded && this.speed.y <= 0 && utils_1.collideAt(level_1["default"].jumpThroughs, this.position, this.half).collided) {
      this.moveY(JUMP_THROUGH_ASSIST_SPEED * dt, function () {});
    }

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

        if (this.speed.y >= 0 && this.wallSlideTimer > 0 && utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, wallPos), this.half).collided || utils_1.collideAt(level_1["default"].grid, this, wallPos).collided) {
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
        this.jumpSound.play();
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
    this.autoJumpTimer = AUTO_JUMP_TIME;
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
    return utils_1.collideAt(level_1["default"].solids, vec2_1["default"].addTwo(this.position, wallDist), this.half).collided || utils_1.collideAt(level_1["default"].grid, this, wallDist).collided;
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
    this.deathSound.play();
    level_2["default"].spawnPlayer();
  };

  return Player;
}(actor_1["default"]);

exports["default"] = Player;
},{"./actor":"actor.ts","./level":"level.ts","./vec2":"vec2.ts","./keys":"keys.ts","./utils":"utils.ts","./playersprite":"playersprite.ts","./spike":"spike.ts","./death":"death.ts","./sound":"sound.ts","../data/sounds/jump.mp3":"../data/sounds/jump.mp3","../data/sounds/death.mp3":"../data/sounds/death.mp3"}],"mouse.ts":[function(require,module,exports) {
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

var cross = new Image();
cross.src = 'cross.png';
var sprite = new sprite_1["default"](cross);
var debug = document.getElementById('debug');
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
  canvas.addEventListener('click', function () {// Level.fill((mouse.gridX - 4) / 8, (mouse.gridY - 4) / 8);
  });
  canvas.addEventListener('mousemove', function (e) {
    exports.mouse.x = (e.clientX - rect.left) / (rect.right - rect.left) * WIDTH;
    exports.mouse.y = (e.clientY - rect.top) / (rect.bottom - rect.top) * HEIGHT;
    exports.mouse.gridX = exports.mouse.x - exports.mouse.x % realGridSize + realGridSize / 2;
    exports.mouse.gridY = exports.mouse.y - exports.mouse.y % realGridSize + realGridSize / 2;
  });
};

exports.draw = function (context) {
  sprite.draw(context, new vec2_1["default"](exports.mouse.gridX - 2, exports.mouse.gridY - 2));
};
},{"./utils":"utils.ts","./sprite":"sprite.ts","./vec2":"vec2.ts"}],"../data/level_a_01.json":[function(require,module,exports) {
module.exports = {
  "ogmoVersion": "3.3.0",
  "width": 512,
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
    "gridCellsX": 64,
    "gridCellsY": 24,
    "entities": [{
      "name": "respawn",
      "id": 0,
      "_eid": "42480888",
      "x": 24,
      "y": 120,
      "originX": 0,
      "originY": 4
    }, {
      "name": "jump_through",
      "id": 54,
      "_eid": "89708388",
      "x": 80,
      "y": 112,
      "width": 24,
      "height": 8,
      "originX": 0,
      "originY": 0
    }, {
      "name": "spikes",
      "id": 55,
      "_eid": "62536995",
      "x": 192,
      "y": 112,
      "width": 16,
      "height": 4,
      "originX": 0,
      "originY": -4
    }, {
      "name": "jump_through",
      "id": 59,
      "_eid": "89708388",
      "x": 224,
      "y": 48,
      "width": 16,
      "height": 8,
      "originX": 0,
      "originY": 0
    }, {
      "name": "spikes_top",
      "id": 65,
      "_eid": "63239926",
      "x": 408,
      "y": 24,
      "width": 24,
      "height": 12,
      "originX": 0,
      "originY": 0
    }, {
      "name": "death",
      "id": 70,
      "_eid": "63410495",
      "x": 104,
      "y": 176,
      "width": 32,
      "height": 8,
      "originX": 0,
      "originY": 0
    }, {
      "name": "death",
      "id": 71,
      "_eid": "63410495",
      "x": 416,
      "y": 176,
      "width": 96,
      "height": 8,
      "originX": 0,
      "originY": 0
    }, {
      "name": "death",
      "id": 72,
      "_eid": "63410495",
      "x": 208,
      "y": 176,
      "width": 112,
      "height": 8,
      "originX": 0,
      "originY": 0
    }, {
      "name": "spikes_left",
      "id": 78,
      "_eid": "63361179",
      "x": 368,
      "y": 24,
      "width": 4,
      "height": 16,
      "originX": 0,
      "originY": 0
    }, {
      "name": "spikes_all",
      "id": 79,
      "_eid": "63394131",
      "x": 448,
      "y": 72,
      "width": 8,
      "height": 8,
      "originX": 4,
      "originY": 4
    }, {
      "name": "spikes_left",
      "id": 80,
      "_eid": "63361179",
      "x": 368,
      "y": 88,
      "width": 4,
      "height": 8,
      "originX": 0,
      "originY": 0
    }, {
      "name": "spikes_right",
      "id": 81,
      "_eid": "63368098",
      "x": 408,
      "y": 104,
      "width": 4,
      "height": 8,
      "originX": 4,
      "originY": 0
    }, {
      "name": "spikes_right",
      "id": 82,
      "_eid": "63368098",
      "x": 408,
      "y": 152,
      "width": 4,
      "height": 16,
      "originX": 4,
      "originY": 0
    }]
  }, {
    "name": "entity_front",
    "_eid": "35078639",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "entities": []
  }, {
    "name": "front",
    "_eid": "91787141",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "tileset": "tilset",
    "data": [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 6, 7, 6, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, -1, -1, -1, 14, 15, 14, 15, 80, 81, 82, 84, 85, -1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, 22, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, -1, 6, 7, 30, 31, 30, 31, -1, -1, -1, -1, -1, 80, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 80, 81, 82, 80, 81, 82, 83, 84, 28, 29, 30, 31, 83, 84, 85, 80, 81, 28, 29, 30, 31, 80, 81, 82, -1, 22, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 53, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, 1089, -1, -1, -1, -1, 1090, 1091, 1090, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, 1089, -1, -1, -1, -1, 1106, 1107, 1106, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 0, 1, 2, 1, 2, 3, 1, 2, 4, 5, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 231, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 4, 5, -1, -1, -1, -1, -1, 16, 17, 18, 19, 34, 35, 34, 35, 20, 21, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 247, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 17, 34, 20, 21, -1, -1, -1, -1, -1, 32, 65, 34, 34, 35, 66, 67, 34, 36, 37, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1096, 1097, -1, -1, -1, -1, -1, -1, -1, 231, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 80, 81, 82, 84, 85, -1, -1, -1, -1, -1, 80, 81, 82, 83, 84, 85, 81, 82, 83, 85, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, 6, 7, -1, -1, 1112, 1113, -1, -1, 0, 3, 3, 4, 5, 247, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, -1, 64, 19, 18, 68, 69, 231, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, 1105, -1, -1, -1, -1, 0, 5, -1, -1, -1, -1, -1, -1, 80, 82, 83, 84, 85, 247, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, 16, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 231, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, 1092, 32, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 247, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 10, 11, -1, -1, -1, -1, 16, -1, 21, -1, -1, -1, -1, 226, 227, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, 48, 53, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 231, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 32, -1, 37, 2, 1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 7, -1, -1, -1, -1, -1, 64, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 247, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 48, -1, 18, 19, -1, -1, -1, 20, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 23, -1, -1, -1, -1, -1, 80, 85, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 279, -1, -1, -1, 120, 121, 122, 123, -1, -1, 120, 121, -1, -1, -1, -1, -1, 64, -1, 34, 35, 18, 19, 34, 36, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 3, 4, 5, 1, 2, 3, 4, 0, 1, 4, 5, -1, -1, -1, -1, 16, -1, 34, 35, 34, 35, -1, 52, 53, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 19, 19, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, -1, -1, -1, -1, 32, -1, -1, -1, -1, -1, -1, 68, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1092, 32, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 34, 35, 35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 37, -1, -1, -1, -1, 48, -1, -1, -1, -1, -1, -1, 20, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1092, 48, 53, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 50, 51, 67, -1, -1, -1, -1, -1, -1, -1, -1, -1, 53, -1, -1, -1, -1, 48, -1, -1, -1, -1, -1, -1, 36, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 2, 3, 2, 2, 2, 3, 3, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 34, 35, 67, -1, -1, -1, -1, -1, -1, -1, -1, -1, 69, -1, -1, -1, -1, 64, -1, -1, -1, -1, -1, -1, 52, 53, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 17, 18, 19, 18, 19, 18, 18, 18, 19, 19, 20, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    "exportMode": 0,
    "arrayMode": 0
  }, {
    "name": "entity_middle",
    "_eid": "35070554",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "entities": []
  }, {
    "name": "middle",
    "_eid": "91773913",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "tileset": "tilset",
    "data": [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 139, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 142, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 136, -1, -1, 155, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 158, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 152, 153, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 457, 458, 459, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 473, 474, 475, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 139, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 155, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    "exportMode": 0,
    "arrayMode": 0
  }, {
    "name": "entity_back",
    "_eid": "35078545",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "entities": []
  }, {
    "name": "back",
    "_eid": "44245481",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "tileset": "tilset",
    "data": [98, 99, 128, 129, 128, 129, 128, 129, 98, 99, 34, 35, 34, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, 96, 97, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 114, 115, 144, 145, 144, 145, 144, 145, 114, 115, 112, 113, 34, 113, 47, 35, 34, 35, 34, 35, 18, 19, 38, 39, 40, 41, 128, 129, 34, 35, 34, 78, 79, 35, 34, 35, 34, 35, 34, 35, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 96, 97, 96, 97, 96, 97, 96, 26, 27, 26, 27, 34, 96, 97, 63, 51, 50, 51, 50, 51, 34, 35, 50, 26, 27, 51, 144, 145, 50, 44, 45, 94, 95, 78, 79, 51, 50, 51, 44, 45, 96, 96, 97, 98, 99, 96, 97, 98, 99, 44, 45, -1, 44, 45, 44, 45, 44, 45, 97, 98, 44, 45, 97, 98, 112, 113, 112, 19, 146, 147, 35, 50, 51, 50, 51, 50, 35, 34, 79, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 60, 61, 35, 34, 35, 34, 35, 34, 35, 60, 61, 112, 112, 113, 114, 44, 45, 44, 45, 99, 60, 44, 45, 60, 61, 60, 61, 60, 61, 113, 114, 60, 61, 113, 114, 96, 97, 18, 34, 35, 35, 34, 35, 34, 46, 47, 35, 34, 35, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 130, 131, 130, 131, 130, 131, 128, 130, 131, 131, 60, 61, 60, 61, 130, 131, 60, 61, 130, 131, 130, 131, 130, 131, 129, 130, 131, 128, 44, 45, 112, 113, 34, 35, 147, 162, 163, 51, 50, 62, 63, 51, 50, 51, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 146, 147, 146, 147, 146, 147, 130, 146, 147, 131, 130, 131, 130, 131, 44, 45, 44, 45, 130, 131, 130, 131, 146, 147, 145, 146, 147, 144, 60, 61, 34, 18, 50, 51, 34, 178, 179, 78, 79, 35, 34, 35, 34, 35, 50, 51, 50, 51, 50, 51, 50, 51, 160, 161, 162, 163, 128, 129, 160, 161, 162, 163, 50, 51, 50, 51, 146, 147, 146, 147, 130, 131, 131, 131, 130, 131, 146, 147, 60, 61, 60, 61, 44, 45, 146, 147, 163, 160, 161, 162, 163, 160, 161, 162, 50, 34, 34, 35, 50, 51, 50, 94, 95, 51, 50, 51, 50, 51, 34, 35, 34, 35, 98, 99, 34, 35, 176, 177, 178, 179, 144, 145, 176, 177, 178, 179, 34, 35, 34, 35, 34, 35, 34, 35, 146, 44, 45, 147, 146, 147, 161, 162, 163, 160, 146, 147, 60, 61, 130, 131, 130, 131, 177, 178, 179, 176, 44, 45, 34, 34, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 50, 51, 50, 51, 114, 115, 50, 51, 50, 51, 50, 160, 161, 162, 160, 161, 162, 163, 50, 51, 50, 51, 50, 51, 50, 51, 130, 60, 61, 131, 99, 176, 177, 178, 179, 176, 177, 178, 146, 147, 146, 147, 146, 147, 177, 178, 179, 160, 60, 61, 50, 51, 50, 51, 50, 128, 129, 130, 131, 34, 35, 34, 35, 34, 35, 35, 34, 35, 128, 129, 34, 35, 34, 35, 34, 176, 177, 178, 176, 177, 178, 179, 34, 35, 34, 35, 34, 35, 34, 35, 146, 44, 45, 147, 115, 144, 145, 146, 147, 176, 177, 178, 130, 131, 177, 178, 179, 176, 177, 178, 179, 176, 177, 178, 34, 35, 34, 35, 34, 144, 145, 146, 147, 34, 35, 34, 35, 34, 51, 51, 50, 51, 144, 145, 50, 51, 160, 161, 162, 163, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 128, 60, 61, 131, 131, 160, 161, 162, 163, 144, 145, 146, 146, 147, 113, 114, 115, 176, 177, 178, 179, -1, -1, -1, 112, 44, 45, 128, 129, 98, 99, 128, 129, 98, 99, 162, 98, 99, 163, 98, 99, 130, 98, 99, 34, 35, 176, 177, 178, 179, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 44, 45, 147, 147, 147, 176, 177, 178, 179, 160, 161, 162, 163, 130, 131, 130, 131, 96, 97, 98, 99, -1, -1, -1, 96, 60, 61, 144, 145, 114, 115, 144, 145, 114, 115, 178, 114, 115, 179, 114, 115, 146, 114, 115, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 60, 61, 131, 131, 163, 130, 131, -1, -1, 176, 177, 178, 44, 45, 147, 146, 147, 112, 113, 114, 115, -1, -1, -1, 112, 162, 163, 160, 161, 128, 129, 162, 163, 34, 35, 34, 35, 34, 35, 34, 35, 113, 112, 113, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 38, 39, 40, 41, 34, 35, 130, 131, 34, 35, 176, 44, 45, 147, 130, 131, 114, 115, 114, 115, 114, 115, 60, 61, 130, 131, 163, 128, 129, 130, 131, 96, 97, 98, 96, 178, 179, 176, 177, 144, 145, 178, 179, 50, 51, 50, 51, 50, 51, 50, 51, 97, 130, 97, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 54, 55, 56, 57, 50, 51, 146, 147, 50, 51, 96, 60, 61, 147, 146, 147, 130, 131, 130, 131, 130, 131, 130, 131, 146, 147, 130, 131, 130, 131, 114, 115, 113, 114, 112, 34, 162, 163, 35, 34, 35, 94, 95, 34, 35, 34, 35, 34, 35, 130, 131, 113, 146, 113, 34, 35, 34, 35, 34, 35, 34, 35, 44, 45, 128, 129, 128, 129, 34, 35, 162, 163, 34, 35, 112, 146, 147, 130, 131, 130, 131, 147, 146, 147, 146, 147, 130, 131, 146, 147, 146, 147, 146, 147, 130, 131, 129, 130, 96, 50, 178, 179, 146, 147, 51, 50, 51, 50, 51, 50, 51, 50, 51, 34, 35, 97, 162, 97, 50, 51, 50, 51, 50, 51, 50, 51, 60, 61, 144, 145, 144, 145, 50, 51, 178, 179, 50, 51, 128, 146, 147, 146, 44, 45, 147, 130, 131, 130, 131, 130, 131, 130, 131, 131, 146, 147, 130, 131, 146, 147, 130, 131, 112, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 34, 35, 113, 178, 113, 112, 113, 112, 113, 112, 113, 34, 35, 34, 128, 129, 42, 43, 128, 129, 35, 78, 79, 34, 35, 144, 96, 97, 130, 60, 61, 131, 146, 147, 146, 44, 45, 147, 146, 147, 147, 146, 147, 146, 147, 146, 147, 146, 147, 96, 97, 96, 97, 96, 97, 96, 34, 35, 97, 96, 97, 96, 34, 35, 34, 35, 97, 163, 147, 96, 97, 131, 131, 96, 97, 50, 51, 50, 144, 145, 58, 59, 144, 145, 51, 50, 96, 97, 98, 99, 112, 113, 146, 147, 146, 147, 147, 130, 131, 60, 61, 176, 177, 178, 179, 130, 131, 130, 131, 130, 131, 130, 131, 44, 45, 18, 19, 18, 19, 18, 19, 18, 19, 19, 20, 21, 50, 51, 50, 51, 113, 179, 42, 43, 131, 42, 43, 131, 34, 35, 34, 130, 131, 128, 129, 128, 129, 44, 45, 34, 112, 113, 114, 115, 128, 129, 146, 147, 114, 130, 131, 146, 147, 98, 99, 130, 131, 130, 131, 130, 131, 146, 147, 146, 147, 146, 147, 60, 61, 62, 63, 50, 146, 147, 34, 34, 35, 35, 36, 37, 34, 35, 34, 35, 97, 163, 58, 59, 131, 58, 59, 131, 50, 51, 50, 146, 147, 144, 145, 144, 145, 60, 61, 50, 128, 129, 130, 131, 144, 145, 146, 147, 130, 44, 45, 115, 114, 115, 115, 146, 147, 146, 147, 146, 147, 112, 130, 131, 115, 176, 177, 34, 35, 78, 79, 34, 34, 162, 163, 51, 50, 51, 52, 53, 50, 51, 50, 51, 113, 179, 131, 98, 99, 130, 98, 99, 34, 160, 161, 146, 147, 130, 71, 72, 35, 34, 35, 78, 144, 145, 146, 147, 160, 161, 162, 163, 146, 60, 61, 131, 130, 131, 131, 131, 128, 146, 147, 130, 131, 128, 146, 147, 131, 97, 98, 50, 51, 94, 95, 50, 50, 178, 179, 35, 66, 67, 68, 69, 34, 35, 34, 35, 97, 146, 147, 114, 115, 130, 114, 115, 50, 176, 177, 162, 163, 146, 87, 88, 51, 50, 51, 94, 160, 161, 44, 45, 176, 177, 178, 179, 160, 161, 146, 147, 146, 147, 147, 147, 144, 146, 147, 146, 147, 144, 145, 146, 147, 113, 114],
    "exportMode": 0,
    "arrayMode": 0
  }, {
    "name": "grid",
    "_eid": "54424457",
    "offsetX": 0,
    "offsetY": 0,
    "gridCellWidth": 8,
    "gridCellHeight": 8,
    "gridCellsX": 64,
    "gridCellsY": 24,
    "grid": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    "arrayMode": 0
  }]
};
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var stats_js_1 = __importDefault(require("stats.js"));

var level_1 = __importDefault(require("./level"));

var player_1 = __importDefault(require("./player"));

var utils_1 = require("./utils");

var mouse_1 = require("./mouse");

var level_a_01_json_1 = __importDefault(require("../data/level_a_01.json"));

var level_2 = __importDefault(require("./level"));

var stats = new stats_js_1["default"]();
stats.showPanel(0);
document.body.appendChild(stats.dom);
var canvas = document.getElementById('canvas');
canvas.width = utils_1.CONSTANTS.WIDTH;
canvas.height = utils_1.CONSTANTS.HEIGHT;
var context = canvas.getContext('2d');
context.translate(0.5, 0.5);
context.imageSmoothingEnabled = false;
var player = new player_1["default"]();
level_1["default"].load(context, level_a_01_json_1["default"]);
level_2["default"].addPlayer(player);
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

var render = function render() {
  utils_1.clearDraw(context);
  level_2["default"].render(context);
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
},{"stats.js":"../node_modules/stats.js/build/stats.min.js","./level":"level.ts","./player":"player.ts","./utils":"utils.ts","./mouse":"mouse.ts","../data/level_a_01.json":"../data/level_a_01.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59670" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map