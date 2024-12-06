const input = await Deno.readTextFile("input.txt");

let leftList = [];
let rightList = [];

for (const line of input.split("\n")) {
    const [leftLocationID, rightLocationID] = line.replace(/\s+/g, " ").split(" ");

    leftList.push(Number(leftLocationID))
    rightList.push(Number(rightLocationID))
}

// Sort by ascending order
const sortedLeftList = leftList.map((locationID) => Number(locationID)).sort((a, b) => a - b);
const sortedRightList = rightList.map((locationID) => Number(locationID)).sort((a, b) => a - b);

let differences = []

for (let i = 0; i < sortedLeftList.length; i++) {
    differences.push(Math.abs(sortedLeftList[i] - sortedRightList[i]))
}

// redcue an array down to one item, add all the numbers together
const totalDistance = differences.reduce((a, b) => a + b, 0)

console.log(totalDistance);