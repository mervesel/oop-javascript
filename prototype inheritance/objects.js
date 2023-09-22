function User(email,name){
    this.email=email;
    this.name=name;
    this.online=false;
}

User.prototype.login=function(){
    this.online=true;
    console.log(this.email,'has logged in');
}

User.prototype.logout=function(){
    this.online=false;
    console.log(this.email,'has logged out');
}

function Admin(...args){
    User.apply(this,args);
    this.role='super admin';
    
}

Admin.prototype=Object.create(User.prototype);

Admin.prototype.deleteUser=function(u){
    users=users.filter(user=>{
        return user.email !=u.email;
    })
}

var userOne=new User('yoshi@gmail.com','yoshi');
var userTwo=new User('shaun@gmail.com','shaun');
var admin=new Admin('kzbn@gmail.com','jelly');

var users=[userOne,userTwo,admin];



console.log(admin);
console.log(admin.deleteUser(users[1]));
console.log(userOne.deleteUser(users[1]));

console.log(users);


