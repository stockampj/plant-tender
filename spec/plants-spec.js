import {Plant, Greenhouse} from './../src/project.js'

describe ('plant', function(){
  let plant;
  beforeEach(function(){
    plant = new Plant("orchid", 10, "hard");
    jasmine.clock().install();
    plant.setPlantVerdency();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
    // plant.setPlantVerdency();
  })
  it('should have a name and resilience', function(){
    expect(plant.name).toEqual("orchid");
    expect(plant.resilience).toEqual(10);
  });

  it('should have the resilience lower by 1 every 5 seconds', function(){
    plant = new Plant("cactus", 20, "easy");
    plant.setPlantVerdency();
    jasmine.clock().tick(5000);
    expect(plant.resilience).toEqual(19);
  });

  it('should have the resilience lower by 1 every 5 seconds', function(){
    plant = new Plant("fern", 15, "med");
    plant.setPlantVerdency();
    jasmine.clock().tick(2001);
    expect(plant.resilience).toEqual(14);
  });

  it('should have the resilience lower by 1 every 5 seconds', function(){
    plant = new Plant("orchid", 15, "hard");
    plant.setPlantVerdency();
    jasmine.clock().tick(1001);
    expect(plant.resilience).toEqual(14);
  });

  it('should check if greenhouse object holds a cactus, fern and orchid for easy,medium and hard modes', function (){
    let greenhouse = new Greenhouse();
    let cactus = greenhouse.easy
    expect(greenhouse.easy).toEqual(cactus);
  });

  it('should check if feeding the plant restores its resilience by 50% if it is under  half its health', function(){
    plant = new Plant("cactus", 20, "easy");
    plant.resilience = 9;
    plant.feedPlant()
    expect(plant.resilience).toEqual(19);
  });

  it('should also check feeding it does not allow it to be over its max resilience',function(){
    plant = new Plant("cactus", 20, "easy");
    plant.resilience = 12;
    plant.feedPlant()
    expect(plant.resilience).toEqual(20);
  });
  it('should wither and die if plant gets to 0 verdency', function(){
    plant = new Plant("cactus", 20, "easy");
    plant.resilience = 1;
    plant.setPlantVerdency();
    plant.goodByeWorld();
    jasmine.clock().tick(5001);
    expect(plant.alive).toBe(false);
  });
  it('should prevent user from feeding the plant if it has withered and died', function(){
    plant = new Plant("cactus", 20, "easy");
    plant.resilience = 1;
    plant.setPlantVerdency();
    plant.goodByeWorld();
    jasmine.clock().tick(5001);
    plant.feedPlant();
    expect(plant.resilience).toEqual(0);
  })
});
