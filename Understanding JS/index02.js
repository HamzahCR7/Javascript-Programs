//understanding protypal ingeritance
// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), 
// that is either null or references another object. That object is called “a prototype”:

/*When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. 
 In programming, this is called “prototypal inheritance”.*/

 const user={
    name:'Hamzah Aslam',
    age:26,
    getInfo:function(){
        console.log(this.name," ",this.age)
    }
 }
//  console.log(user)
 const admin={
    name:"Hammad Ashraf",
    __proto__:user//here admin object has access of object user
 }
 console.log(admin.__proto__)
admin.getInfo()