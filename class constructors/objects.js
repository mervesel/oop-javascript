class User{
    constructor(email,name){
        this.email=email;
        this.name=name;
    }
}

var userOne=new User('merves@gmail.com','merve');
var userTwo=new User('yoshi@gmail.com','yoshi');

//the new keyword:
//-creates a new empy object {}
//-sets the value of 'this' to be the new empty object
//-calls the constructor method

console.log(userOne);
console.log(userTwo);
