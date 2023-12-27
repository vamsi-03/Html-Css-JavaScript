console.log("Var");

// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

function myfunction()
{
    var x = 5;
    var y = 6;
    var z = x + y;
    console.log(z);

}

function myfunctionlet()
{
    console.log("let");
    let x = 5;
    let y = 6;
    let z = x + y;
    console.log(z);
}
myfunction();
myfunctionlet();
