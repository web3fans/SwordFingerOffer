/*
 * @Author: coolsummer
 * @Date: 2020-04-13 23:07:29
 * @LastEditTime: 2020-04-13 23:51:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/SwordFingerOffer/3_find/find.js
 */

//二维数组中的查找，给定一个从左到右递增，从上到下递增,查找给定的数字是否存在，存在返回true，不存在返回false
//note：从二维数组右上角开始遍历---------当前行最大，当前列最小
function find(arr, cols, rows, target){
    if(arr && rows > 0 && cols > 0){
        for(var i = 0, j = col - 1; i < row && j > 0;;){
            if(arr[i][j] === target){
                return true;
            }else if(arr[i][j] > target){
                j--;
            }else{
                i++;
            }
        }
    } 

    return false;
}
