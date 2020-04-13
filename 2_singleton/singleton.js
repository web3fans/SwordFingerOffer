/*
 * @Author: your name
 * @Date: 2020-04-13 22:51:18
 * @LastEditTime: 2020-04-13 23:01:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/SwordFingerOffer/2_singleton/singleton.js
 */
//传统单例模式
var Singleton = function(name) {
   this.name = name;
   this.instance = null;
}

Singleton.getInstance = function(name){
    if(!this.instance){
        return new Singleton(name)
    }
    return this.instance;
}
// test...
var a = Singleton.getInstance('coolsummer');
var b = Singleton.getInstance('coolsummer2');
console.log(a === b);