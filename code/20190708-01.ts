/*
*  public 公有的，任何属性和方法都可以在生成的对象中调用， 默认不写的
*            继承的对象也能调用，
*             默认就是 public，只是省略了
* private 私有的，只有在内部对象内才能访问，生成的对象调用不了，
*              要调用私有方法和属性，可以在 class 里定义 public 的方法来调用
* */

// 模板
class Person {
    // 定义了两个数据内容
    public firstName: string;
    public age: number;
    // constructor(name: string, age: number) {
    //     this.firstName = name;
    //     this.age = age;
    // }
    getFunc(){
        console.log('hi');
    }
    getToFunc () {
        this.getFunc();
        console.log('方法方法呦');
    }
}

let aPerson = new Person();
aPerson.getToFunc();