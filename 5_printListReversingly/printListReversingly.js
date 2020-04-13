/*
 * @Author: your name
 * @Date: 2020-04-13 23:59:38
 * @LastEditTime: 2020-04-14 00:25:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/SwordFingerOffer/5_printListReversingly/5_printListReversingly.js
 */
//js 数组天然具备栈和队列的实现
// push/pop 在尾部插入和删除
// unshift/shift在头部插入和删除

//链表定义
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

function Stack(){
    var data = [];
    this.push = function(elem){
        data.push(elem);
    }
    this.pop = function(){
        return data.pop();
    }
    this.peek = function(){
        return data[data.length - 1] ;
    }
    this.isEmpty = function(){
        return data.length === 0;
    }
    this.clear = function(){
        data = [];
    }
    this.size = function(){
        return data.length;
    }
}



function printListReversingly(node){
    var stack = new Stack();
    whild(node){
        stack.push(node.val);
        node = node.next;
    }
    while(stack.size()){
        console(stack.pop())
    }
}
