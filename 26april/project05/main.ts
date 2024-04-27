//make data type of object with :
//objects # 1  without alias
// let user1: {
//     name : string,
//     age : number,
//     role : string
// } ;
// user1 = {
//     name : "ifrah",
//     age : 7,
//     role : "sister",
    
// }

// console.log(user1.age);

// string boolean undefined any custom

//method # 2 custom data type (create your own  type)
// type  User = {        //type alias
//     name: string,
//     age: number,
//     role: string
// };

// let user1: User = {
//     name: "musfirah",
//     age: 8,
//     role: "sister"
// }
// console.log(user1.role);
// let user2: User = {
//     name: "kiran",
//     age: 22,
//     role: "elder sister"
// }
// console.log(user2.role);

// //nested object only daughter properties
// type  User = {        //type alias
//     name: string,
//     age: number,
//     role: string
//     children :{
//         name: string,
//         age:number,
//         role: string
//     }
// };
// let user1: User = {        //type alias
//     name: "shamshad",
//     age: 40,
//     role: "mother",
//     children :{
//         name: "sabila",
//         age:22,
//         role: "daughter"
//     }
// }
// console.log(user1.children.role);

//nested object  mother daughter both properties print
// type  User = {        //type alias
//     name: string,
//     age: number,
//     role: string
//     children :{
//         name: string,
//         age:number,
//         role: string
//     }
// };
// let user1: User = {        //type alias
//     name: "shamshad",
//     age: 40,
//     role: "mother",
//     children :{
//         name: "sabila",
//         age:22,
//         role: "daughter"
//     }
// }
// console.log(user1.name , user1.children.role);

//type literals or literaal type
// let trafficlight : "red" | "green" | "yellow"= "green";
// console.log(trafficlight);

//type intersection ==>   &
type student = {
    name: string,
    rollNumber:number
}

type teacher = {
    name: string,
    salary:number
}

let student1: student={
    name:"kiran",
    rollNumber: 9988
}

let teacher1: teacher={
    name: "sabila",
    salary:50000
}

let both: student & teacher={
    name: "sabila",
    rollNumber: 9988,
    salary: 50000,
}
console.log(student1.name , both.name);
