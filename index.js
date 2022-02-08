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
            return sides
    }

    get perimeter(){
        let sum = 0
        for (const index of this.array){
            sum += index
        }
            return sum
    }
}

class Triangle extends Polygon {
    get isValid(){//if this.array
        console.log(this.array, "OK")
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        
        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2) )

    }
}
class Square extends Polygon {
    get isValid(){
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]

        return ((side1 + side2 == side3 + side4) && (side1 + side3 == side2 + side4) && (side1 + side4 == side3 + side2))

    }

    get area(){
        let side1 = this.array[0]
        let side2 = this.array[1]
        let area = side1 * side2
        return area
    }

}

const Polygon1 = new Polygon([1, 2, 4])
console.log(Polygon1.countSides, "Complete")
console.log(Polygon1.perimeter, "perimeter test")

const Triangle1 = new Triangle([1,2,4])
console.log(Triangle1.isValid, "Lets see")