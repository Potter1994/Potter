// Prototype 原型鏈

function Person(name) {
    this.name = name
}

Person.prototype.getName = function(){
    return this.name
}

/* new 相當於
    var obj = {
        name: 'nick'
    }
    obj.__proto__ = Person.prototype
*/

var nick = new Person('nick')
var peter = new Person('peter')

console.log(nick.getName === peter.getName) // true

console.log(nick.__proto__ === Person.prototype)  // 同樣指向Person.prototype(節省記憶體空間)
console.log(peter.__proto__ === Person.prototype)

/* prototype chain 原型鏈
1. nick 找不到，就去 nick.__proto__(Person.prototype)
2. 如果還是找不到，就去 nick.__proto__.__proto__(Person.prototype.__proto__)
3. 原型鏈終點最終找到 Object.prototype
console.log(nick.__proto__ === Person.prototype) => true
console.log(Person.prototype.__proto__ === Object.prototype) => true
*/



// 為何要使用原型鏈? 原因=>function = instance一個物件出來所以裡面每個instance出來的函式
// 都會占用一個記憶體的空間，他們不是相同的東西，以下為不使用原型鏈用法

function Teacher (name) {
    this.name = name,
    this.getName = function(){ // eric的記憶體位置0x01, jane的記憶體位置0x02(看起來會像這樣) 
        return this.name
    }
}

var eric = new Teacher('eric')
var jane = new Teacher('jane')

console.log(eric.getName === jane.getName); // false