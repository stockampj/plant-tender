
export class Plant {
  constructor (name, resilience, difficulty){
    this.name = name;
    this.resilience = resilience;
    this.difficulty = difficulty;
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
}
