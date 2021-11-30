"use strict";

exports.__esModule = true;
exports.computeAggregate = exports.SimpleHeat = exports.HeatmapLayer = exports.Heatmap = void 0;

var _Heatmap = _interopRequireWildcard(require("./Heatmap"));

exports.Heatmap = _Heatmap.default;
exports.SimpleHeat = _Heatmap.SimpleHeat;
exports.computeAggregate = _Heatmap.computeAggregate;

var _HeatmapLayer = _interopRequireDefault(require("./HeatmapLayer"));

exports.HeatmapLayer = _HeatmapLayer.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }