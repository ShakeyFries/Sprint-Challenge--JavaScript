
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
    const cuboidA = new CuboidMakerA({
      length:4,
      width:5,
      height:5,
    });

    

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidA.volume()); // 100
console.log(cuboidA.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMakerA.  Test your work by logging out your volume and surface area.