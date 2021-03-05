/* let name = require('readline-sync');

let greetFirstName = name.question('What is your first name? ');
let greetLastName = name.question('What is your last name? ');

console.log(`Hello, ${greetFirstName} ${greetLastName}.`);
*/


/*
In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use the return values to greet the user with their full name.
*/

// 1st step is to create a function that will do the same thing to the same prompt.



function greetUser(prompt){   
// We create a function and name it greetUser with one paramter name prompt. Since we will be prompting the user.

    let name = require('readline-sync');
    // we ititialize this code above inside the scope of our function.
    
    let userName = name.question(prompt);
    // we set up the ability to ask the user a question and record their response and set it to variable userName.
    
    return userName;
    
    // we return the users input from line 26.
}

let firstName = greetUser(`What is your first name?`);
/* We create another variable to store the value of greetUser with the prompt 'What is your first name'. 
It will cycle through the function greetUser() and return the name and store it in the variable firstName
*/

let lastName = greetUser(`What is your last name?`);
/* We create another variable to store the value of greetUser with the prompt 'What is your last name'. 
It will cycle through the function greetUser() and return the name and store it in the variable lastName
*/

console.log(`Hello, ${firstName} ${lastName}!`);

// we can return and print the results in the console.log using the variables firstName and lastNAme
// Keep in mind while the names can change the structure of it being printed out or us greeting the user won't change.