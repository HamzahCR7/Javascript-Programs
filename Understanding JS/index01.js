//understanding this in JS
//this refers to gloabal or window object
// "use strict"

// console.log(this);//refers to global object
// function sum(){
//     console.log(this);//refers to global object in regular function & if we use strict it will be undefined
// }
// sum();
// const sum=()=>{
//     console.log(this);
// };
// sum();
const details={
    name:'Hamzah Aslam',
    age:25,
    companiesWorked:["Edify","Mindtree","BMW","LTIMindtree"],
    logInfo:function(){
        console.log(this)//inside an object this refers to that object
    },
    logCompanies:function(){
        this.companiesWorked.forEach(function(company){
            console.log(this)//refers to global object because it is a regular function
        },this) //if we use this in second argument,this will point to parent object
    },
    logCompanies_01:function(){
        this.companiesWorked.forEach((company)=>{
            console.log(this.name,"has worked in ",company)//refers to parent object because we are using arrow fn
        })
    },

};
 
function infoPerson(name){
this.name=name//constructor
console.log(this ,"belongs to ",this.name)//belongs to parent method when initialize using new keyword
}
const info=new infoPerson('Hamzah');

// details.logInfo();
// details.logCompanies();
// details.logCompanies_01();
