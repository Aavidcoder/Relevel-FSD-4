// const fs = require('fs');

// // fs.readFile('./temp', function(err,data){
// //     if(err){
// //         console.log(err);
// //     }else{
// //         console.log(data);
// //     }
// // })

// fs.appendFile('./temp',"My martial status is single",function(err){
//     if(err){
//         throw err;
//     }    
//     console.log("File is updated");
    
// });



// setTimeout(()=>{
//     console.log("App starts after 10 secs")
// },10000);


// const myInterval = setInterval(()=>{
//     for(let i=1;i<=10;i++){
//         console.log(i);
//     }
// }, 5000);


// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }

//     fullName(){
//         return `My Name is ${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person("Vikrant","Patil",26);
// const person2 = new Person("Nishant","Patil",22);

// // this keyword inside classes refer to the object that is being initialised via that class
// console.log(person1.fullName());
// console.log(person1);
// console.log(person2);
// console.log(person2.fullName());


// class Shape{

//     constructor(name,sides,sideLength){
//         this.name=name;
//         this.sides=sides;
//         this.sideLength=sideLength;
//     }

//     calcPerimeter(){
//         console.log(`The Perimeter of ${this.name} is ${this.sides * this.sideLength}`);
//     }
// }

// const square = new Shape("Square",4,5);
// const triangle = new Shape("Triangle",3,3);

// square.calcPerimeter();
// triangle.calcPerimeter();

// class Square extends Shape{
//     constructor(sideLength){
//         super("Square",4,sideLength)
//     }

//     calcArea(){
//         console.log(`The area of ${this.name} is ${this.sideLength * this.sideLength}`)
//     }
// }

// const square = new Square(60);

// square.calcArea();
// square.calcPerimeter();



// class Bicycle{
//     constructor(gear,speed){
//         this.gear=gear;
//         this.speed=speed;
//     }

//     applyBrake(decrement){
//         this.speed -= decrement;
//     }

//     speedUp(increment){
//         this.speed += increment;
//     }

//     getInfo(){
//         return `Number of gears are ${this.gear} and current speed is ${this.speed}`;
//     }
// }

// class MountainBike extends Bicycle{
//     constructor(gear,speed,seatHeight){
//         super(gear,speed);
//         this.seatHeight=seatHeight;
//     }

//     setHeight(newvalue){
//         this.seatHeight=newvalue;
//     }
// }

// const mountainBike = new MountainBike(3,100,25);
// console.log(mountainBike);

// mountainBike.applyBrake(10);
// mountainBike.speedUp(30);
// mountainBike.setHeight(40);
// console.log(mountainBike);