var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var input=document.getElementsByTagName("input")
var button1=document.querySelectorAll("button")[0];
// body.style.background="red";
	
function clickme()
{
		var random1= Math.random();
		var random2= Math.random();
	// body.style.background="linear-gradient(to right,"
	// +random1.toString(16)
	// +","
	// + random2.toString(16);


console.log(random1.toString(16));	
}


function setGradient()
{
		body.style.background="linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
}

button1.addEventListener("click", clickme);
color1.append(color1.addEventListener("input", setGradient));
color2.append(color2.addEventListener("input", setGradient));
window.addEventListener("load", setGradient);
h3.append(color1.value +" " + color2.value);
