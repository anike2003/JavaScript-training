class Per{
    constructor (firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName=lastName;
        this.dob = new Date(dob);
    }
       getBirthYear()
              {
                return this.dob.getFullYear();
              }
            getFullName()
            {
                return  `${this.firstName} ${this.lastName}`;
              }
 

}
let per1 = new Person('Sulaiman','Rodiat',"2008-06-23")
let per2 = new Person('Adamu','Zainab',"2004-03-04")


console.log(per1.dob);
console.log(per2.getBirthYear());
console.log(per2.getFullName());



