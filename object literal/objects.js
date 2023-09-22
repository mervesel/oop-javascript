var userOne={
    email: 'merves@gmail.com',
    name: 'merve',
    login(){
        console.log(this.email,'has logged in.');
    },
    logout(){
        console.log(this.email,'has logged out.');
    }
};

console.log(userOne.login());