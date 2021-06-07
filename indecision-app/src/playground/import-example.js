// because of webpack, we can import other js files in
// and use the functions inside other files 

// name of the default export component can be changed
import canDrinkDifferentName, {isAdult} from  './export-example.js';

console.log('import-example.js is running!');

console.log(isAdult(13));
console.log(canDrinkDifferentName(25));