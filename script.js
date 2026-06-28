function firstNonRepeatedChar(str) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));