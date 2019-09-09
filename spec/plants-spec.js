import {Plant} from './../src/project.js'
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
});
