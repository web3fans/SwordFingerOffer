/*
 * @Author: coolsummer
 * @Date: 2020-04-13 22:59:08
 * @LastEditTime: 2020-04-13 23:07:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/SwordFingerOffer/2_singleton/singleton2.js
 */

 //利用闭包的特性创建单例,同时符合惰性单例的特性
var Singleton = function(name) {
    this.name = name;
};

Singleton.getInstance = (function(name) {
    var instance;
    return function(name){
        if (!instance) {
            instance = new Singleton(name);
        }
    }
})();

//test...
var a = Singleton.getInstance('coolsummer');
var b = Singleton.getInstance('coolsummer2');
console.log(a === b);