//void function
function addNum(num1,num2)
{
    console.log(num1+num2);
}

addNum(2,8);

//non void with defualt values
function multNum(num1=1,num2=1)
{
   return num1 * num2;
}
num= multNum(2,8);
console.log(num);