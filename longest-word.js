// # Find the Longest Word

// Write a function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.

// ## Examples

// ```js
// findLongest("A thing of beauty is a joy forever") ➞ "forever"

// findLongest("Forgetfulness is by all means powerless") ➞ "forgetfulness"

// findLongest("Strengths is the longest and most commonly used word that contains only a single vowel.") ➞ "strengths"
// ```

function findLongest(sentence) {
    let longestWord = '';
    // TODO: write the logic to find the longest word
    // Split sentence into words
    const words = sentence.split(' '); // array of strings

    // Loop over each of the words
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongest("A thing of beauty is a joy forever")); // "forever"
console.log(findLongest("Forgetfulness is by all means powerless")) // "forgetfulness"
console.log(findLongest("Strengths is the longest and most commonly used word that contains only a single vowel.")) // "strengths"
