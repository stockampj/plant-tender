
let deathCount = 0;

export class Plant {
  constructor (name, resilience, difficulty){
    this.name = name;
    this.resilience = resilience;
    this.maxResilience = resilience;
    this.difficulty = difficulty;
    this.alive = true;
  }
  // goodByeWorld(){
  //       this.alive=false;
  //       this.maxResilience = 0;
  //       deathCount++;
  //       this.difficulty = "dead"
  //       console.log(deathCount)
  // }

  setPlantVerdency(){
    if (this.difficulty === "easy") {
      setInterval(() => {
        this.resilience--;
        // if (this.resilience <=0){
        //   this.goodByeWorld();
        // }
      }, 5000);
    } else if (this.difficulty === "med") {
      setInterval(() => {
        this.resilience--;
        // if (this.resilience <=0){
        //   this.goodByeWorld();
        // }
      }, 2000);
    } else if (this.difficulty === "hard") {
      setInterval(() => {
        this.resilience--;
        // if (this.resilience <=0){
        //   this.goodByeWorld();
        // }
      }, 1000);
    } else {
      return false;
    }
  }

  feedPlant() {
    if (this.alive === false) {
      this.maxResilience = 0;
    } else if (this.resilience + (this.maxResilience*.5) >= this.maxResilience) {
      this.resilience = this.maxResilience;
    } else {
      this.resilience = this.resilience + (this.maxResilience*.5)
    }
  }
}

export class Greenhouse {
  constructor() {
    let cactus = new Plant("cactus", 20, "easy");
    let fern = new Plant("fern", 15, "med");
    let orchid = new Plant("orchid", 15, "hard");
    this.easy = cactus;
    this.med = fern;
    this.hard = orchid;
  }
}
