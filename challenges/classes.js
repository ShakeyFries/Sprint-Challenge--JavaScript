
class CuboidMakerA {
      constructor(attrs){
      this.length = attrs.length;
      this.width = attrs.width;
      this.height = attrs.height;
      }
    volume = function (){
      return `${this.length * this.width * this.height}`;
    }
    surfaceArea = function (){
      return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`
    };
};

class CubeMaker extends CuboidMakerA {
      constructor(cubeAttrs) {
        super(cubeAttrs);
      }
      cubeV = function(){
           return Math.pow(this.length, 3); 
      }
      cubeSA = function(){
            return 6 * Math.pow (this.length, 2);
      }
};
    const cuboidA = new CuboidMakerA({
      length:4,
      width:5,
      height:5,
    });

const cube = new CubeMaker({
      length: 3,
      width: 3,
      height: 3,
});

    

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidA.volume()); // 100
console.log(cuboidA.surfaceArea()); // 130
console.log(cube.cubeV()); 
console.log(cube.cubeSA()); 

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMakerA.  Test your work by logging out your volume and surface area.