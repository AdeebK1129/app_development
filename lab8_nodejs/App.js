console.log('----- Example 1: Global Object, Console -----');
console.log('Welcome to NodeJS by Adeeb Khan');
console.warn('WARNING! The file might be corrupted');
console.error('SYNTHAX ERROR! Check spelling');
console.trace('Trace error in line');

console.log('\n----- Example 2: Global Object, Timer ----- ');
setTimeout(() => {console.warn('Time is over')}, 3000);

let count = 9;
const timer = setInterval(() => {
    console.log(`Counting ${count}`);
    count -= 1;
    if (count == 0) {
        clearInterval(timer);
        
        console.log('\n----- Example 3: Check or Print Directory or File ----- ');
        console.log(`Current directory ${__dirname}`);
        console.log(`Current directory ${__filename}`);

        console.log('\n----- Example 4: Working with Different Module ----- ');
        // import the module
        const name = require('./mod');

        console.log(name.helper("Martha"));
        console.log(name.id(123));
        console.log(name.email('hwu@qcc.cuny.edu'));

        console.log('\n----- Example 5: nodejs Event Module ----- ');
        // import the nodejs events module
        const events = require('events');
        // use constructor 'new' to create an object of events
        const eventEmitter = new events.EventEmitter();

        eventEmitter.on('test', function(e){
            console.log(e);
        })

        eventEmitter.emit('test', 'EVENTS EMITTERS IN NODEJS');

        console.log('\n----- Example 6: Read Files in nodejs ----- ');
        const fs = require('fs');
        fs.readFile('readmore.txt', 'utf-8', (error, data) => {
            console.log(data);
            console.log(`Error = ${error}`);
        });

        console.log('\n----- Example 7: Write Files in nodejs ----- ');
        let info = "This file has three names: \n1. Peter\n2. Martha\n3. Jason";
        fs.writeFile('readmore.txt', info, (error) => {
            if(error){
                console.log(error);
            }
        })

        console.log('\n----- Example 8: Append Data Into Existing File in nodejs ----- ');
        fs.appendFile("user_emails.txt", info, (error) => {
            if(error){
                console.log(error)
            }
        })

        console.log('\n----- Example 9: Remove Files in nodejs ----- ');
        fs.unlink('user_emails.txt', (error) => {
            if(error){
                console.log(error);
            }
        })

        console.log('\n----- Example 10: Create Files in nodejs ----- ');
        // .writeFile(), .appendFile(), .open()
        fs.open('newfile.txt', 'w', (err => {
            if(err){
                console.log(err);
            }
            else{
                console.log('File saved!');
            }
        }))

        console.log('\n----- Example 11: Create Directory in nodejs ----- ');
        fs.mkdirSync('newimages');

        console.log('\n----- Example 12: Remove Directory in nodejs ----- ');
        fs.rmdirSync('newimages');



    }
}, 1);
