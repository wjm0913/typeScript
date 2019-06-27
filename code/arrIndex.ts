/*
*定义数组
* */
/*
* 1.
* */
let myArr:number [] = [1,2,3];
let myArr2:string [] = ['1','2','3'];
/*
* 2.
* */
let newArr:Array<boolean> = [false,true];
/*
* 定义完类型之后 ，数组内部可以有不同类型的 东西。
* */

/*
* 定义元组
* */
let YuanArr : [ string , number ] = [ '11',789 ]; // 注意顺序

/*
*  YuanArr = [] 赋值的时候 不能给空
* */

/*
* 函数
* */
const add = (a: number, b: number) => {
    return a + b;
}

let sum = add(10, 20);
console.log(sum);

