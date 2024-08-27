// explicit type
function greeter(username:string){
    console.log(`Welcome to Typescript ${username}`)
}

let user = "prof wu"
greeter(user)
console.log("\n ---------- Example 1: 'Explicit & Implicit' Types ---------- ")

// implicit type
let y = 12

console.log(y)

// explicit array (list)
let colors:string[] = ['red', 'blue', 'white']
console.log(colors)

// implicit array
let numbers = [3, -9, 5]
console.log(numbers)

console.log("\n ---------- Example 2: 'any' type ---------- ")
// use the 'any' data type: allows all types
let a:any
a = 5
console.log("a = 5 ", typeof(a))
a = "Peter Pan"
console.log("a = 'Peter Pan'", typeof(a))
a = false
console.log("a = false", typeof(a))

console.log("\n ---------- Example 3: 'unknown' type ---------- ")
// 'unknown' is similar to 'any'
let b:unknown
b = 10
console.log("b = 10", typeof(b))
b = "Martha"
console.log("b = 'Martha'", typeof(b))
b = true
console.log("b = true", typeof(b))

console.log("\n ---------- Example 4: 'enum' type ---------- ")
// 'enum' is a special class that represents a group or list of contant values (values that can't be changed)
// 'enum' can use numerical or string constant
enum Countries {USA, Canada, Mexico}
let USA = Countries.USA
let Canada = Countries.Canada
let Mexico = Countries.Mexico

console.log(`Class object of Canada ${Canada}`)
console.log(`Class object of Mexico ${Mexico}`)
console.log(`Class object of USA ${USA}`)

console.log("\n ---------- Example 5: data type classes ---------- ")
// if the data type is explicit, you can directly use the method to the specific data type
let username:string = "Ann Smith"
let characters_username = username.length
console.log(`User ${username} has ${characters_username} characters`)

// If it is an implicit data type, we must cast it to the specific data type before applying a method:
let firstname = "Luisa"
firstname = <string>firstname // optional in new versions of TS
let characrer_firstname = firstname.length
console.log(`User ${firstname} has ${characrer_firstname} character`)

console.log("\n ---------- Example 6: specify return type function ---------- ")
function get_time():number{
    return new Date().getHours()
}
console.log(`The time is ${get_time()}`)

console.log("\n ---------- Example 7: void function ---------- ")
// void function does not return value
function greeting():void{
    console.log('Welcome to Angular data types!')
}
greeting()

console.log("\n ---------- Example 8: functions with parameters ---------- ")
function get_sum(num1:number, num2:number, name:string):string{
    let result:string = name + ", the number is " + (num1 + num2)
    return result
}
console.log(get_sum(2, 3, "Peter"))

console.log("\n ---------- Example 9: optional parameters ---------- ")
// The ? operator marks parameter as optional
function sum_total(n1: number, n2?:number):number{
    if(n2 !== undefined){
        return (n1 + n2)
    }
    else{
        return -1
    }
}

console.log(`The sum is ${sum_total(5,9)}`)
console.log(`The sum is ${sum_total(5)}`)

console.log("\n ---------- Example 10: spread synthax ---------- ")
// spread synthax is used to deconstruct an array
// allows for any number of parameters 
function get_average(...n:number[]): number{
    let total = 0
    let average = 0
    let count = 0
    for(let i = 0; i < n.length; i++){
        total += n[i]
        count++
    }
    average = total / n.length
    return average
}

console.log(`The average is ${get_average(10, 6, 2)}`)

console.log("\n ---------- Example 11: class ---------- ")
class Car{
    // define the data type
    brand: string
    model: string
    year_manufacture: number

    // constructor
    constructor(brand:string, model:string, year_manufacture: number){
        this.brand = brand
        this.model = model
        this.year_manufacture = year_manufacture
    }

    // getter
    year(){
        console.log(`The car was manufactured at ${this.year_manufacture}`)
    }
}

// create a model for class Car 
let usercar = new Car('Tesla', 'S', 2023)
// access data of the model of the Car through 'usercar'
console.log(`Car Brand = ${usercar.brand}`)
usercar.year() // accessing method 'year'

console.log("\n ---------- Example 12: inheritance ---------- ")
// Inheritance is a name of transfering genetic characterisrics by extending from one class to another using the keyword 'extends'
class Person{
    save(){
        console.log('Registration Successful')
    }
}

class Customer extends Person{
    sale(){
        console.log(`x items were sold`)
    }
}

class Employee extends Customer{
    salary(){
        console.log('Salary paid')
    }
}

// create a model for Person
let person1 = new Person
// calling the method 'save()' of the model 'person1'
console.log("calling the method 'save()' of the model 'person1'")
person1.save()

// create a model for Customer
let customer1 = new Customer
// calling the method 'sale()' of the model 'customer1
console.log("calling the method 'sale()' of the model 'customer1")
customer1.sale()
// calling the inherent method 'save()' through model 'customer1'
console.log("calling the inherent method 'save()' through model 'customer1'")
customer1.save()

// create a model for Employee
let employee1 = new Employee
// calling the inherent method 'save()' through model 'employee1'
console.log("calling the inherent method 'save()' through model 'employee1'")
employee1.save()
