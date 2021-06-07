const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

// there are two ways to export components
// named export
// default export, can at most have 1 default
export { isAdult, canDrink as default};