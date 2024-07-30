// July 30, JS Object
// create an object for student with properties of name, age, and school
let student1 = {
    name: "Peter Pan",
    age: 23,
    school: "QCC"
}

// retrieve information in an object using squared bracket:
console.log(student1["name"]);

// retrieve information using the dot:
console.log(student1.school);

// you cannot use the dot notation if the key, property name, starts with a number

// update data in an object can be done using the dot or squared bracket notation: 

student1.age = 30;
student1["school"] = "NYU";
console.log(`Updated Age ${student1.age}`);
console.log(`Updatrd School ${student1.school}`);

// EXAMPLE 2: NESTED OBJECT AND ARRAY WITHIN AN OBJECT
console.log("\n ----- Example 2 -----");
let user1 = {
    name: "Martha",
    age: 80,
    // an array as property
    friends: ["Wendy", "Carl", "Peter"],
    // an object as property
    favorite: {
        food: "cake",
        color: "green"
    }
}

// access key inside an object
let favorite_food = user1.favorite.food;
console.log(`${user1.name} favorite food is ${favorite_food}`);

// access an item inside an array
let second_friend = user1.friends[1]
console.log(`${user1.name} second friend is ${second_friend}`);

// EXAMPLE 3: ARRAY LIST AS OBJECT
// we can also create an array with objects as list items:
console.log("\n ----- Example 3 -----");
let schedule = [
    {
        day: "Monday",
        plan: "Go to yoga class",
        time: "6:30 PM"
    },
    {
        day: "Tuesday",
        plan: "Complete bootcamp labs",
        time: "11 PM"
    }
]

// access the plans for Tuesday
console.log(`The plan for Tuesday is ${schedule[1].plan}`);

// EXAMPLE 4: OBJECT METHODS
console.log("\n ----- Example 4 -----");
let item = {
    // properties
    id: 123,
    name: "pencil",
    quantity: 200,
    colors: ["red", "black", "blue"],
    // methods
    sale: () => {
        console.log("SALE! 50% OFF")
    },
    quantity_cart: (e) => {
        return this.quantity -= e
    }
}

// access sale() method
console.log(`The of ${item.name} is ${item.sale}`);
console.log(`The remaining quantity of ${item.name} is ${item.quantity_cart}`);

/*
// JSON, JavaScript Object Notation, is a popular test format that is used to store and exchange data.

JSON data is stored as a comma-seperated list of key:value pairs within a JSON object

We can convert a JavaScript object to a JSON object by using the 'JSON.stringify()' method

We can also convert from JSON object to JavaScript object using 'JSON.parse()' method
*/

// EXAMPLE 5: JSON
console.log("\n ----- Example 5 -----");
let fashionshow = {
    category: "fashion",
    models: [
        {
            name: "Alice",
            age: 21,
            city: "NYC"
        },
        {
            name: "Kelly",
            age: 23,
            city: "Paris"
        }
    ]
}

// print the object 'fashionshow'
console.log(fashionshow);

// create a JSON version of the JavaScript object
let json_fashionshow = JSON.stringify(fashionshow);
console.log("JSON Version: ");
console.log(json_fashionshow);
