
function User(email,name){
    this.email=email;
    this.name=name;
    this.online=true;
    this.login=function(){
        console.log(this.email,'has logged in.');
    }
}


var userOne=new User('yoshi@gmail.com','yoshi');
var userTwo=new User('shaun@gmail.com','shaun');

