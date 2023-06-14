function letterCombinations(input_digit) {
  // Mapping of digits to letters
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const combinations = [];

  // Recursive function to generate letter combinations
  function generateCombinations(index, currentCombination) {
    if (index === input_digit.length) {
      // All digits have been processed, add the current combination to the result
      combinations.push(currentCombination);
      return;
    }

    const digit = input_digit[index];
    const letters = digitToLetters[digit];

    // Iterate through each letter of the current digit
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      // Recursively generate combinations with the next digit
      generateCombinations(index + 1, currentCombination + letter);
    }
  }

  // Start the recursive function with an empty initial combination
  generateCombinations(0, "");

  // Sort the combinations lexicographically
  combinations.sort();

  return combinations;
}

module.exports = letterCombinations;
