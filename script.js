// Combine What You Know #1, #2
console.log("The Bakery site is working!");
window.alert("Grand Opening February 26 at 8:00 a.m! Hope to see you then!");

// getElementById
var myDemo= document.getElementById("demoparent");
console.log(myDemo.childNodes.length);

// getElementsByTagName
var myDemoTags= document.getElementsByTagName("li");
console.log ("Number of li links in my document: "+ myDemoTags.length);

// Create Element
var createElement = document.createElement("li");

// Create Textnode
var textNode = document.createTextNode (" This is the text node I created.");

// append Child
myDemo.appendChild(createElement);
createElement.appendChild(textNode);

// Combine What You Know #3
var coupon= prompt ("Would you like a 20% off code for your first online order?");
switch(coupon) {
    case "yes":
    alert ("BAKE20");
    break;

    case "yea":
    alert ("BAKE20");
    break;

    case "yup":
    alert ("BAKE20");
    break;

    case "no":
    alert ("You sure? Come back if you change your mind!");
    break;
}