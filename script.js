function firstNonRepeatedChar(str) {
  let count = {};

  // Count frequency of each character
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Find the first non-repeated character
  for (let ch of str) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null;
}