!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("SimpleSignal",[],e):"object"==typeof exports?exports.SimpleSignal=e():t.SimpleSignal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.functions=[]}return t.prototype.add=function(t){return this.functions.indexOf(t)===-1&&(this.functions.push(t),!0)},t.prototype.remove=function(t){var e=this.functions.indexOf(t);return e>-1&&(this.functions.splice(e,1),!0)},t.prototype.removeAll=function(){return this.functions.length>0&&(this.functions.length=0,!0)},t.prototype.dispatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.functions.concat();n.forEach(function(e){e.apply(void 0,t)})},Object.defineProperty(t.prototype,"numItems",{get:function(){return this.functions.length},enumerable:!0,configurable:!0}),t}();e.default=n}])});