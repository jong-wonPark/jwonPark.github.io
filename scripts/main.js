let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-tensorflow.png') {
      myImage.setAttribute ('src','images/logo-pytorch.jpg');
    } else {
      myImage.setAttribute ('src','images/logo-tensorflow.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function(){
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Tensorflow is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Tensorflow is cool, ' + storedName;
}