type Vehicle = {
  id: number;
  driver: string;
  route: { from :string; to :string, distanceKm :number, fuelUsed :number }[];
};

let fleet: Vehicle[] = [
  {
    id: 1,
    driver: "Brad",
    route: [
      { from: "Delhi", to: "Jaipur", distanceKm: 200, fuelUsed: 25 },
      { from: "Jaipur", to: "Udaipur", distanceKm: 400,fuelUsed: 35 }
    ]
  },
  {
    id: 2,
    driver: "Bruce",
    route: [
      { from: "Mumbai", to: "Pune", distanceKm: 150, fuelUsed: 20 },
      { from: "Pune", to: "Nagpur", distanceKm: 700, fuelUsed: 60 }
    ]
  }
];

//Efficiency: km per litre
let efficiencyReport = fleet.map(v => {
  let totalDist = v.route.reduce((d,r) => d + r.distanceKm, 0);
  let totalFuel = v.route.reduce((d,r) => d + r.fuelUsed, 0);
  return { driver: v.driver, efficiency: (totalDist / totalFuel).toFixed(2)};
});

console.log("=== Fleet Efficiency Report ===");
console.table(efficiencyReport); // print the output in table format