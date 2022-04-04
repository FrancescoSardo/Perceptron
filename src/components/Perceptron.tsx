function segno(n){
  if(n>=0){
    return 1;
  }else{
    return -1;
  }
} 
// return n>=0 ?  1 : -1 
// SAREBBE IL NEURONE
export default class Perceptron{  
  weigth: number[] 
  learningRate: number = 0.02

  constructor(n: number){
    this.weigth = new Array(n)
    for(let i = 0; i<this.weigth.length; i++){
     this.weigth[i]= (Math.random()*2)-1;
    }
  }
  guessY(x: number){

    let w0 = this.weigth[0]
    let w1 = this.weigth[1]
    let w2 = this.weigth[2]
    // 
    return -(w2/w1) - (w0/w1)  * x
  }

  guess(inputs:number[]): number {
    let sum: number = 0; 
    for (let i= 0; i<this.weigth.length; i++){
      sum += inputs[i]*this.weigth[i]
    }
    let output = segno(sum);
    return output
  }

  train(inputs: number[], target: number){
    this.learningRate *= 0.995 
    let guess= this.guess(inputs);
    let error = target - guess;
    // tune oll the weigth,   SE GUESS E' GIUSTO QUESTO NON FA NIENTE, PERCHE'  1-1 = 0
    for (let i = 0; i<this.weigth.length; i++){
      this.weigth[i] += error * inputs[i] * this.learningRate
    }
  }
}
