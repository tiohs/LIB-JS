


(function (){
    'use strict';
    class DOM {
      
    }
 
function DOM (elements){
  if(!(this instanceof DOM))
    return new DOM(elements);

  this.element = document.querySelectorAll(elements);
 

}


DOM.prototype.on = function on (eventType, callback) {
  Array.prototype.forEach.call(this.element, function (element) {
    element.addEventListener(eventType, callback, false);
  });
};
DOM.prototype.off = function off (eventType, callback) {
  Array.prototype.forEach.call(this.element, function (element) {
    element. removeEventListener(eventType, callback, false);
  });
 
};
DOM.prototype.get = function get (index) {
  if(!!index)
    return this.element[index];
  return this.element[0];
};

DOM.prototype.some = function some (funct){
    Array.prototype.some.call(this.element, funct);
}
DOM.prototype.map = function map (funct){
    Array.prototype.map.call(this.element, funct);
}
DOM.prototype.filter = function filter (funct){
  Array.prototype.filter.call(this.element, funct);
}
DOM.prototype.reduceRight = function reduceRight (funct){
  Array.prototype.reduceRight.call(this.element, funct);
}
DOM.prototype.reduce = function reduce (funct){
  Array.prototype.reduce.call(this.element, funct);
}
DOM.prototype.forEach = function forEach (funct){
  Array.prototype.forEach.call(this.element, funct);
}
DOM.prototype.every = function every (funct){
  Array.prototype.every.call(this.element, funct);
}
// isArray, i sObject, isFunction, isNumber, isString, isBoolean, isNull.
DOM.prototype.isArray = function isArray(parms){
  return Object.prototype.toString.call(parms) === ' [object Array]';
}
DOM.prototype.isObject = function isObject(parms){
  return Object.prototype.toString.call(parms) === ' [object  Object]';
}
DOM.prototype.isFunction = function isFunction(parms){
  return Object.prototype.toString.call(parms) === " [object Function]";
}
DOM.prototype.isNumber = function isNumber(parms){
  return Object.prototype.toString.call(parms) === " [object Number]";
}
DOM.prototype.isString = function isString(parms){
  return Object.prototype.toString.call(parms) === " [object String]";
}
DOM.prototype.isBoolean = function isBoolean(parms){
  return Object.prototype.toString.call(parms) === " [object Boolean]";
}
DOM.prototype.isNull = function isNull(parms){
  return Object.prototype.toString.call(parms) !== " [object Null]" ||  Object.prototype.toString.call(parms) !== " [object Undefined]";
}
    window.DOM = DOM;
})();