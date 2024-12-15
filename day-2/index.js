const input = await Deno.readTextFile("input.txt")

let safeReports = 0

function calculateDifferences(levels) {
    let differences = []

    for (let i = 1; i < levels.length; i++) {
        differences.push(levels[i] - levels[i - 1])
    }

    return differences;
}

function ascendingDescending(differences) {
    const ascending = differences.every((level) => level > 0)
    const descending = differences.every((level) => level < 0)

    return { ascending, descending };
}

function determineSafeReport(levels) {
    const differences = calculateDifferences(levels);
    
    const { ascending, descending } = ascendingDescending(differences);
    
    return (ascending || descending) && differences.every(level => Math.abs(level) < 4)
}

for (const report of input.split("\n")) {
    const levels = report.split(" ").map((level) => Number(level))

    let safeReport = determineSafeReport(levels)

    if (!safeReport) {
        safeReport = [...Array(levels.length).keys()]
            .map(ix => levels.toSpliced(ix, 1))
            .some(determineSafeReport)

        // For loop could be used instead
        
        // for (const level in levels) {
        //     const newLevels = levels.toSpliced(level, 1)

        //     safeReport = determineSafeReport(newLevels)

        //     if (safeReport) break;
        // }
    }

    safeReports += safeReport
}

console.log(safeReports)
