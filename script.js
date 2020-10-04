const myInfo = require('./information.js');

let cowsay = require('cowsay');

console.log(cowsay.say({
    text : (`Hello my name is ${myInfo.name} and I am in a process of learning at the ${myInfo.school} in ${myInfo.campus}.`),
    e : "oO",
    T : "U",
}));
