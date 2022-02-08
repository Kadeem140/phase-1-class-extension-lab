// Your code here
class Polygon {
    constructor(array){
        this.array = array
    }
    get countSides(){
      let sides = 0
        for (const index of this.array){
            sides += 1
        }
        console.log(sides)
    }

    get perimeter(){
        let sum = 0
        for (const index of this.array){
            sum += index
        }
        console.log(sum)
    }
}

class Triangle extends Polygon {
    get isValid(){//if this.array

    }
}

const Polygon1 = new Polygon([1, 2, 4])
console.log(Polygon1.countSides, "Complete")
console.log(Polygon1.perimeter, "perimeter test")

