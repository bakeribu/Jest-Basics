//Another way to create a function:
/*
add: function(num1,num2){ //Created using function keyword
        return num1 + num2;
    }
*/

const { default: axios } = require("axios");

//Creating a sample function as an input function:
const functions = {
    add: (num1,num2) => num1 + num2, //Created using arrow operator.
    isundefined: () => undefined,
    checkValue: x => x,
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
};
module.exports = functions; //to export the file.