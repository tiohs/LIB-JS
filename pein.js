'use strict';
class DOM {
  constructor(elements) {
    if (!(this instanceof DOM))
      return new DOM(elements);

    this.element = document.querySelectorAll(elements);
  }
  on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    });
  }
  off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    });
  }
  get(index) {
    console.log(index);
    if (!!index)
      return this.element[index];
    return this.element[0];
  }
  some(funct) {
    Array.prototype.some.call(this.element, funct);
  }
  map(funct) {
    Array.prototype.map.call(this.element, funct);
  }
  filter(funct) {
    Array.prototype.filter.call(this.element, funct);
  }
  reduceRight(funct) {
    Array.prototype.reduceRight.call(this.element, funct);
  }
  reduce(funct) {
    Array.prototype.reduce.call(this.element, funct);
  }
  every(funct) {
    Array.prototype.every.call(this.element, funct);
  }
  isArray(parms) {
    return Object.prototype.toString.call(parms) === ' [object Array]';
  }
  isObject(parms) {
    return Object.prototype.toString.call(parms) === ' [object  Object]';
  }
  isFunction(parms) {
    return Object.prototype.toString.call(parms) === " [object Function]";
  }
  isNumber(parms) {
    return Object.prototype.toString.call(parms) === " [object Number]";
  }
  isString(parms) {
    return Object.prototype.toString.call(parms) === " [object String]";
  }
  isBoolean(parms) {
    return Object.prototype.toString.call(parms) === " [object Boolean]";
  }
  isNull(parms) {
    return Object.prototype.toString.call(parms) !== " [object Null]" || Object.prototype.toString.call(parms) !== " [object Undefined]";
  }
  get allElement(){
    return this.element;
  }
}

module.exports = new DOM;
window.dom = DOM;