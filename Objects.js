let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenething.co.uk,',
    location:'berlin',
    blogs:['why mac & cheese rules','10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs:function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog);
        });
    }
};
user.logBlogs();

//Matc object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// numeros random
/*
const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));*/

const userOne={name: 'ryu', age:30};
const userTwo=userOne;

console.log(userOne, userTwo);

userOne.name='chun-li';
console.log(userOne, userTwo);