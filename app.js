const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
      };
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: Number(dishPrice),
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex]
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const price = (appetizer.price + main.price + dessert.price).toFixed(2);
    return `Appetizer: ${appetizer.name}\nMain: ${main.name}\nDessert: ${dessert.name}\nTotal cost: $${price}`
  }
};

/**** Testing ****/ 
menu.addDishToCourse('mains', 'steak', '39.99');
menu.addDishToCourse('mains', 'burger', '17.99');
menu.addDishToCourse('mains', 'pasta', '18.99');
menu.addDishToCourse('appetizers', 'cheese sticks', '12.99');
menu.addDishToCourse('appetizers', 'shrimp bites', '13.99');
menu.addDishToCourse('appetizers', 'bread sticks', '9.99');
menu.addDishToCourse('desserts', 'cake', '7.99');
menu.addDishToCourse('desserts', 'ice cream', '5.49');
menu.addDishToCourse('desserts', 'creme brulee', '9.99');
const meal = menu.generateRandomMeal();
console.log(menu._courses);
console.log(meal)

