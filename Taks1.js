// Task 1: Simple Programs todo for variables

// 1. Declare four variables without assigning values and print them in console

var var1 ,var2 , var3 , var4 ;

console.log(var1,var2,var3,var4);

//-------------------------------------------------------------------------------------

// 2. How to get value of the variable myvar as output

 var myvar=1;
 console.log(myvar);

//-------------------------------------------------------------------------------------

 // 3. Declare variables to store 
 // your first name, last name, marital status, country and age in multiple lines

var firstName = userInput[0]; //first name

var lastName = userInput[1]; //last name

var martialStatus = userInput[2]; // marital status

var country = userInput[3]; // country

var age =userInput[4]; // age

//-------------------------------------------------------------------------------------

// 4. Declare variables to store 
// your first name, last name, marital status, country and age in a single line

var userDetails = userInput[0].split(" ");

//-------------------------------------------------------------------------------------

// 5. Declare variables and assign string, boolean, undefined and null data types

var str = "Hello guvi" , yes =true , no = false , undefvar = undefined;

// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)


var str ="13";

var num = parseInt(str); // or Number(str) or  +str 

//------------------------------------------------------------------------------------------

// 7.  Write 6 statement which provide truthy & falsey values.

function  TruethyFalsey(val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}

// gives Truthy values

TruethyFalsey("hello");
TruethyFalsey(40);
TruethyFalsey(true);

// gives Falsey values

TruethyFalsey(false);
TruethyFalsey(null);
TruethyFalsey(undefined);

//------------------------------------------------------------------------------------------


// Task 2: Simple Programs todo for Operators

// 1. Square of a number

console.log(Math.pow(4,2)); 

// 2. Swapping 2 numbers

var a=2 ,b=3 ;
[a, b] = [b, a]
console.log(a,b);

// 3. Addition of 3 numbers

var c=4;
console.log(a+b+c);

// 4. Celsius to Fahrenheit conversion

var celcius = parseFloat(userInput[0]);

 var fahrenheit = (celcius * (9 / 5)) + 32;

 console.log(fahrenheit);

 // 5. Meter to miles

 var meter;
 console.log(meter*0.00062137);

// 6. Pounds to kg

var pounds ;
console.log(pounds/ 2.2046 );

// 7. Calculate Batting Average

var runsScored , timesOut;
console.log(runsScored/timesOut); // Batting Average is the 
                                  //ratio of a player’s number of runs to the number of times 
                                  //they have been out

// 8. Calculate five test scores and print their average                

var fiveTestScores =userInput[0].split(" ").map(Number);

var total = fiveTestScores.reduce(add);
console.log(total/(fiveTestScores.length));

// 9. Power of any number x ^ y.

var num1 , num2 ;
console.log(Math.pow(num1,num2));

// 10. Calculate Simple Interest;

var priniple , time , rateofInterest ;
var simpleInterest= (priniple*time*rateofInterest)/100;
console.log(simpleInterest);

// 11. Calculate area of an equilateral triangle

var side;
var areaOfEquilateral= (Math.pow(3,0.5)*side)/2;
console.log(areaOfEquilateral);

// 12. Calculate area of an Isosceles  triangle

var base , height;
var areaOfisosceles = (base*height)/2;
console.log(areaOfisosceles);

// 13. Volume Of Sphere

var radius ;
var volumeOfSphere = (4*(Math.PI)*(Math.pow(radius,3)))/3;
console.log(volumeOfSphere);

// 14. Volume Of Prism

var baseArea, lent;
var volumeOfPrism = baseArea*lent;
console.log(volumeOfPrism);

// 15. Find area of triangle.

var base , height;
var areaOfTriangle = (base*height)/2;
console.log(areaOfTriangle);

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product

var actualCost , soldCost ;
var discountOfProduct= actualCost - soldCost;
console.log(discountOfProduct);

//17. Given their radius of a circle and find its diameter, circumference and area

var radiusOfCircle;
var diameter = 2*radiusOfCircle;
var circumferenceOfCircle = 2*Math.PI*radiusOfCircle;
var areaOfCircle = Math.PI*radiusOfCircle*radiusOfCircle;
console.log(diameter,circumferenceOfCircle,areaOfCircle);

// 18. Given two numbers and perform all arithmetic operations.

var numb1, numb2;
console.log(numb1+numb2);
console.log(numb1-numb2);
console.log(numb1*numb2);
console.log(numb1/numb2);
console.log(numb1%numb2);

// 19. Display the asterisk pattern as shown below(No loop needed)

console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

// 20. Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. 
//Calculate the total energy bill of that consumer if per unit rate is 10?


var consump = 31 *100;
var totalEnergyBill = (10 * consump) / 1000;
console.log(totalEnergyBill);

// 21.Program To Calculate CGPA

var marksPerEachSubj = [ 9, 8, 7, 8, 9];

total =0;
for(i =0 ; i< marksPerEachSubj.length ; i=i+1)
{
    total += marksPerEachSubj[i];
}

cgpa = total / marksPerEachSubj.length ; 
console.log(cgpa);




// Task 3: Simple Programs todo for Condition , Looping and Arrays

// 1. Write a loop that makes seven calls to console.log to output the following triangle:


var hash = '';

for(i=0 ; i<7;i = i+1)
{
    hash = hash + "#"
    console.log(hash);
}

// 2. Iterate through the string array and print it contents

var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

for ( i=0 ; i< strArray.length ; i=i+1)
{
    str = strArray[i];

    if ((str===null) || (str===''))
    {  
        return false;
    }
    else
    {
            content= str.replace( /(<([^>]+)>)/ig, '');
    }
}

console.log(content);


// Arrays:


// Starting from the existing friends variable below, 
// change the element that is currently “Mari” to “Munnabai”.


let friends = [ “Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        
        if(input[i] === Mari)
        {
            input[i] = "Munnabai" ;
            return input ;
        }
    }
    }
    dataHandling(friends);

console.log(...friends);


// Starting from the friends variable below, 
// Loop and Print the names till you meet CaptianAmerica.

const friends = [
    “Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i] != "CaptianAmerica")
        {
            console.log(input[i]) ;
        }
        else{
            return 1 ;
        }

    }
    }
    dataHandling(friends);


// Find the person is ur friend or not.
const friends = [
    “Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”
    ];
    function dataHandling(input, name){
    if(input.indexOf(name) >=0)
    {
        return "friend";
    }
    else{
         return "not a friend";
    }

    }
    
    let found = dataHandling(friends,”Jeff”);
    console.log(found);


// We have two lists of friends below. 
// Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
    “Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”
    ];
    var friends2 = [
    “Gabbar”,
    “Rajinikanth”,
    “Mass”,
    “Spiderman”,
    “Jeff”,
    “ET”
    ];
    function dataHandling(input){
    
        friends = friends1.concat(friends2);
        friends.sort();
        return friends;
    }
    dataHandling(friends);

