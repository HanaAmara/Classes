class Car {
    wheelsNunbers;
    engine;
    color;
    constructor(_wheelsNumber, _engine, _color) {
        this.wheelsNunbers = _wheelsNumber;
        this.engine = _engine;
        this.color = _color;
    }
    oneString() {
        return `This car has ${this.wheelsNunbers}wheelsNunbers with ${this.engine} engine volume and the color is ${this.color}`
    }
    static bigE (){
        if (carA.engine>carB.engine && carA.engine>carC.engine){
            return carA;
        }
        else if (carB.engine>carA.engine && carB.engine>carC.engine){
            return carB;
        }
        return carC;
    }
}

// let car1 = new Car(4,1230,'Black')
// console.log(car1.oneString())


class Truck extends Car {
constructor (_wheelsNumber,_engine,_color,){ 
super(_wheelsNumber,_engine,_color)

}
get1 (){
    return `${super.oneString()},the name of the car is ${Truck.name.toUpperCase()}`
}   
}

let carA = new Truck (4,132,'white','Truck')
console.log(carA.get1())

class Private extends Car {
constructor (_wheelsNumber,_engine,_color,){ 
super(_wheelsNumber,_engine,_color)
}
get1 (){
        return `${super.oneString()},the name of the car is ${Private.name}`
}   
}
      
let carB = new Private (4,139,'red','Private')
console.log(carB.get1())

class Van extends Car {    
    constructor (_wheelsNumber,_engine,_color,){ 
    super(_wheelsNumber,_engine,_color)
}        
get text () {
  return toName ();
}  
toName (){
    return `${super.oneString()},the name of the car is ${Van.name.toUpperCase()}`;
} 
}
        
let carC = new Van (4,1329,'black','Van')
console.log(carC.toName())

let arrayc = [carA,carB,carC]
console.log(Car.bigE(arrayc))

let car = {
        wheelsNunbers:" ",
        engine:" ",
        color:" "
}

function  forTable() {
    car.wheelsNunbers = wheels.value;
    car.engine = engine.value;
    car.color = color.value;
    dataTable.innerHTML +=
    `<tr>
    <td>${car.wheelsNunbers}</td>
    <td>${car.engine}</td>
    <td>${car.color}</td>
    </tr>`
}
