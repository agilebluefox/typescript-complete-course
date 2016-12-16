// string
let who: string = 'David';

// number
let age: number = 47;

// boolean
let hasAchesAndPains: boolean = true;

// array
let aches: string[] = ['sore legs', 'nerve impingement'];

// tuple
let achesAndPains: [string, number] = ['sore legs', 2];

// enum
enum Color {
    Gray, // 0
    Green, // 1
    Blue = 100, // 100
    Purple, // 101
    Red = 2, // 2
    Yellow // 3
};

let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = 'Honda';
console.log(car);
car = {brand: 'BMW', model: 3};
console.log(car);