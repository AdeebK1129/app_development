var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// explicit type
function greeter(username) {
    console.log("Welcome to Typescript ".concat(username));
}
var user = "prof wu";
greeter(user);
console.log("\n ---------- Example 1: 'Explicit & Implicit' Types ---------- ");
// implicit type
var y = 12;
console.log(y);
// explicit array (list)
var colors = ['red', 'blue', 'white'];
console.log(colors);
// implicit array
var numbers = [3, -9, 5];
console.log(numbers);
console.log("\n ---------- Example 2: 'any' type ---------- ");
// use the 'any' data type: allows all types
var a;
a = 5;
console.log("a = 5 ", typeof (a));
a = "Peter Pan";
console.log("a = 'Peter Pan'", typeof (a));
a = false;
console.log("a = false", typeof (a));
console.log("\n ---------- Example 3: 'unknown' type ---------- ");
// 'unknown' is similar to 'any'
var b;
b = 10;
console.log("b = 10", typeof (b));
b = "Martha";
console.log("b = 'Martha'", typeof (b));
b = true;
console.log("b = true", typeof (b));
console.log("\n ---------- Example 4: 'enum' type ---------- ");
// 'enum' is a special class that represents a group or list of contant values (values that can't be changed)
// 'enum' can use numerical or string constant
var Countries;
(function (Countries) {
    Countries[Countries["USA"] = 0] = "USA";
    Countries[Countries["Canada"] = 1] = "Canada";
    Countries[Countries["Mexico"] = 2] = "Mexico";
})(Countries || (Countries = {}));
var USA = Countries.USA;
var Canada = Countries.Canada;
var Mexico = Countries.Mexico;
console.log("Class object of Canada ".concat(Canada));
console.log("Class object of Mexico ".concat(Mexico));
console.log("Class object of USA ".concat(USA));
console.log("\n ---------- Example 5: data type classes ---------- ");
// if the data type is explicit, you can directly use the method to the specific data type
var username = "Ann Smith";
var characters_username = username.length;
console.log("User ".concat(username, " has ").concat(characters_username, " characters"));
// If it is an implicit data type, we must cast it to the specific data type before applying a method:
var firstname = "Luisa";
firstname = firstname; // optional in new versions of TS
var characrer_firstname = firstname.length;
console.log("User ".concat(firstname, " has ").concat(characrer_firstname, " character"));
console.log("\n ---------- Example 6: specify return type function ---------- ");
function get_time() {
    return new Date().getHours();
}
console.log("The time is ".concat(get_time()));
console.log("\n ---------- Example 7: void function ---------- ");
// void function does not return value
function greeting() {
    console.log('Welcome to Angular data types!');
}
greeting();
console.log("\n ---------- Example 8: functions with parameters ---------- ");
function get_sum(num1, num2, name) {
    var result = name + ", the number is " + (num1 + num2);
    return result;
}
console.log(get_sum(2, 3, "Peter"));
console.log("\n ---------- Example 9: optional parameters ---------- ");
// The ? operator marks parameter as optional
function sum_total(n1, n2) {
    if (n2 !== undefined) {
        return (n1 + n2);
    }
    else {
        return -1;
    }
}
console.log("The sum is ".concat(sum_total(5, 9)));
console.log("The sum is ".concat(sum_total(5)));
console.log("\n ---------- Example 10: spread synthax ---------- ");
// spread synthax is used to deconstruct an array
// allows for any number of parameters 
function get_average() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var average = 0;
    var count = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
        count++;
    }
    average = total / n.length;
    return average;
}
console.log("The average is ".concat(get_average(10, 6, 2)));
console.log("\n ---------- Example 11: class ---------- ");
var Car = /** @class */ (function () {
    // constructor
    function Car(brand, model, year_manufacture) {
        this.brand = brand;
        this.model = model;
        this.year_manufacture = year_manufacture;
    }
    // getter
    Car.prototype.year = function () {
        console.log("The car was manufactured at ".concat(this.year_manufacture));
    };
    return Car;
}());
// create a model for class Car 
var usercar = new Car('Tesla', 'S', 2023);
// access data of the model of the Car through 'usercar'
console.log("Car Brand = ".concat(usercar.brand));
usercar.year(); // accessing method 'year'
console.log("\n ---------- Example 12: inheritance ---------- ");
// Inheritance is a name of transfering genetic characterisrics by extending from one class to another using the keyword 'extends'
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log('Registration Successful');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log("x items were sold");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid');
    };
    return Employee;
}(Customer));
// create a model for Person
var person1 = new Person;
// calling the method 'save()' of the model 'person1'
console.log("calling the method 'save()' of the model 'person1'");
person1.save();
// create a model for Customer
var customer1 = new Customer;
// calling the method 'sale()' of the model 'customer1
console.log("calling the method 'sale()' of the model 'customer1");
customer1.sale();
// calling the inherent method 'save()' through model 'customer1'
console.log("calling the inherent method 'save()' through model 'customer1'");
customer1.save();
// create a model for Employee
var employee1 = new Employee;
// calling the inherent method 'save()' through model 'employee1'
console.log("calling the inherent method 'save()' through model 'employee1'");
employee1.save();
