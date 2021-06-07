// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // arguments variable is accessible if it was a traditional function
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


//  this keyword - no longer bound with arrow function
const user = {
    name: 'Yuan',
    cities: ['Sydney', 'Beijing'],
    printPlacesLived: function () {
        // in here we can access to the THIS object
        // THIS now represents user object
        // this.cities.forEach(function (city) {
        //     // in here THIS is bound to this anonymous function
        //     // so this.name is undefined
        //     console.log(this.name + ' has lived in ' + city);
        // });

        // if we change the function to arrow function
        this.cities.forEach((city) => {
            // in here because arrow function doesn't bound to THIS
            // the THIS object is still referring to the user object
            console.log(this.name + ' has lived in ' + city);
        });
    }
}

user.printPlacesLived();

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(
            (number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());