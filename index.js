const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const firstBase = 0;
let totalBatteries = batteryBatches.reduce(
  (param1, param2) => param1 + param2,
  firstBase
);

console.log(totalBatteries);
