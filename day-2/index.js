const input = await Deno.readTextFile("input.txt")

let safeReports = 0

for (const report of input.split("\n")) {
    const levels = report.split(" ").map((level) => Number(level))

    let differences = []

    for (let i = 1; i < levels.length; i++) {
        differences.push(levels[i] - levels[i - 1])
    }

    const ascending = differences.every((level) => level > 0)
    const descending = differences.every((level) => level < 0)

    safeReports += (ascending || descending) && differences.every(level => Math.abs(level) < 4)
}

console.log(safeReports)