
export class Plant {
  constructor (name, resilience, difficulty){
    this.name = name;
    this.resilience = resilience;
    this.maxResilience = resilience;
    this.difficulty = difficulty;
    this.alive = true;
  }
  setPlantVerdency(){
    if (this.difficulty === "easy") {
      setInterval(() => {
        this.resilience--;
      }, 5000);
    } else if (this.difficulty === "med") {
      setInterval(() => {
        this.resilience--;
      }, 2000);
    } else if (this.difficulty === "hard") {
      setInterval(() => {
        this.resilience--;
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

  goodByeWorld(){
    setInterval(() => {
      if (this.resilience <= 0) {
        this.alive=false;
        console.log(this.alive)
      }
    }, 1000);
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
