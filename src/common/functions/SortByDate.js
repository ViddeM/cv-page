export function getSortedList(list) {
    return list.sort((a, b) => {
        if (a.end === "Present") {
            return -1;
        } else if (b.end === "Present") {
            return 1;
        }

        const dateA = Date.parse("01 " + a.end)
        const dateB = Date.parse("01 " + b.end)

        if (dateA > dateB) {
            return -1;
        } else if (dateA < dateB) {
            return 1;
        }
        return 0;
    })
}