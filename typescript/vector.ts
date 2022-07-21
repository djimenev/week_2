export class Vector{

    private elements:number[];
    public length:number;

    constructor(n:number, k:number){
        this.elements = [];
        for(let x = 0;x<n ; x++){
            this.elements.push(Number((Math.random() * k).toFixed()))
        }
        this.length = this.elements.length;

        }

        public print():void{
            console.log(this.elements);
            
        }

        public add(v1:Vector):Vector{
            let array: Vector = new Vector(0,0);

            if (this.length == v1.length) {
              for (let x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] + v1.elements[x]);
              } 
         
            }
            return array;
        }

        public subs(v1:Vector):Vector{
            let array: Vector = new Vector(0,0);

            if (this.length == v1.length) {
              for (let x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] - v1.elements[x]);
              }
        
            }
            return array;
        }

        public mult(v1:Vector):Vector{
            let array: Vector = new Vector(0,0);

            if (this.length == v1.length) {
              for (let x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] * v1.elements[x]);
              }
        
            }
            return array;
        }

        public multNumber(n:number):Vector{
            let array: Vector = new Vector(0,0);

              for (let x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] * n);
              }
              array.length = array.elements.length;
              return array;
            }
           
        }



let vector1 = new Vector(10,7);
let vector2 = new Vector(10,10);
//console.log(vector1);
//vector1.print();
console.log(vector1);
console.log(vector2);

//console.log(vector1.multNumber(3));
console.log(vector1.mult(vector2));





