//constructor
function Person(firstName,lastName,dob){
    //intializing variables
              this.firstName = firstName;
              this.lastName=lastName;
              this.dob = new Date(dob);
              this.getBirthYear=function()
              {
                return this.dob.getFullYear();
              }
              this.getFullName=function(){
                return  `${this.firstName} ${this.lastName}`;
              }

}

Person.prototype.getBirthYear=function()
{
  return this.dob.getFullYear();
}

Person.prototype.getFullName=function()
{
  return `${this.firstName} ${this.lastName}`;
}



//instantiate object
let person1 = new Person('Sulaiman','Rodiat',"2008-06-23")
let person2 = new Person('Adamu','Zainab',"2004-03-04")

console.log(person1.dob);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

