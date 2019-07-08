/*
*  类的特点   继承 多态
*
* */

// 模板
class Person {
    // 定义了两个数据内容
    firstName: string;
    age: number;
    constructor(name: string, age: number) {
        this.firstName = name;
        this.age = age;
    }
    getFunc(){
        console.log('hi');
    }
    getToFunc () {
        this.getFunc();
        console.log('方法方法呦');
    }
}
// 生成一个对象
// let aPerson = new Person(); // 可以传递承参数  constructor

// aPerson.getToFunc()

// 设置 firstName 的内容
// aPerson.firstName = "wjm0913";
// 读取 firstName 的内容
// console.log(aPerson.firstName);

class Class2Person extends Person {  // 代表我直接继承了  Person 这个类的所有 属性 和 行为
    getToFunc(){
        /*
        * 自己有的时候调用自己 ，没有向父类找
        * */
        console.log('自己本身有这个方法，是调用自己还是父类呢?//答案是:自己');
    }

    // super 代表父类  直接 嗲用了父类的  方法，注意关键字 super
    greetLikeNormalPeople() {
        super.getFunc();
    }
}
// let Class2s = new Person('123',456); // 实例化 父类
//let Class2s = new Class2Person('123',456); // 实例化 子类
let Class2s :Class2Person  = new Class2Person('123',456); // 实例化 子类  实力化的同时可以做d定义 注意定义的是谁，方法是调用不到的
//let Class2s :Person  = new Class2Person('123',456); // 实例化 子类  实力化的同时可以做d定义 注意定义的是谁，方法是调用不到的
Class2s.getToFunc()  // 用着子类 直接调用父类的方法
Class2s.greetLikeNormalPeople()



