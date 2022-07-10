/*
Fabrica 

abstract class Figure{
  lineOne: number;
  lineTwo: number;
  
  abstract setlineOne(lineOne: number);
  abstract setlineTwo(lineTwo: number);
  abstract getLineOne(): number;
  abstract getLineTwo(): number;

  abstract getSquare(): number;
  abstract getPerimetr(): number;
}
class Romb extends Figure{
  lineOne: number;
  lineTwo: number;
  
  setlineOne(lineOne: number){
    this.lineOne = lineOne;
  }
  setlineTwo(lineTwo: number){
      this.lineTwo = lineTwo;
  }
  getLineOne(): number{
    return this.lineOne;
  }
  getLineTwo(): number{
    return this.lineTwo;
  }

  getSquare(): number{
    return this.lineOne * this.lineTwo;
  }
  getPerimetr(): number{
    return 2*(this.lineOne + this.lineTwo);
  }
}

class FabricaFigure{
  typeFigure = {
    romb: "Romb",

  }
  createGigure(typeFigure: string){
      if(typeFigure === this.typeFigure.romb){
        return new Romb();
      } 
  }
}

const fabrica = new FabricaFigure();
const figure1 = fabrica.createGigure("Romb");
console.log(figure1?.getLineTwo());
*/

//Prototype
/*
interface Prototype<T>{
  clone():  T;
}

class Human implements Prototype<Human>{
  name: string;
  age: number;  
  createdAt: Date;
  constructor(name: string, age: number){
      this.name = name;
      this.age = age;
      this.createdAt = new Date();
  }
  clone(): Human{
      let temp = new  Human(this.name, this.age);
      temp.createdAt = this.createdAt;
      return temp;
  }
}*/

//Мост

