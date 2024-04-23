let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName;
	do {
		myName = prompt("Please enter your name.");
	} while(!myName);

    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
myButton.onclick = function() {
	setUserName();
}

const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/firefox-icon.png") {
		myImage.setAttribute("src", "images/firefox-icon-gray.png");
	} else {
		myImage.setAttribute("src", "images/firefox-icon.png");
	}
};

