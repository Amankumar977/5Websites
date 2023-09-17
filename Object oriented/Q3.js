class Temperature {
  constructor() {
    this._celcius = 0;
    this._fahrenheit = 25;
  }

  get getCelsius() {
    return this._celcius;
  }
  get getFahrenheit() {
    return this._fahrenheit;
  }
  set setCelcius(degree) {
    if (typeof degree === "number") {
      this._celcius = degree;
      this._fahrenheit = degree * (9 / 5) + 32;
    }
  }
  set setFahrenheit(degree) {
    if (typeof degree === "number") {
      this._fahrenheit = degree;
      this._celcius = (degree - 32) * (5 / 9);
    }
  }
}
const temperature = new Temperature();
console.log(`Intial Celsius : ${temperature.getCelsius} \u00B0 C`);
console.log(`Intial Fahrenheit : ${temperature.getFahrenheit} \u00B0 F`);
temperature.setCelcius = 25;
console.log(`Celsius : ${temperature.getCelsius} \u00B0C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} \u00B0F`);
temperature.setFahrenheit = 68;
console.log(`Celsius : ${temperature.getCelsius}\u00B0C `);
console.log(`Fahrenheit: ${temperature.getFahrenheit} \u00B0F`);
