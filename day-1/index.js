const input = await Deno.readTextFile("input.txt");

let leftList = [];
let rightList = [];

for (const line of input.split("\n")) {
    const [leftLocationID, rightLocationID] = line.replace(/\s+/g, " ").split(" ");

    leftList.push(Number(leftLocationID))
    rightList.push(Number(rightLocationID))
}

let similarityScore = 0

for (const leftLocationID of leftList) {
    const rightListFrequency = rightList.filter((rightLocationID) => leftLocationID === rightLocationID).length
    
    similarityScore += leftLocationID * rightListFrequency
}

console.log(similarityScore)