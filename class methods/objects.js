class User{
    constructor(email,name){
        this.email=email;
        this.name=name;
        this.score=0;
    }
    login(){
        console.log(this.email,'just logged in.');
        return this;
    }
    logout(){
        console.log(this.email,'has logged out.');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'score is now ',this.score);
        return this;
    }
}

var userOne=new User('merves@gmail.com','merve');
var userTwo=new User('yoshi@gmail.com','yoshi');

//the new keyword:
//-creates a new empy object {}
//-sets the value of 'this' to be the new empty object
//-calls the constructor method

console.log(userOne.login());
console.log(userOne);
console.log(userOne.updateScore());

//method chaning
userOne.login().updateScore().logout()
