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

class Admin extends User{
    deleteUser(user){
        users=users.filter(u=>{
            return u.email != user.email;
        })
    }
}

var userOne=new User('merves@gmail.com','merve');
var userTwo=new User('yoshi@gmail.com','yoshi');
var admin=new Admin('merve@gmail.com','merve');


var users=[userOne,userTwo,admin];
admin.deleteUser(userOne);
console.log(users);


