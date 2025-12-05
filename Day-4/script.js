console.log("Hello, World!");
let a=10;
const b=20;
var d=30;
console.log(a + b + d);

//array 
const c=[10,24.5,"hello",true];
console.log(c);
c.push(10);
c.unshift("hii");
console.log(c);
c.pop();
c.shift();  
console.log(c);
c[2]=100;
console.log(c);
c.unshift("11,34,'hi'");
console.log(c);
c.unshift("11");
console.log(c);
c.splice(1,3);
console.log(c);

//map,filter,reduce
const arr=[10,20,30,40,50];
const arr1=arr.map(num=>num*2);
console.log(arr1);
const arr2=arr.filter(num=>num>25);
console.log(arr2);
const arr3=arr.reduce((acc,num)=>acc+num,0);
console.log(arr3);

//objects
const user={
      firstname:"Birunda",
      lastname:"Laksmi",
}
const user2={} //empty object
console.log(user.firstname);
console.log(user['lastname']);
user.age=22; //adding new key-value pair
user['lastname']='sri';
delete user.firstname; //deleting key-value pair
console.log(user);  

console.log(Object.keys(user));
console.log(Object.values(user));   
console.log(Object.entries(user));

const mer1=[1,2,3];
const mer2=[4,5,6];
const mer=[...mer1,...mer2];
console.log(mer);

//functions
function add(a, b) { //hoisted function
      return a+b;
}
console.log(add(6,7));

const addition = function(a, b) { // non-hoisted function
      const sum=a+b; 
      return sum;
}

console.log(addition(8,9));

const array = [ 1,2,3];
function addarr(array){
      let sum=0;
      for(let i=0;i<array.length;i++)
      {
            sum+=array[i];
      }
      return sum;
}
console.log(addarr(array));
  
const array1 = [ 1,2,3];  // reduce method
function addarr1(array1){
const sum=array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
}
console.log(addarr1(array1));

//ternary 
const fact=function factorial(n){
      return (n<=1)? 1 : n*factorial(n-1);
}
console.log(fact(5));

//arrow function
const arrowfun = (a,b) => {return a+b;};
console.log(arrowfun(10,20));

function greet(name="Guest"){
      console.log("Hello, " + name);
}
greet();
greet("Birunda");

//loops

for(let i=1;i<=10;i++)
{
      console.log(`5 * ${i} = ${5*i}`);
}

//do while loop
let i=1;
do{
      console.log(`5 * ${i} = ${5 * i}`);
      i++;
}while(i<=10);


// for and for of loops

const arr4=[10,20,30,40,50];
for(let i=0;i<arr4.length;i++)
            {
      console.log(arr4[i]);
            }

for(const num of arr4)
{
      console.log(num);
}

//for in loop
const person={
      name:"Birunda",
      age:22,
      city:"Chennai"
};
for(const key in person)
{
      console.log(`${key}: ${person[key]}`);
}

//for each loop
const arr5=[1,2,3,4,5];
arr5.forEach(num=>console.log(num));

