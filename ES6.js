const numbers = [12, 34, 45, 56];

const student = {
    name: 'sayed al maruf',
    roll: 1,
    id: 13242,
    age: 26,
    address: 'uposohor, sylhet, bangladesh'
}
// 1. template string
const about = `My name is ${student.name}
my age is ${student.age}
my address: ${student.address}

`
// console.log(about);

// 2.arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 10;
// const output = addSixtyFive(10);


//  even and odd 

const  isEven = x =>{
    if(x%2==0){
        return x,'even';
    }
    else {
        return x, 'odd';
    }
}
// const output = isEven(46);
// console.log(output)

const addThree = (x,y,z) => x + y + z;
// const output = addThree (12,12,12);
// console.log(output)

//3. spread operator 

const newNumbers = [...numbers];
const curentNumbers = [...numbers,10,20,30];

// console.log(numbers)
// console.log(newNumbers)
// console.log(curentNumbers)