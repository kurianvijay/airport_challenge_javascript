'use strict';

describe("Feature Test:", function(){

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

   it("planes can be instructed to land at an airport", function() {
     // airport.land(plane)
     plane.land(airport);
     expect(airport.planes()).toContain(plane);
   });

   it("planes can be instructed to take off from an airport", function(){
     plane.land(airport);
     plane.takeOff(airport);
     expect(airport.planes()).not.toContain(plane);
   });

});
