/*
 * @Author: coolsummer
 * @Date: 2020-04-13 23:03:44
 * @LastEditTime: 2020-04-13 23:07:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/SwordFingerOffer/2_singleton/singleton3.js
 */
//使用代理模式实现单例

var Singleton = function(name){
    this.name = name;
}

var proxySingleton = (function() {
    var isntance;
    return function(name){
        if(!instance){
            instance =  new Singleton();
        }
        return instance;
    }
})()

//test...
var a = Singleton.getInstance('coolsummer');
var b = Singleton.getInstance('coolsummer2');
console.log(a === b);
