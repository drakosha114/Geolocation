/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _shops = __webpack_require__(1);

var _shops2 = _interopRequireDefault(_shops);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('sadas');


console.log(_shops2.default.getNearestShopsIds(32));
console.log(_shops2.default.getNearestShops(32));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Shop = __webpack_require__(2);

var _Shop2 = _interopRequireDefault(_Shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AVERAGE_ARC_LENGTH = 111.2;
var NEAREST_SHOPS_RADIUS = 5;

var SHOPS = [{
    id: 777,
    lat: 64.28,
    long: 100.22,
    name: "tyra"
}, {
    id: 888,
    lat: 40.7,
    long: 74.01,
    name: "ny"
}, {
    id: 26,
    name: 'Рязанский проспект',
    address: 'г.Москва, Рязанский проспект, д.2, корп.3',
    lat: 55.730358,
    long: 37.734079
}, {
    id: 4,
    name: 'Алтуфьево',
    address: 'г.Мытищи, МКАД 84 км (внешн.)',
    lat: 55.915175,
    long: 37.572879
}, {
    id: 20,
    name: 'Лефортово',
    address: 'г. Москва, Энтузиастов шоссе, д.12 корп.2',
    lat: 55.746714,
    long: 37.707676
}, {
    id: 56,
    name: 'Юдино',
    address: 'г. Москва, село Юдино, д. 55д',
    lat: 55.658286,
    long: 37.18392
}, {
    id: 45,
    name: 'Косино',
    address: 'г. Москва, ул. Святоозёрская, д.1А',
    lat: 55.714933,
    long: 37.884662
}, {
    id: 3,
    name: 'Строгино',
    address: 'МКАД 66 километр (внешн.)',
    lat: 55.811032,
    long: 37.386869
}, {
    id: 40,
    name: 'Шолохово',
    address: 'Мытищинский район, деревня Шолохово',
    lat: 56.046474,
    long: 37.541622
}, {
    id: 2,
    name: 'Мытищи',
    address: 'г. Мытищи, 91 км МКАД',
    lat: 55.899215,
    long: 37.668593
}, {
    id: 65,
    name: 'Пушкино',
    address: 'г. Пушкино, Ярославское шоссе, 19 км от МКАД',
    lat: 56.015547,
    long: 37.88475
}, {
    id: 32,
    name: 'Новая рига',
    address: 'г. Москва, Новорижское шоссе, 22 км, вл. 1, стр. 5',
    lat: 55.799893,
    long: 37.297188
}, {
    id: 35,
    name: 'Зеленоград',
    address: 'г. Москва,  Солнечногорский р-н, р.п.Ржавки, мкр.№2',
    lat: 56.000286,
    long: 37.252302
}, {
    id: 51,
    name: 'Киевское шоссе',
    address: 'г. Москва, п. Московский, Киевское шоссе, 24-й км',
    lat: 55.621158,
    long: 37.389973
}, {
    id: 43,
    name: 'Каширское шоссе',
    address: 'г. Москва, МКАД 24 километр (внешн.)',
    lat: 55.589154,
    long: 37.726762
}, {
    id: 28,
    name: 'Ногинск',
    address: 'Ногинск г., Горьковское ш., 52-й км',
    lat: 55.830921,
    long: 38.398272
}, {
    id: 5,
    name: 'Химки',
    address: 'г. Химки 9 Мая ул., вл. 20 с.1',
    lat: 55.903448,
    long: 37.415802
}, {
    id: 6,
    name: 'Сокольники',
    address: 'г. Москва, Верхняя Красносельская ул., 3а',
    lat: 55.786248,
    long: 37.663781
}, {
    id: 22,
    name: 'Климовск',
    address: 'г. Климовск, ул. Молодежная, д. 15',
    lat: 55.387527,
    long: 37.549443
}, {
    id: 49,
    name: 'Люберцы',
    address: 'г. Москва, Новорязанское шоссе, д. 5/2',
    lat: 55.664577,
    long: 37.883503
}];

var toRadians = function toRadians(val) {
    return val * Math.PI / 180;
};

var toDegrees = function toDegrees(val) {
    return val * 180 / Math.PI;
};
// Calculate a point winthin a circle
// circle ={center:LatLong, radius: number} // in metres
var pointInsideCircle = function pointInsideCircle(point, circle) {
    var center = circle.center;
    var distance = distanceBetween(point, center);

    //alert(distance);
    return distance < circle.radius;
};

function calculateDistance(lat1, long1, lat2, long2) {
    var latCurrent = toRadians(lat1);
    var longCurrent = toRadians(long1);
    var latTarget = toRadians(lat2);
    var longTarget = toRadians(long2);
    console.log('latCurrent', latCurrent);
    console.log('longCurrent', longCurrent);
    console.log('latTarget ', latTarget);
    console.log('longTarget', longTarget);

    return AVERAGE_ARC_LENGTH * Math.acos(Math.sin(latCurrent) * Math.sin(-toRadians(lat2)) + Math.cos(toRadians(lat1)) * Math.cos(-toRadians(lat2)) * Math.cos(toRadians(long1) - toRadians(long2)));
}

function calculateDistance2(lat1, lon1, lat2, lon2) {
    var R = 6371e3;
    var φ1 = toRadians(lat1),
        λ1 = toRadians(lon1);
    var φ2 = toRadians(lat2),
        λ2 = toRadians(lon2);
    var Δφ = φ2 - φ1;
    var Δλ = λ2 - λ1;

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
}
function getKey(currentId, tagetId) {
    return "" + (String(currentId) + String(tagetId));
}
var NearestShops = SHOPS.map(function (shop) {
    return new _Shop2.default(shop);
});

var Distances = function () {
    var Distances = new Map();
    var temp = 0;
    var l = NearestShops.length;
    while (temp < l) {
        var _NearestShops$temp = NearestShops[temp],
            idTemp = _NearestShops$temp.id,
            latTemp = _NearestShops$temp.lat,
            longTemp = _NearestShops$temp.long;

        for (var i = temp + 1; i < l; i += 1) {
            var _NearestShops$i = NearestShops[i],
                id = _NearestShops$i.id,
                lat = _NearestShops$i.lat,
                long = _NearestShops$i.long;

            var distance = calculateDistance2(latTemp, lat, longTemp, long);
            Distances.set(getKey(idTemp, id), distance);
            Distances.set(getKey(id, idTemp), distance);
        }
        temp += 1;
    }
    return Distances;
}();
console.log(Distances);
exports.default = {
    getNearestShops: function getNearestShops(id) {
        return NearestShops.filter(function (shop) {
            return shop.id !== id;
        });
    },
    findShopById: function findShopById(id) {
        return NearestShops.find(function (shop) {
            return shop.id === id;
        });
    },
    getNearestShopsIds: function getNearestShopsIds(id) {
        return NearestShops.filter(function (shop) {
            return shop.id !== id;
        }).map(function (shop) {
            return shop.id;
        }).join(',');
    },
    getShops: function getShops() {
        return NearestShops;
    },
    getDistance: function getDistance(targetId, id) {
        return Distances.get(getKey(targetId, id));
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shop = function Shop(data) {
    _classCallCheck(this, Shop);

    Object.assign(this, data);
};

exports.default = Shop;

/***/ })
/******/ ]);