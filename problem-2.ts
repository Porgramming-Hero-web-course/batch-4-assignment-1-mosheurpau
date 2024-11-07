{

    type NumberArray = number[];

    const removeDuplicates = (param: NumberArray): NumberArray => {
        const uniqueArray: NumberArray = [];
        const seen = new Set<number>();

        for (const number of param) {
            if (!seen.has(number)) {
                uniqueArray.push(number);
                seen.add(number);
            }
        }

        return uniqueArray;
    };

    let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

    console.log(result);
}