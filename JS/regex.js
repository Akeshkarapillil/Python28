/*

Regular Expressions
-------------------

    Regular expressions are a way to match a pattern of characters in a string.

    Syntax:

        /pattern/modifier


    Modifiers: i, g, m

        i: case insensitive
        g: global search
        m: multiline search

    Validate the following:

    name -> only letters, min 3, max 10
    email 
    phone -> only numbers, min 10, max 10
    date -> dd/mm/yyyy


*/

// let pattern = /Hello/i;

// let str = 'Hello Wor5ld';

// // let n = str.search(pattern);

// let newStr = str.replace(pattern, 'Hey');

// console.log(newStr)


function checkPin(){
    let pin = document.getElementById('pincode').value;
    let pattern = /^[0-9]{6}$/;
    
    if(pattern.test(pin)){
        document.getElementById('pincode').style.border = '1px solid green';
    }
    else{
        document.getElementById('pincode').style.border = '1px solid red';
    }

    // console.log(pattern.test(pin))
    // console.log(pattern.exec(pin))

    
}