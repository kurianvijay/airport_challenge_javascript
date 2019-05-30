'use strict';

function Plane(){

}

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  // return airport.planes << new Plane
};

Plane.prototype.takeOff = function(airport) {
  airport.clearForTakeOff(this);
};
