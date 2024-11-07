{
    type Sentence = string;
    type Word = string;

    const countWordOccurrences = (sentence: Sentence, word: Word): number => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const words = lowerCaseSentence.split(/\b/);

        let count = 0;
        for (const w of words) {
            if (w === lowerCaseWord) {
                count++;
            }
        }

        return count;
    };

    let result = countWordOccurrences("I love typescript", "typescript");

    console.log(result);

}