/*
 * @Author: your name
 * @Date: 2020-04-14 00:25:47
 * @LastEditTime: 2020-04-14 00:27:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/SwordFingerOffer/5_printListReversingly/printListReversingly2.js
 */

 //链表定义
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
function printListReversingly(node){
    if(!node) return;
    whild(node){
       printListReversingly(node.next)
    }
    console.log(node.val)
}