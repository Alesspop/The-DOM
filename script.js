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