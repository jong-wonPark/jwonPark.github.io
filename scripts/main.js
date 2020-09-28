let myButton = document.querySelector('button');

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
    }
    welcomMessage()
}

function welcomMessage() {
    alert("Welcome to new world, " + localStorage.getItem('name'))
}

setUserName();