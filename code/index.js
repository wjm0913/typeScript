var adda = function () { return 'add'; };
// function add(a: number, b: number) {
//  return a + b;
// }
// const add = (a: number, b: number): number => {
//  return a + b;
// }
/*
* 后边跟上  返回值的  数据类型  规定函数的返回值的数据类型  以调用时候的对返回值的操作
* */
var add = function (a, b) {
    console.log(a + b);
};
/*
*   void类型 代表 这个函数 没有返回值
* */
// let sum = add(10, 20);
// console.log(sum.toFixed(2)); toFixed（） number数据保留两位小数
// console.log(sum.substr(0, 3));  截取   第几个开始，截取的长度
var sum = add(10, 20);
console.log(sum);
