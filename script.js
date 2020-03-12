const cityMileage = document.getElementById('cityMileage');
const motorwayMileage = document.getElementById('motorwayMileage');
const costAdvantage = document.getElementById('cost-advantage');
const car = document.getElementById('car');
const fuelPrice = 5;
const fuelConsumption = {
  petrol: {
    city: 8 / 100,
    motorway: 5 / 100,
  },
  hybrid: {
    city: 4 / 100,
    motorway: 7 / 100,
  },
};
let fuelCost = {
  petrol: "",
  hybrid: "",
};

function showFuelCost() {
  fuelCost.petrol = Math.round((cityMileage.value * fuelConsumption.petrol.city +
    motorwayMileage.value * fuelConsumption.petrol.motorway) * fuelPrice);
  fuelCost.hybrid = Math.round((cityMileage.value * fuelConsumption.hybrid.city +
    motorwayMileage.value * fuelConsumption.hybrid.motorway) * fuelPrice);

  if (fuelCost.petrol > fuelCost.hybrid) {
    costAdvantage.innerHTML = (fuelCost.petrol - fuelCost.hybrid) + ' zł';
    car.innerHTML = 'Hybrid';
  } else if (fuelCost.petrol < fuelCost.hybrid) {
    costAdvantage.innerHTML = (fuelCost.hybrid - fuelCost.petrol) + ' zł';
    car.innerHTML = 'Petrol';
  } else {
    costAdvantage.innerHTML = '0 zł';
    car.innerHTML = '';
  }
}

cityMileage.addEventListener('change', showFuelCost);
motorwayMileage.addEventListener('change', showFuelCost);
